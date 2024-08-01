<template>
  <div class="p-0">
    <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col md:flex-row md:justify-start items-end md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <Dropdown :options="dropdownOptions" @select="onSelectDropdown" v-if="showCount" />
        <Costume @hiddenColumn="onChangeHiddenColumn" />
      </div>
      <div class="w-full flex justify-end">
          <Search @search="onSearch" v-if="showSearch" />
      </div>
    </div>
    <FwbProgress :progress="progress" size="sm" v-if="isBussy" class="mb-[.05rem]" />
    <div
      :class="['border-[1.5px] border-gray-400 overflow-x-auto custom-scrollbar', isLargeScreen ? 'rounded-lg' : 'rounded-[.80rem]']">
      <table
        :class="[props.class, 'min-w-full border-collapse bg-transparent text-gray-800 dark:text-gray-200 rounded-t-lg overflow-hidden']">
        <thead v-if="$slots.header && isLargeScreen">
          <slot name="header"></slot>
        </thead>
        <thead v-else-if="isLargeScreen">
          <tr>
            <Th v-for="column in props.columns.filter((x) => !x.hiddenColumn)" :key="column.name" :title="column.title"
              :column-key="column.propName || ''" :columns="props.columns" :header-class="column.headerClass"
              @sort="onSort" />
          </tr>
        </thead>
        <tbody v-if="isLargeScreen">
          <tr v-for="(row, rowIndex) in sortedData" :key="rowIndex" :class="[
            rowIndex % 2 === 0 ? 'bg-slate-300 dark:bg-slate-600' : 'bg-slate-200 dark:bg-slate-500', 'hover:bg-slate-400 dark:hover:bg-slate-700'
          ]">
            <td v-for="column in headerColumns.filter((x) => !x.hiddenColumn)" :key="column.name"
              :class="[props.bordered ? ' border-[1px]' : '', column.rowClass, 'px-4 py-2 border-r-0 border-b-[1px] border-gray-300 text-nowrap']">
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
        <tbody v-else>
          <div class="">
            <VTAccordion>
              <VTAccordionPanel v-for="row in sortedData" :key="row.name">
                <VTAccordionHeader>{{ row[headerName] }}</VTAccordionHeader>
                <VTAccordionContent class="relative">
                  <div class="overflow-y-auto h-1/2" v-for="(col, colIndex) in headerColumns" :key="colIndex">
                    <div v-if="col.name === 'action'"
                      class="absolute p-2 top-0 right-0 flex justify-end  hp:max-[640px]:w-full">
                      <VTButton outline color="blue" class="group" @click="showAction = !showAction">
                        <IconEllipsis size="md" color="white" />
                      </VTButton>
                    </div>
                    <VTLabelItem v-if="col.type !== 'Custome' && col.type !== 'Tanggal'" :labelText="col.title"
                      :value="row[col.propName ? col.propName : '']" />
                    <VTLabelItem v-if="col.type === 'Tanggal' && col.propName" :labelText="col.title"
                      :value="VTHelper.TanggalToDate(row[col.propName ? col.propName : ''], 'dmY')" />
                  </div>
                  <div
                    :class="['p-3 w-auto rounded-lg text-white absolute pt-0 top-14 right-[.55rem] bg-gray-600', showAction ? 'block' : ' hidden']">
                    <div class="h-auto w-auto *:flex-col *:pt-6">
                      <template v-for="(custome, cusIndex) in headerColumns" :key="cusIndex">
                        <slot v-if="custome.name === 'action'" :name="custome.name"
                          v-bind="{ data: row, index: cusIndex }" />
                      </template>
                    </div>
                  </div>
                </VTAccordionContent>
              </VTAccordionPanel>
            </VTAccordion>
          </div>

        </tbody>
        <tfoot v-if="$slots.footer && isLargeScreen" class="bg-slate-200 dark:bg-slate-700">
          <slot name="footer" v-bind="sortedData"></slot>
        </tfoot>
      </table>
    </div>
    <Pagination v-if="showPaginate" :totalPages="data.totalPages" @pagechange="onPageChange" />
  </div>
</template>

<script lang="ts">
import { FwbProgress } from 'flowbite-vue'
import VTAccordion from '../VTAccordion/VTAccordion.vue'
import VTAccordionContent from '../VTAccordion/VTAccordionContent.vue'
import VTAccordionPanel from '../VTAccordion/VTAccordionPanel.vue'
import VTAccordionHeader from '../VTAccordion/VTAccordionHeader.vue'
import { ref, reactive, watch, onMounted, computed, provide, toRefs } from 'vue'
import Dropdown from './VTDropdown.vue'
import Search from './VTSearch.vue'
import Pagination from './VTPagination.vue'
import Costume from './VTCostumeColumn.vue'
import Th from './VTHeader.vue'
import { VTHelper, type PaginateResponse } from '../../components'
import axios from 'axios'
import type { MethodType, VTTableColumn } from '.'
import { useMediaQuery } from '@vueuse/core'
import VTLabelItem from '../VTLabelItem.vue';
import VTButton from '../VTButton/VTButton.vue'
import IconEllipsis from '@/icons/IconEllipsis.vue'

export default {
  name: 'TableComponent',
  components: {
    FwbProgress,
    VTAccordion,
    VTLabelItem,
    VTButton,
    IconEllipsis,
    Dropdown,
    Search,
    VTAccordionContent,
    VTAccordionHeader,
    VTAccordionPanel,
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
      paginate: { page: 1, count: 10, cari: '', order: { field: '', direction: null as 'asc' | 'desc' | null } }
    });

    const sortState = reactive({
      columnKey: '',
      sortOrder: null as 'asc' | 'desc' | null
    });

    const headerColumns = ref(columns.value);
    const header = headerColumns.value.find(x => x.isMobileHeader)?.propName;
    const headerName: string = header != null || header != undefined ? header : '';
    const dropdownOptions = [10, 25, 50];
    const selectedDropdownOption = ref(dropdownOptions[0]);
    const searchQuery = ref('');
    const progress = ref(0);
    const isBussy = ref(false);
    const isPending = ref(false);
    const isLargeScreen = useMediaQuery('(min-width: 768px)');
    const showAction = ref(false);

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

        if (method.value === "Post") {
          if(data.paginate.order.direction === null){
            data.paginate.order.direction = 'desc'
          }
          request.data = JSON.stringify(data.paginate);
        }
        const result = (await axios.request(request)).data
        if (method.value === "Post") {
          const pagination = result as PaginateResponse;
          data.source = pagination.data;
          data.totalPages = result.pager.total;
          updateDisplayedData();
        } else if (method.value === "Get") {
          data.source = result.data;
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
      if (query.length < 3) {
        watch(() => query, (newVal, oldVal)=> {
          if(newVal === oldVal){
            getData();
          }
        })
        data.displayedData = data.source;
        // return;
      }
      data.paginate.cari = query;
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
      // return data.displayedData;
      if (!sortState.columnKey || !sortState.sortOrder || !data.displayedData.length) {
        return data.displayedData;
      }

      const safeSortOrder = sortState.sortOrder || 'desc';

      return [...data.displayedData].sort((a, b) => {
        const aValue = a[sortState.columnKey];
        const bValue = b[sortState.columnKey];

        if (safeSortOrder === 'asc') {
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
      const safeSortOrder = sortOrder || 'desc';

      sortState.columnKey = columnKey;
      sortState.sortOrder = sortOrder;

      data.paginate.order.field = columnKey;
      data.paginate.order.direction = safeSortOrder;

      if (method.value.toLowerCase() === 'post') {
        getData();
      } else {
        // Lakukan pengurutan langsung pada data yang sudah ada
        data.displayedData = [...data.displayedData].sort((a, b) => {
          const aValue = a[columnKey];
          const bValue = b[columnKey];

          if (sortOrder === 'desc') {
            return aValue < bValue ? 1 : -1;
          } else {
            return aValue > bValue ? 1 : -1;
          }
        });
      }
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
      isLargeScreen,
      headerName,
      showAction
    };
  }
};

</script>
<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
  /* Height of the horizontal scrollbar */
  width: 8px;
  /* Width of the vertical scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  /* Color of the scrollbar thumb */
  border-radius: 0px 0px 8px 8px;
  /* Roundness of the scrollbar thumb */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent
    /* Color of the scrollbar track */
}
</style>