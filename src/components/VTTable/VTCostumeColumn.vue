<script setup lang="ts">
import { inject, provide, ref } from 'vue';
import IconGear from '../../icons/IconGear.vue';
import type { VTTableColumn } from '.';

const emit = defineEmits(['hiddenColumn']);

const hiddens = inject('hiddenColumn') as {
    updateHiddenColumns: Function;
    tableProps: {
        tableName?: string;
        columns: VTTableColumn[];
    }
}

// const props = defineProps<{
//     tableName?: string;
//     columns: VTTableColumn[]
// }>()
const props = hiddens.tableProps

const isShow = ref(false);

function saveHiddenColumns() {
    const hiddenColumns: number[] = [];
    props.columns.forEach((item, index) => {
        if (item.hiddenColumn)
            hiddenColumns.push(index);
    });

    if (props.tableName) {
        localStorage.setItem(props.tableName, JSON.stringify(hiddenColumns))
    }
}

const columnsStorage = props.tableName ? localStorage.getItem(props.tableName) : null;
if (columnsStorage) {
    try {
        const storage = JSON.parse(columnsStorage) as number[];
        storage.forEach(element => {
            let col = props.columns[element];
            col.hiddenColumn = true;
        });
    } catch (e) {
        console.error('Error parsing columns from localStorage', e);
    }
} else {
    // saveHiddenColumns();
}

const showed = () => {
    isShow.value = !isShow.value;
}

const toggleColumn = (index: number) => {
    const col = props.columns[index];
    if (col.hiddenColumn) {
        provide(col.name, {
            keyColumn: col.propName,
            isHidden: col.hiddenColumn
        })
    }
    col.hiddenColumn = !col.hiddenColumn;
    emit('hiddenColumn', props.columns);
    if (props.tableName) {
        saveHiddenColumns()
    }
    hiddens.updateHiddenColumns(props.columns);
}
</script>

<template>
    <div class="flex justify-end flex-col items-end">
        <button @click="showed" data-dropdown-toggle="dropmenu"
            class="bg-blue-600 rounded-lg p-[.7rem] text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="button" aria-expanded="true">
            <span class="sr-only">Costume Data Column</span>
            <IconGear />
        </button>
        <div id="vtcolumn" class="absolute translate-y-2/4 translate-x-[-50px]" :class="isShow ? '' : 'hidden'">
            <div class="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Showed Data</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    <li v-for="(column, index) in props.columns" :key="index">
                        <label
                            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <input type="checkbox" class="mr-2" :checked="!column.hiddenColumn"
                                @change="toggleColumn(index)">
                            {{ column.title }}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>