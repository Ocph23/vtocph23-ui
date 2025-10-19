<template>
    <MainLayout>
        <VTTable :hovered="true" :striped="true" :columns="tableData.columns" :source="datas" method="Default"
            ref="tableTest" :showSearch="false">
            <template #sync="row">
                <VTSyncStatus :column="row.data.status" />
            </template>
            <template #action="row">
                <div class="flex flex-row items-center min-w-">
                    <VTButtonAction type="detail" @click="row.data" />
                    <VTButtonAction :style="'warning'" type="edit" @click="row.data" />
                    <VTButtonAction :style="'danger'" type="delete" @click="row.data" />
                </div>
            </template>
            <template #nomor="row">{{ row.index + 1 }}</template>
            <template #tanggal="row">{{ row.data.tanggal.date }}</template>
            <template #namaProdi="row"><a href="">{{ row.data.nama_program_studi }}</a></template>
            <template #footer="datas">
                <tr>
                    <th colspan="7" class="text-end">Ini di dalam footer x {{ ShowResult(datas) }} </th>
                    <th class="text-end"> </th>
                </tr>
            </template>
        </VTTable>
    </MainLayout>
</template>

<script setup lang="ts">
import type { Tanggal } from '@/components';
import VTButtonAction from '@/components/VTButtonAction.vue';
import VTSyncStatus from '@/components/VTSyncStatus.vue';
import type { VTTableColumn } from '@/components/VTTable';
import VTTable from '@/components/VTTable/VTTable.vue';
import VTTableX from '@/components/VTTable/VTTableX.vue';
import { onMounted, reactive, ref } from 'vue';
import MainLayout from './MainLayout.vue';


interface DataTest {
    id: string
    kode_mata_kuliah: string
    nama_mata_kuliah: string
    status: string
    sks_mata_kuliah: number,
    nama_program_studi: string,
    id_jenis_mata_kuliah: string,
    tanggal_sk: Tanggal
}

const tableData = reactive({
    columns: [] as VTTableColumn[],
    sources: [] as DataTest[],
    text: false,
    testDate: [] as Tanggal[],
    coba: '' as string
})

tableData.columns = [
    { title: "Action", name: 'action', type: 'Custome' },
    { propName: "kode_mata_kuliah", title: "Kode Matakuliah ", headerPosition: "between" },
    { propName: "nama_mata_kuliah", title: "Nama Matakuliah", headerPosition: "between", isMobileHeader: true },
    { propName: "status", title: "Status", type: 'Custome', headerPosition: "between" },
    { propName: "sks_mata_kuliah", title: "SKS", headerPosition: "between" },
    { propName: "tanggal_sk", title: "Tanggal SK", type: 'Custome', headerPosition: "between" },
    { propName: "nama_program_studi", title: "Program Studi", headerPosition: "between" },
]
const tableTest = ref<InstanceType<typeof VTTable> | null>(null)

onMounted(() => {
    tableTest.value?.setDataSource(dataTests.value)
    tableTest.value?.refresh()
})

const dataTests = ref(tableData.sources)

const createTanggal = (date: string): Tanggal => {
    return {
        date,
        timezone_type: 3,
        timezone: 'UTC',
        getTanggal: () => new Date(date).toLocaleDateString('id-ID')
    };
};
const ShowResult = (data: any[]) => {
    data.reduce((total, item) => {
        return total + item.sks_mata_kuliah
    }, 0)
};



const datas = [
    {
        id: '1',
        kode_mata_kuliah: 'CS101',
        nama_mata_kuliah: 'Pemrograman Dasar',
        status: 'sudah sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '2',
        kode_mata_kuliah: 'CS102',
        nama_mata_kuliah: 'Struktur Data',
        status: 'belum sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '3',
        kode_mata_kuliah: 'CS103',
        nama_mata_kuliah: 'Basis Data',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '4',
        kode_mata_kuliah: 'CS104',
        nama_mata_kuliah: 'Jaringan Komputer',
        status: 'belum sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '3',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '5',
        kode_mata_kuliah: 'CS105',
        nama_mata_kuliah: 'Sistem Operasi',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '6',
        kode_mata_kuliah: 'CS101',
        nama_mata_kuliah: 'Pemrograman Dasar',
        status: 'sudah sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '7',
        kode_mata_kuliah: 'CS102',
        nama_mata_kuliah: 'Struktur Data',
        status: 'belum sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '8',
        kode_mata_kuliah: 'CS103',
        nama_mata_kuliah: 'Basis Data',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '9',
        kode_mata_kuliah: 'CS104',
        nama_mata_kuliah: 'Jaringan Komputer',
        status: 'belum sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '3',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '10',
        kode_mata_kuliah: 'CS105',
        nama_mata_kuliah: 'Sistem Operasi',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '1',
        kode_mata_kuliah: 'CS101',
        nama_mata_kuliah: 'Pemrograman Dasar',
        status: 'sudah sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '2',
        kode_mata_kuliah: 'CS102',
        nama_mata_kuliah: 'Struktur Data',
        status: 'belum sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '3',
        kode_mata_kuliah: 'CS103',
        nama_mata_kuliah: 'Basis Data',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '4',
        kode_mata_kuliah: 'CS104',
        nama_mata_kuliah: 'Jaringan Komputer',
        status: 'belum sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '3',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '5',
        kode_mata_kuliah: 'CS105',
        nama_mata_kuliah: 'Sistem Operasi',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '6',
        kode_mata_kuliah: 'CS101',
        nama_mata_kuliah: 'Pemrograman Dasar',
        status: 'sudah sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '7',
        kode_mata_kuliah: 'CS102',
        nama_mata_kuliah: 'Struktur Data',
        status: 'belum sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '8',
        kode_mata_kuliah: 'CS103',
        nama_mata_kuliah: 'Basis Data',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '1',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '9',
        kode_mata_kuliah: 'CS104',
        nama_mata_kuliah: 'Jaringan Komputer',
        status: 'belum sync',
        sks_mata_kuliah: 4,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '3',
        tanggal_sk: createTanggal('2024-08-30')
    },
    {
        id: '10',
        kode_mata_kuliah: 'CS105',
        nama_mata_kuliah: 'Sistem Operasi',
        status: 'sudah sync',
        sks_mata_kuliah: 3,
        nama_program_studi: 'Ilmu Komputer',
        id_jenis_mata_kuliah: '2',
        tanggal_sk: createTanggal('2024-08-30')
    },

]

</script>

<style lang="scss" scoped></style>