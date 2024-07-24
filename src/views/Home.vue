<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <VTCard class="text-white" title="Title" subtitle="subtitle" description="description">
    <VTInput v-model="tableData.testDate" type="date" label="Tanggal"/>
    {{ tableData.testDate }}
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
              <VTButtonAction type="detail" @click="testQuery(row.data)" />
              <VTButtonAction :style="'warning'" type="edit" @click="testQuery(row.data)" />
              <VTButtonAction :style="'danger'" type="delete" @click="testQuery(row.data)" />
            </div>
          </template>
          <template #nomor="row">{{ row.index + 1 }}</template>
          <template #tanggal="row">{{ row.data.tanggal.date }}</template>
        </VTTable>
      </VTCard>
    </div>
  </VTCard>

</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue'
import { VTDialogService } from '@/components/VTDialog'
import { onMounted, reactive, ref } from 'vue'
import { type VTTableColumn } from '..'
import VTTable from '@/components/VTTable/VTTable.vue'
import VTSyncStatus from '@/components/VTSyncStatus.vue'
import VTCardMobile from '@/components/VTCardMobile.vue'
import VTButtonAction from '@/components/VTButtonAction.vue'
import VTInput from '@/components/VTInput/VTInput.vue'

interface DataTest {
  id: string
  kode_program_studi: string
  nama_program_studi: string
  status: string
  nama_jenjang_pendidikan: string,
  tanggal: Tanggal
}

const tableData = reactive({
  columns: [] as VTTableColumn[],
  sources: [] as DataTest[],
  text: false,
  testDate: [] as Tanggal[]
})

tableData.columns = [
  { propName: 'action', title: 'Action', name: 'action', type: 'Custome' },
  { propName: 'sync_status', title: 'Status', name: 'sync', type: 'Custome' },
  { propName: 'no', title: 'No.', name: 'nomor', type: 'Custome', rowClass: 'text-center' },
  { propName: 'kode_program_studi', title: 'Kode Program Studi', rowClass: 'text-center' },
  { propName: 'nama_program_studi', title: 'Nama Program Studi', isMobileHeader: true },
  { propName: 'tanggal', title: 'Tanggal', rowClass: 'text-center', name: 'tanggal', type: 'Custome' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
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
    kode_program_studi: 'CS101',
    nama_program_studi: 'Ilmu Komputer',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana',
    tanggal: createTanggal('2020-07-23')
  },
  {
    id: '2',
    kode_program_studi: 'ENG102',
    nama_program_studi: 'Teknik Elektro',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana',
    tanggal: createTanggal('2020-07-23')
  },
  {
    id: '3',
    kode_program_studi: 'BIO103',
    nama_program_studi: 'Biologi',
    status: 'belum sync',
    nama_jenjang_pendidikan: 'Magister',
    tanggal: createTanggal('2020-07-23')
  },
  {
    id: '4',
    kode_program_studi: 'MATH104',
    nama_program_studi: 'Matematika',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana',
    tanggal: createTanggal('2020-07-23')
  },
  {
    id: '5',
    kode_program_studi: 'PHY105',
    nama_program_studi: 'Fisika',
    status: 'belum sync',
    nama_jenjang_pendidikan: 'Doktor',
    tanggal: createTanggal('2020-07-23')
  }
]


interface Tanggal {
    date: string;
    timezone_type: number;
    timezone: string;
    getTanggal: Function

}
</script>
