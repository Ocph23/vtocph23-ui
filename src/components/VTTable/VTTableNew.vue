<template>
    <div class="p-0">
        <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
                class="flex flex-col md:flex-row md:justify-start items-end md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <Dropdown v-model="data.paginate.pageSize" @select="onSelectDropdown" :options="dropdownOptions"
                    v-if="showCount" />
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
                :class="[classProp, 'min-w-full border-collapse bg-transparent text-gray-800 dark:text-gray-200 rounded-t-lg overflow-hidden']">
                <thead v-if="$slots.header && isLargeScreen">
                    <slot name="header"></slot>
                </thead>
                <thead v-else-if="isLargeScreen">
                    <tr>
                        <Th v-for="column in columnsProp.filter((x) => !x.hiddenColumn)" :key="column.name"
                            :title="column.title" :column-key="column.propName || ''" :columns="columnsProp"
                            :header-class="column.headerClass" :header-position="column.headerPosition"
                            @sort="onSort" />
                    </tr>
                </thead>
                <tbody v-if="isLargeScreen">
                    <tr v-for="(row, rowIndex) in sortedData" :key="rowIndex" :class="[
                        !stripedProp ? '' : rowIndex % 2 === 0 ? 'bg-slate-300 dark:bg-slate-600' : 'bg-slate-200 dark:bg-slate-500',
                        hoveredProp ? 'hover:bg-slate-400 dark:hover:bg-slate-700' : '']">
                        <td v-for="column in headerColumns.filter((x) => !x.hiddenColumn)" :key="column.name"
                            :class="[borderedProp ? ' border-[1px]' : '', column.rowClass, 'px-4 py-2 border-r-0 border-b-[1px] border-gray-100 text-nowrap']">
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
                    <VTAccordion>
                        <VTAccordionPanel v-for="row in sortedData" :key="row.name">
                            <VTAccordionHeader>{{ row[headerName] }}</VTAccordionHeader>
                            <VTAccordionContent class="relative">
                                <div class="overflow-y-auto h-1/2" v-for="(col, colIndex) in headerColumns"
                                    :key="colIndex">
                                    <div v-if="col.name === 'action'"
                                        class="absolute p-2 top-0 right-0 flex justify-end  hp:max-[640px]:w-full">
                                        <VTButton outline color="blue" class="group" @click="showAction = !showAction">
                                            <IconEllipsis size="md" :color="'primary'" />
                                        </VTButton>
                                    </div>
                                    <VTLabelItem v-if="col.type !== 'Custome' && col.type !== 'Tanggal'"
                                        :labelText="col.title" :value="row[col.propName ? col.propName : '']" />
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
                </tbody>
                <tfoot v-if="$slots.footer && isLargeScreen" class="bg-slate-200 dark:bg-slate-700">
                    <slot name="footer" v-bind="footerData(sortedData)"></slot>
                </tfoot>
            </table>
        </div>
        <VTPaginationView v-if="showPaginate" :page-number="data.paginate.currentPage"
            :total-records="props.source.totalRecords" :page-size="data.paginate.pageSize" @pagechange="onPageChange" />
    </div>
</template>

<script setup lang="ts">
import { FwbProgress } from 'flowbite-vue'
import VTAccordion from '../VTAccordion/VTAccordion.vue'
import VTAccordionContent from '../VTAccordion/VTAccordionContent.vue'
import VTAccordionPanel from '../VTAccordion/VTAccordionPanel.vue'
import VTAccordionHeader from '../VTAccordion/VTAccordionHeader.vue'
import { ref, reactive, watch, onMounted, computed, provide, toRefs, toRef, withDefaults } from 'vue'
import Dropdown from './VTDropdown.vue'
import Search from './VTSearch.vue'
import VTPaginationView from './VTPaginationView.vue'
import Costume from './VTCostumeColumn.vue'
import Th from './VTHeader.vue'
import { VTHelper, type PaginateResponse } from '..'
import type { MethodXType, VTTableColumn, VTTablePagination, VTTableSource } from '.'
import { useMediaQuery } from '@vueuse/core'
import VTLabelItem from '../VTLabelItem.vue';
import VTButton from '../VTButton/VTButton.vue'
import IconEllipsis from '@/icons/IconEllipsis.vue'

/**
 * Props definition (with defaults)
 * Using withDefaults so default values are preserved in <script setup>
 */

const props = withDefaults(defineProps<{
    class?: string
    source: VTTableSource
    columns: VTTableColumn[]
    url?: string
    method?: MethodXType
    showPaginate?: boolean
    showCount?: boolean
    showSearch?: boolean
    tableName?: string
    bordered?: boolean
    striped?: boolean
    hovered?: boolean
}>(), {
    class: '',
    url: '',
    method: 'All' as MethodXType,
    showPaginate: true,
    showCount: true,
    showSearch: true,
    tableName: '',
    bordered: false,
    striped: true,
    hovered: true
})

// create toRefs / toRef for template usage and reactivity
const classProp = toRef(props, 'class')
const columnsProp = toRef(props, 'columns')
const showPaginate = toRef(props, 'showPaginate')
const showCount = toRef(props, 'showCount')
const showSearch = toRef(props, 'showSearch')
const tableNameProp = toRef(props, 'tableName')
const borderedProp = toRef(props, 'bordered')
const stripedProp = toRef(props, 'striped')
const hoveredProp = toRef(props, 'hovered')

const emit = defineEmits(['onChange']);


/* reactive data */
const data = reactive({
    timer: null as any,
    displayedData: [] as any[],
    source: [] as any[],
    totalPages: 0,
    paginate: props.source.paginate ?? {
        currentPage: 1, pageSize: 10, searchTerm: '', sortOrder: 'asc', columnOrder: ''
    } as VTTablePagination,
})


const sortState = reactive({
    columnKey: '',
    sortOrder: null as 'asc' | 'desc' | null
})

const headerColumns = ref<VTTableColumn[]>(columnsProp.value ?? [])
// headerName for mobile accordion title (computed)
const headerName = computed(() => {
    const h = headerColumns.value.find(x => x.isMobileHeader)
    return h?.propName ?? ''
})

const dropdownOptions = [5, 10, 25, 50, 100]
// const selectedDropdownOption = ref(dropdownOptions[0])
// const searchQuery = ref('')
const progress = ref(0)
const isBussy = ref(false)
const isPending = ref(false)
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const showAction = ref(false)

/* lifecycle */
onMounted(() => {
    updateDisplayedData()
})

/* watchers */
watch(isBussy, (newValue) => {
    if (newValue) {
        startProgress()
    }
})

watch(isPending, (newValue) => {
    if (!newValue && progress.value >= 80 && progress.value < 100) {
        continueProgress()
    }
})

watch(props.source, (newValue) => {
    setDataSource(newValue.data)
})

/* helpers */
const footerData = (d: any) => {
    const datas = Object.entries(d)
    return datas.map(x => JSON.parse(JSON.stringify(x[1])))
}

/* progress animations */
const startProgress = () => {
    return new Promise<void>((resolve) => {
        if (progress.value < 80) {
            const interval = setInterval(() => {
                if (progress.value < 80) {
                    progress.value += 1
                } else {
                    isPending.value = true
                    clearInterval(interval)
                    resolve()
                }
            }, 20)
        } else if (progress.value >= 80 && progress.value < 100) {
            resolve()
        }
    })
}

const continueProgress = () => {
    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 1
        } else {
            progress.value = 0
            isBussy.value = false
            clearInterval(interval)
        }
    }, 1)
}

/* public methods (used in template) */
const setDataSource = async (datax: any[]) => {
    data.source = datax
    updateDisplayedData()
}

const refresh = async () => {
    try {
        isBussy.value = true
        await startProgress()
        updateDisplayedData()
    } catch (error) {
        console.error('Error refreshing data:', error)
    } finally {
        // keep finishing animation
        isBussy.value = false
        continueProgress()
    }
}

const updateDisplayedData = () => {
    if (
        showPaginate.value &&
        (props.method === 'All')
    ) {
        data.totalPages = Math.ceil((data.source?.length ?? 0) / data.paginate.pageSize)
        const startIndex = (data.paginate.currentPage - 1) * data.paginate.pageSize
        const endIndex = startIndex + data.paginate.pageSize
        const beforeFilter = data.source ? data.source.slice(startIndex, endIndex) : []
        if (data.paginate.searchTerm && data.paginate.searchTerm.length >= 3) {
            data.displayedData = searchWithoutPaginate(data.paginate.searchTerm).slice(startIndex, endIndex)
        } else {
            data.displayedData = beforeFilter
        }
    } else {
        data.displayedData = data.source
    }
}

/* handlers */
const onSelectDropdown = (option: number) => {
    data.paginate.pageSize = option
    data.paginate.currentPage = 1
    emit('onChange', data.paginate);
    // updateDisplayedData()
    // if (props.method === 'All') {
    // } else {
    //     getData()
    // }
}

const onSearch = (query: string) => {
    if (query.length < 3) {
        return
    }
    data.paginate.searchTerm = query
    data.paginate.currentPage = 1
    if (showPaginate.value && props.method === 'Paginate') {
        emit('onChange', data.paginate);
    } else {
        updateDisplayedData()
    }
}

const searchWithoutPaginate = (query: string) => {
    const filteredData = data.source.filter(item => {
        return Object.values(item).some(value =>
            String(value).toLowerCase().includes(query.toLowerCase())
        )
    })
    return filteredData
}

const onPageChange = (page: number) => {
    data.paginate.currentPage = page
    if (props.method === 'Paginate') {
        emit('onChange', data.paginate);
    } else {
        updateDisplayedData()
    }
}

const updateHiddenColumns = (columns: VTTableColumn[]) => {
    headerColumns.value = columns.map((x) => x)
}

const sortedData = computed(() => {
    if (!sortState.columnKey || !sortState.sortOrder || !(data.displayedData?.length)) {
        return data.displayedData
    }

    const safeSortOrder = sortState.sortOrder || 'desc'

    return [...data.displayedData].sort((a, b) => {
        const aValue = a[sortState.columnKey]
        const bValue = b[sortState.columnKey]

        if (safeSortOrder === 'asc') {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue < bValue ? 1 : -1
        }
    })
})

const onChangeHiddenColumn = (columns: VTTableColumn[]) => {
    updateHiddenColumns(columns)
}

const onSort = ({ columnKey, sortOrder }: { columnKey: string, sortOrder: 'asc' | 'desc' | null }) => {
    const safeSortOrder = sortOrder || 'desc'
    sortState.columnKey = columnKey
    sortState.sortOrder = sortOrder

    data.paginate.columnOrder = columnKey
    data.paginate.sortOrder = safeSortOrder

    if (props.method === 'Paginate') {
        emit('onChange', data.paginate);
    } else {
        data.displayedData = [...data.displayedData].sort((a, b) => {
            const aValue = a[columnKey]
            const bValue = b[columnKey]

            if (sortOrder === 'desc') {
                return aValue < bValue ? 1 : -1
            } else {
                return aValue > bValue ? 1 : -1
            }
        })
    }
}

/* provide (same keys as before) */
provide('sort', onSort)
provide('hiddenColumn', { updateHiddenColumns, tableProps: { refresh: updateHiddenColumns, columns: columnsProp.value, tableName: tableNameProp.value } })
provide('hiddenColumnx', { tableProps: { bordered: borderedProp.value, columns: headerColumns.value } })

/* Expose for devtools or external access if needed (not strictly required) */
defineExpose({
    refresh,
    setDataSource
})

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
