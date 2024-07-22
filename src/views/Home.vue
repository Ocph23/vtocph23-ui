<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
    <VTAutocomplete v-model="tableData.sources" :sources="data"></VTAutocomplete>
    <div class="w-full p-2 flex justify-end bg-rose-100 rounded-tr-lg rounded-tl-lg">
      <div class="rounded-2xl group flex items-center justify-center w-8 h-8 bg-slate-800">
        <VTIconUser color="white" size="sm" />
      </div>
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

    <div
      class="flex flex-row items-center justify-center w-full p-5 m-3 bg-rose-400 shadow-lg rounded-lg shadow-pink-600">
      <VTButton class="uppercase mr-10" size="lg" gradient="blue">Open something
        <template #suffix>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill-rule="evenodd" />
          </svg>
        </template>
      </VTButton>
      <button @click="tableData.text = !tableData.text"
        class="my-10 p-3 mr-4 text-2xl text-white capitalize font-medium antialiased rounded-lg bg-rose-400 hover:shadow-md drop-shadow-md hover:bg-pink-600/10 shadow-inner shadow-white/30 hover:drop-shadow-sm hover:shadow-orange-500/50 active:bg-pink-600/10 ring-2 ring-yellow-200/20 hover:backdrop-blur-sm hover:ring-yellow-200/20 hover:transition-colors hover:duration-300">
        kas muncul barang lucuk!
      </button>
      <transition enter-active-class="duration-500 scale-50 transition-all" enter-from-class="opacity-0 scale-0"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-500 scale-50 transition-all"
        leave-from-class="scale-100 opacity-100" leave-to-class="scale-0 opacity-0">
        <p v-if="tableData.text"
          class="px-2 py-1 bg-sky-300 rounded-xl scl shadow-lg shadow-blue-600 antialiased text-white hover:transition-colors duration-200 hover:animate-bounce tracking-wide uppercase font-bold transition ease-in-out">
          HaHaHaHaHaHaHaHaaaa....
        </p>
      </transition>
    </div>
  </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue'
import VTCard from '@/components/VTCard.vue'
import { VTDialogService } from '@/components/VTDialog'
import { onMounted, reactive, ref } from 'vue'
import { VTIconResetPassword, VTIconSubmenu, VTIconUser, type VTTableColumn } from '..'
import VTTable from '@/components/VTTable/VTTable.vue'
import VTSyncStatus from '@/components/VTSyncStatus.vue'
import VTButton from '@/components/VTButton/VTButton.vue'

interface DataTest {
  kode_program_studi: string
  nama_program_studi: string
  status: string
  nama_jenjang_pendidikan: string
}

const tableData = reactive({
  columns: [] as VTTableColumn[],
  sources: [] as DataTest[],
  text: false
})

tableData.columns = [
  { propName: 'no', title: 'No.', name: 'nomor', type: 'Custome', rowClass: 'text-center' },
  { propName: 'kode_program_studi', title: 'Kode Program Studi', rowClass: 'text-center' },
  { propName: 'nama_program_studi', title: 'Nama Program Studi' },
  { propName: 'status', title: 'Status', name: 'sync', type: 'Custome' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' },
  { propName: 'nama_jenjang_pendidikan', title: 'Jenjang Pendidikan', rowClass: 'text-center' }
]

const data = [
  { name: 'Yoseph Kungkung', value: 1 },
  { name: 'Yoseph X', value: 2 }
]

onMounted(() => {
  tableTest.value?.setDataSource(dataTests.value)
  tableTest.value?.refresh()
})

const showDialog = () => {
  VTDialogService.asyncShowDialog(
    'Dialog',
    'ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan',
    { name: 'budi' },
    'warning'
  ).then((result) => {
    VTDialogService.show('Dialog', 'ini Pesan' + result)
  })
}
const tableTest = ref<InstanceType<typeof VTTable> | null>(null)
const dataTests = ref(tableData.sources)

dataTests.value = [
  {
    kode_program_studi: 'CS101',
    nama_program_studi: 'Ilmu Komputer',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana'
  },
  {
    kode_program_studi: 'ENG102',
    nama_program_studi: 'Teknik Elektro',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana'
  },
  {
    kode_program_studi: 'BIO103',
    nama_program_studi: 'Biologi',
    status: 'belum sync',
    nama_jenjang_pendidikan: 'Magister'
  },
  {
    kode_program_studi: 'MATH104',
    nama_program_studi: 'Matematika',
    status: 'sudah sync',
    nama_jenjang_pendidikan: 'Sarjana'
  },
  {
    kode_program_studi: 'PHY105',
    nama_program_studi: 'Fisika',
    status: 'belum sync',
    nama_jenjang_pendidikan: 'Doktor'
  }
]
</script>
