<template>
  <div class="p-0">
    <div class="mb-4 grid grid-cols-2 justify-items-end">
      <div class="justify-self-start">
        <Dropdown :options="dropdownOptions" @select="onSelectDropdown" v-if="showCount" />
      </div>
      <div class="grid grid-cols-10 justify-items-end">
        <div class="col-span-9">
          <Search class="mr-4" @search="onSearch" v-if="showSearch" />
        </div>
        <div>
          <Costume @hiddenColumn="onChangeHiddenColumn" />
        </div>
      </div>
    </div>
    <FwbProgress :progress="progress" size="sm" v-if="isBussy" class="mb-[.05rem]" />
    <div class="border-[1.5px] border-gray-400 rounded-lg">
      <table
        :class="[props.class, 'min-w-full border-collapse bg-transparent text-gray-800 dark:text-gray-200 rounded-lg overflow-hidden']">
        <thead v-if="$slots.header">
          <slot name="header"></slot>
        </thead>
        <thead v-else>
          <tr>
            <Th v-for="column in props.columns.filter((x) => !x.hiddenColumn)" :key="column.name" :title="column.title"
              :column-key="column.propName || ''" :columns="props.columns" :header-class="column.headerClass"
              @sort="onSort" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in sortedData" :key="rowIndex" :class="[
            rowIndex % 2 === 0 ? 'dark:bg-gray-500 bg-gray-100' : 'bg-gray-200 dark:bg-gray-600', 'hover:bg-gray-300 dark:hover:bg-gray-700'
          ]">
            <td v-for="column in headerColumns.filter((x) => !x.hiddenColumn)" :key="column.name"
              :class="[props.bordered ? ' border-[1px]' : '', column.rowClass, 'px-4 py-2 border-r-0 border-b-[1px] border-gray-300']">
              <div v-if="column.name && column.type == 'Custome'">
                <slot :name="column.name" v-bind="{ data: row, index: rowIndex }" />
              </div>
              <div v-else-if="column.propName">
                <div v-if="column.type == 'Tanggal'">
                  {{ VTHelper.TanggalToDate(row[column.propName], 'dmY') }}
                </div>
                <div v-else>
                  {{ row[column.propName] }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="$slots.footer">
          <slot name="footer"></slot>
        </tfoot>
      </table>
    </div>
    <Pagination v-if="showPaginate" :totalPages="data.totalPages" @pagechange="onPageChange" />
  </div>
</template>

<script lang="ts">
import { FwbProgress } from 'flowbite-vue'
import { ref, reactive, watch, onMounted, computed, provide, toRefs } from 'vue'
import Dropdown from './VTDropdown.vue'
import Search from './VTSearch.vue'
import Pagination from './VTPagination.vue'
import Costume from './VTCostumeColumn.vue'
import Th from './VTHeader.vue'
import { VTHelper, type PaginateResponse } from '../../components'
import axios from 'axios'
import type { MethodType, VTTableColumn } from '.'


export default {
  name: 'TableComponent',
  components: {
    FwbProgress,
    Dropdown,
    Search,
    Pagination,
    Costume,
    // eslint-disable-next-line vue/no-reserved-component-names
    Th
  },
  props: {
    class: {
      type: String,
      default: ''
    },
    source: {
      type: Array as () => any[], // Define the expected type here
      default: () => []
    },
    columns: {
      type: Array as () => Array<VTTableColumn>,
      required: true
    },
    url: {
      type: String,
      default: ''
    },
    method: {
      type: String as () => MethodType,
      default: 'Default'
    },
    showPaginate: {
      type: Boolean,
      default: true
    },
    showCount: {
      type: Boolean,
      default: true
    },
    showSearch: {
      type: Boolean,
      default: true
    },
    tableName: {
      type: String,
      default: ''
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {
      class: classProp,
      source,
      columns,
      url,
      method,
      showPaginate,
      showCount,
      showSearch,
      tableName,
      bordered
    } = toRefs(props);

    const data = reactive({
      timer: null,
      displayedData: [] as any[],
      source: [] as any[],
      totalPages: 0,
      paginate: { page: 1, count: 10, cari: '' }
    });

    const sortState = reactive({
      columnKey: '',
      sortOrder: null as 'asc' | 'desc' | null
    });

    const headerColumns = ref(columns.value);
    const dropdownOptions = [10, 25, 50];
    const selectedDropdownOption = ref(dropdownOptions[0]);
    const searchQuery = ref('');
    const progress = ref(0);
    const isBussy = ref(false);
    const isPending = ref(false);

    onMounted(() => {
      if (method.value == 'Default') {
        data.source = source.value;
        return;
      }
      if (method.value == 'Post' || method.value == 'Get') {
        getData();
        return;
      }
    });

    watch(isBussy, (newValue) => {
      if (newValue) {
        startProgress();
      }
    });

    watch(isPending, (newValue) => {
      if (!newValue && progress.value >= 80 && progress.value < 100) {
        continueProgress();
      }
    });

    const startProgress = () => {
      return new Promise<void>((resolve) => {
        if (progress.value < 80) {
          const interval = setInterval(() => {
            if (progress.value < 80) {
              progress.value += 1;
            } else {
              isPending.value = true;
              clearInterval(interval);
              resolve();
            }
          }, 20);
        } else if (progress.value >= 80 && progress.value < 100) {
          resolve();
        }
      });
    };

    const continueProgress = () => {
      const interval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 1;
        } else {
          progress.value = 0;
          isBussy.value = false;
          clearInterval(interval);
        }
      }, 1);
    };


    const setDataSource = async (datax: any[]) => {
      data.source = datax;
    };

    const refresh = async () => {
      if (method.value == 'Default') {
        data.source = source.value;
        updateDisplayedData();
      } else {
        await getData();
      }
    };

    const getData = async () => {
      isBussy.value = true;
      await startProgress();

      try {
        let request = {
          method: method.value.toLowerCase(),
          mode: 'cors',
          url: url.value,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'bearer ' + localStorage.getItem('token')
          }
        } as any;

        if (method.value == "Post") {
          request.data = JSON.stringify(data.paginate);
        }
        const result = (await axios.request(request)).data
        if (method.value == "Post") {
          const pagination = result as PaginateResponse;
          data.source = pagination.data;
          data.totalPages = result.pager.total;
          updateDisplayedData();
        } else if (method.value == "Get") {
          if (result.data) {
            data.source = result.data;
          } else {
            data.source = result;
          }
          data.totalPages = result.data ? Math.ceil(result.data.length / data.paginate.count) : 0;
          updateDisplayedData();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        isPending.value = false;
      }
    };

    const updateDisplayedData = () => {
      if (
        showPaginate.value &&
        (method.value === "Get" || method.value === "Default")
      ) {
        const startIndex = (data.paginate.page - 1) * data.paginate.count;
        const endIndex = startIndex + data.paginate.count;
        data.displayedData = data.source ? data.source.slice(startIndex, endIndex) : [];
      } else {
        data.displayedData = data.source;
      }
    };

    const onSelectDropdown = (option: number) => {
      data.paginate.count = option;
      data.paginate.page = 1;
      getData();
    };

    const onSearch = (query: string) => {
      data.paginate.cari = query;
      if (query.length < 3) {
        data.displayedData = data.source;
        return;
      }
      data.paginate.page = 1;
      if (showPaginate.value && method.value === 'Post') {
        getData();
      } else {
        searchWithoutPaginate(query);
      }
    };

    const searchWithoutPaginate = (query: string) => {
      const filteredData = data.source.filter(item => {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(query.toLowerCase())
        );
      });
      data.displayedData = filteredData;
    };

    const onPageChange = (page: number) => {
      data.paginate.page = page;
      if (method.value === "Post") {
        getData();
      } else if (method.value === "Get") {
        updateDisplayedData();
      }
    };

    const updateHiddenColumns = (columns: VTTableColumn[]) => {
      headerColumns.value = columns.map((x) => x);
    };

    const sortedData = computed(() => {
      if (!sortState.columnKey || !sortState.sortOrder || !data.displayedData.length) {
        return data.displayedData;
      }

      return [...data.displayedData].sort((a, b) => {
        const aValue = a[sortState.columnKey];
        const bValue = b[sortState.columnKey];

        if (sortState.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    });

    const onChangeHiddenColumn = (columns: VTTableColumn[]) => {
      updateHiddenColumns(columns);
    };

    const onSort = ({
      columnKey,
      sortOrder
    }: {
      columnKey: string,
      sortOrder: 'asc' | 'desc' | null
    }) => {
      sortState.columnKey = columnKey;
      sortState.sortOrder = sortOrder;
    };

    provide('sort', onSort);
    provide('hiddenColumn', { updateHiddenColumns, tableProps: { refresh: updateHiddenColumns, columns: columns.value, tableName: tableName.value } });
    provide('hiddenColumnx', { tableProps: { bordered: bordered.value, columns: headerColumns.value } });

    return {
      props,
      classProp,
      data,
      headerColumns,
      dropdownOptions,
      selectedDropdownOption,
      searchQuery,
      progress,
      isBussy,
      isPending,
      sortedData,
      onSelectDropdown,
      onSearch,
      onPageChange,
      updateDisplayedData,
      onSort,
      updateHiddenColumns,
      onChangeHiddenColumn,
      Dropdown,
      Search,
      Pagination,
      Costume,
      VTHelper,
      refresh,
      setDataSource,
    };
  }
};

///////////
///// use Reference 
// //// const vTTable = ref<InstanceType<typeof VTTable> | null>(null);
</script>
