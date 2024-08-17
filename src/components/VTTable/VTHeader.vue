<template>
    <th :hidden="hiddenCol"
        :class="[$attrs.class, headerClass, { 'cursor-pointer': sortable }, bordered ? 'border-[1px]' : '']"
        @click="toggleSort"
        class=" text-nowrap p-4 dark:bg-slate-700 text-gray-600 font-semibold bg-slate-200 dark:text-gray-200 border-b-[1.5px] border-gray-400">
        <div
            :class="['flex flex-row items-center', headerPosition == 'left' ? 'justify-start' : headerPosition == 'right' ? 'justify-end' : headerPosition == 'between' ? 'justify-between' : 'justify-center']">
            <span v-if="props.title">
                {{ title }}
            </span>
            <span v-else>
                <slot></slot>
            </span>
            <div v-if="props.sorted" class="pl-4 mt-2 text-end">
                <span v-if="sortOrder === 'asc'"
                    class=" cursor-default ml-1 text-xs text-gray-500 dark:text-gray-400">&#9650;</span>
                <span v-else-if="sortOrder === 'desc'"
                    class="ml-1 text-xs text-gray-500 dark:text-gray-400">&#9660;</span>
                <span v-else class="ml-1 text-xs text-gray-500 dark:text-gray-400 flex flex-col">
                    <div class=" cursor-default leading-[1.5px]">&#9650;</div>
                    <div class=" cursor-default">&#9660;</div>
                </span>
            </div>
        </div>
    </th>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import type { VTTableColumn } from '.';

const props = withDefaults(defineProps<{
    title?: string
    columnKey?: string
    sorted?: boolean
    headerClass?: string
    headerPosition?: 'left' | 'center' | 'right' | 'between'
}>(), { sorted: true, headerPosition: 'left' });

const emit = defineEmits(['sort']);

const sortOrder = ref<'asc' | 'desc' | null>(null);

const sort = inject('sort') as (sortDetails: { columnKey: string; sortOrder: 'asc' | 'desc' | null }) => void;
const hiddenCol = ref(false);
const bordered = ref(false);

const changeColumn = (columns: VTTableColumn[]) => {
    if (columns && columns.length > 0) {
        const column = columns.find(x => x.propName == props.columnKey)
        if (column) {
            hiddenCol.value = column?.hiddenColumn as boolean;
        }
    }
}

const { tableProps } = inject('hiddenColumnx') as any;

bordered.value = tableProps.bordered;
const columns = tableProps.columns.value as VTTableColumn[];
changeColumn(columns);
watch(tableProps.columns, (columns: VTTableColumn[]) => {
    changeColumn(columns);
})

const toggleSort = () => {
    if (props.sorted) {
        if (sortOrder.value === 'asc') {
            sortOrder.value = 'desc';
        } else if (sortOrder.value === 'desc') {
            sortOrder.value = null;
        } else {
            sortOrder.value = 'asc';
        };
        sort({ columnKey: props.columnKey!, sortOrder: sortOrder.value });
    }
};

const sortable = computed(() => sortOrder.value !== null);

</script>
