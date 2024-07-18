<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="tableData.sources" :sources="data"></VTAutocomplete>
        <VTIconSubmenu />
        <div class="p-2 bg-rose-100">
            <VTIconResetPassword color="info" />
        </div>
        <div class="p-2 bg-indigo-400">
            <VTCard title="ini test table">
                <VTTable :columns="tableData.columns" :source="dataTests" method="Default" ref="tableTest">
                    <template #nomor="row">{{ row.index + 1 }}</template>
                    <template #sync="row">
                        <VTSyncStatus :column="row.data.status" />
                    </template>
                </VTTable>
            </VTCard>
        </div>

        <button @click="showDialog">test</button>
    </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import VTCard from '@/components/VTCard.vue';
import { VTDialogService } from '@/components/VTDialog';
import { onMounted, reactive, ref } from 'vue';
import { VTIconResetPassword, VTIconSubmenu, type VTTableColumn } from '..';
import VTTable from '@/components/VTTable/VTTable.vue';
import VTSyncStatus from '@/components/VTSyncStatus.vue';

interface DataTest {
    kode_program_studi: string,
    nama_program_studi: string,
    status: string,
    nama_jenjang_pendidikan: string,
}

const tableData = reactive({
    columns: [] as VTTableColumn[],
    sources: [] as DataTest[]
})

tableData.columns = [
    { propName: 'no', title: 'No.', name: 'nomor', type: 'Custome', rowClass: 'text-center' },
    { propName: 'kode_program_studi', title: 'Kode Program Studi', rowClass: 'text-center' },
    { propName: 'nama_program_studi', title: 'Nama Program Studi' },
    { propName: 'status', title: 'Status', name: 'sync', type: 'Custome' },
    { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
];

const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]

onMounted(() => {
    tableTest.value?.setDataSource(dataTests.value);
    tableTest.value?.refresh();
})

const showDialog = () => {
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan", { name: 'budi' }, 'warning')
        .then(result => {
            VTDialogService.show("Dialog", "ini Pesan" + result)
        })
}
const tableTest = ref<InstanceType<typeof VTTable> | null>(null);
const dataTests = ref(tableData.sources);

dataTests.value = [
    {
        kode_program_studi: 'CS101',
        nama_program_studi: 'Ilmu Komputer',
        status: 'sudah sync',
        nama_jenjang_pendidikan: 'Sarjana',
    },
    {
        kode_program_studi: 'ENG102',
        nama_program_studi: 'Teknik Elektro',
        status: 'sudah sync',
        nama_jenjang_pendidikan: 'Sarjana',
    },
    {
        kode_program_studi: 'BIO103',
        nama_program_studi: 'Biologi',
        status: 'belum sync',
        nama_jenjang_pendidikan: 'Magister',
    },
    {
        kode_program_studi: 'MATH104',
        nama_program_studi: 'Matematika',
        status: 'sudah sync',
        nama_jenjang_pendidikan: 'Sarjana',
    },
    {
        kode_program_studi: 'PHY105',
        nama_program_studi: 'Fisika',
        status: 'belum sync',
        nama_jenjang_pendidikan: 'Doktor',
    }
];
</script>