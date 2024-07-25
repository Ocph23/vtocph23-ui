<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <VTCard class="text-white" title="Title" subtitle="subtitle" description="description">
    <div class="my-10 flex justify-center">
      <VTCardMobile />
    </div>
    <div class="p-2">
      <VTCard title="ini test table">
        <VTTable :columns="tableData.columns" :source="dataTests" method="Default" ref="tableTest">
          <template #sync="row">
            <VTSyncStatus :column="row.data.status" />
          </template>
          <template #action="row">
            <div class="flex flex-row items-center">
              <VTButtonAction type="detail" @click="row.data" />
              <VTButtonAction :style="'warning'" type="edit" @click="row.data" />
              <VTButtonAction :style="'danger'" type="delete" @click="row.data" />
            </div>
          </template>
          <template #nomor="row">{{ row.index + 1 }}</template>
          <template #tanggal="row">{{ row.data.tanggal.date }}</template>
          <template #namaProdi="row"><a href="">{{ row.data.nama_program_studi }}</a></template>
        </VTTable>
      </VTCard>
    </div>
  </VTCard>

</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue'
import { onMounted, reactive, ref } from 'vue'
import { type VTTableColumn } from '..'
import VTTable from '@/components/VTTable/VTTable.vue'
import VTSyncStatus from '@/components/VTSyncStatus.vue'
import VTCardMobile from '@/components/VTCardMobile.vue'
import VTButtonAction from '@/components/VTButtonAction.vue'

interface DataTest {
  id: string
  kode_mata_kuliah: string
  nama_mata_kuliah: string
  status: string
  sks_mata_kuliah: number,
  nama_program_studi: string,
  id_jenis_mata_kuliah: string,
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
  { propName: "status_sync", title: "Status", name: 'sync', type: 'Custome' },
  { propName: 'nomor', title: 'No.', name: 'nomor', type: 'Custome', },
  { propName: "kode_mata_kuliah", title: "Kode MK" },
  { propName: "nama_mata_kuliah", title: "Nama Mata Kuliah", isMobileHeader: true },
  { propName: "sks_mata_kuliah", title: "Bobot MK (sks)", rowClass: "text-center", headerClass: "text-center" },
  { propName: "nama_program_studi", title: "Program Studi" },
  {
    propName: "id_jenis_mata_kuliah", title: "Jenis Mata Kuliah",
    name: 'jenis', type: 'Custome',
    rowClass: '!w-10 text-center'
  },
]

onMounted(() => {
  tableTest.value?.setDataSource(dataTests.value)
  tableTest.value?.refresh()
})

const tableTest = ref<InstanceType<typeof VTTable> | null>(null)
const dataTests = ref(tableData.sources)

const createTanggal = (date: string): Tanggal => {
  return {
    date,
    timezone_type: 3,
    timezone: 'UTC',
    getTanggal: () => new Date(date).toLocaleDateString('id-ID')
  };
};

dataTests.value = [
  {
    id: '1',
    kode_mata_kuliah: 'CS101',
    nama_mata_kuliah: 'Pemrograman Dasar',
    status: 'sudah sync',
    sks_mata_kuliah: 4,
    nama_program_studi: 'Ilmu Komputer',
    id_jenis_mata_kuliah: '1',
  },
  {
    id: '2',
    kode_mata_kuliah: 'CS102',
    nama_mata_kuliah: 'Struktur Data',
    status: 'belum sync',
    sks_mata_kuliah: 3,
    nama_program_studi: 'Ilmu Komputer',
    id_jenis_mata_kuliah: '2',
  },
  {
    id: '3',
    kode_mata_kuliah: 'CS103',
    nama_mata_kuliah: 'Basis Data',
    status: 'sudah sync',
    sks_mata_kuliah: 3,
    nama_program_studi: 'Ilmu Komputer',
    id_jenis_mata_kuliah: '1',
  },
  {
    id: '4',
    kode_mata_kuliah: 'CS104',
    nama_mata_kuliah: 'Jaringan Komputer',
    status: 'belum sync',
    sks_mata_kuliah: 4,
    nama_program_studi: 'Ilmu Komputer',
    id_jenis_mata_kuliah: '3',
  },
  {
    id: '5',
    kode_mata_kuliah: 'CS105',
    nama_mata_kuliah: 'Sistem Operasi',
    status: 'sudah sync',
    sks_mata_kuliah: 3,
    nama_program_studi: 'Ilmu Komputer',
    id_jenis_mata_kuliah: '2',
  },
]


interface Tanggal {
  date: string;
  timezone_type: number;
  timezone: string;
  getTanggal: Function

}
</script>
