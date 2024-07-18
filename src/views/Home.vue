<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="tableData.sources" :sources="data"></VTAutocomplete>
        <VTIconSubmenu />
        <div class="p-2 bg-rose-100">
            <VTIconResetPassword color="info"/>
        </div>
        <div class="p-2 bg-indigo-400">
            <VTCard title="ini test table">
                <VTTable :columns="tableData.columns" :source="tableData.sources" />
            </VTCard>
        </div>
        
        <button @click="showDialog">test</button>
    </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import VTCard from '@/components/VTCard.vue';
import { VTDialogService } from '@/components/VTDialog';
import { onMounted, reactive, ref } from 'vue';
import { VTIconAddUser, VTIconMahasiswa, VTIconResetPassword, VTIconSubmenu, VTSidebarDropdown, type VTTableColumn } from '..';
import VTSidebarItem from '@/components/VTSidebarItem.vue';
import VTTable from '@/components/VTTable/VTTable.vue';

const tableData = reactive({
    columns: [] as VTTableColumn[],
    sources: []
})

tableData.columns = [
    { propName: 'no', title: 'No.', name: 'nomor', type: 'Custome', rowClass: 'text-center' },
    { propName: 'kode_program_studi', title: 'Kode Program Studi', rowClass: 'text-center' },
    { propName: 'nama_program_studi', title: 'Nama Program Studi' },
    { propName: 'status', title: 'Status' },
    { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
];

const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]

const showDialog = () => {
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan", { name: 'budi' }, 'warning')
        .then(result => {
            VTDialogService.show("Dialog", "ini Pesan" + result)
        })
}


</script>