<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <VTCard title="Title" subtitle="subtitle" description="description">

    <VTCard title="Form">

    </VTCard>


    <VTButtonAction class="'bg-yellow-500 hover:bg-yellow-300'">Save Action</VTButtonAction>

    <VTStatus :text="'test text'" :type="'success'" :tooltip="'Test tooltip'">

    </VTStatus>


    <VTToolTip>
      <template #trigger>
        <label for="">Tooltip</label>
      </template>
      <template #content>
        <div class="text-white">
          <p>ini adalah isi tooltip</p>
        </div>
      </template>
    </VTToolTip>

    <VTButton @click="showModal">
      show modal</VTButton>

    <VTButton @click="showToast">
      show dialog</VTButton>

    <VTPageTitle title="mahasiswa" subtitle="ini halaman" />
    <div>
      <VTStatus :type="'warning'">
        <template #text>
          text from Slot
        </template>
      </VTStatus>

      <VTButtonSave :busy="isBusy" :disabled="isDisabled" @click="ButtonSaveClick">
      </VTButtonSave>

      <VTAutocomplete
        :sources="datas.map((item) => { return { name: item.nama_mata_kuliah, value: item.id } as SelectOption })">
      </VTAutocomplete>

    </div>
    <div class="my-10 flex justify-center">
      <VTCardMobile />
    </div>
    <div class="p-2">
      <VTCard title="ini test table">
        <VTModal v-if="isShowModal" @close="closeModal" size="5xl" :persistent="true">
          <template #header>
            <div class="flex items-center text-lg">
              KRS MAHASISWAsss
            </div>
          </template>
          <template #body>
            <VTInput v-if="selectedAutoCompletex == 0" v-model="sessionData.firstName" :label="'First Name'"
              :validation="true" :errors="errors?.firstName?._errors">
            </VTInput>
            <VTAutocomplete v-model="selectedAutoCompletex" :sources="autoSource">
            </VTAutocomplete>

            <VTTextArea v-model="sessionData.firstName" :label="'First Name'" :validation="true"
              :errors="errors?.firstName?._errors"></VTTextArea>

            <VTButton @click="validate">Validate</VTButton>
            <!-- <VTTable :columns="tableData.columns" :source="datas" method="Default" ref="tableTest" :showSearch="false">
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
                  <th colspan="7" class="text-end">Ini di dalam footer</th>
                  <th class="text-end"> {{ ShowResult(datas) }} </th>
                </tr>
              </template>
      </VTTable> -->
          </template>
          <template #footer>
            <div class="flex justify-end">
              <VTButton @click="closeModal" color="alternative">
                Tutup
              </VTButton>
              <VTButton @click="tableTest?.refresh()">Refresh</VTButton>
            </div>
          </template>
        </VTModal>

      </VTCard>
    </div>
  </VTCard>

  <div class="bg-gray-200 dark:bg-gray-800">
    <VTErrorView type="503" />
  </div>
  <VTComingSoonView></VTComingSoonView>
</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue'
import { onMounted, reactive, ref } from 'vue'
import { VTToastService, type SelectOption, type VTTableColumn } from '..'
import VTTable from '@/components/VTTable/VTTable.vue'
import VTSyncStatus from '@/components/VTSyncStatus.vue'
import VTStatus from '@/components/VTStatus.vue'
import VTCardMobile from '@/components/VTCardMobile.vue'
import VTButtonAction from '@/components/VTButtonAction.vue'
import VTPageTitle from '@/components/VTPageTitle.vue'
import VTButton from '@/components/VTButton/VTButton.vue'
import VTModal from '@/components/VTModal.vue'
import VTErrorView from '@/components/VTError/VTErrorView.vue'
import VTButtonSave from '@/components/VTButtonSave/VTButtonSave.vue'
import VTAutocomplete from '@/components/VTAutocomplete.vue'
import VTComingSoonView from '@/components/VTComingSoonView.vue'
import VTToolTip from '@/components/VTToolTip.vue'
import VTInput from '@/components/VTInput/VTInput.vue'

import z from 'zod'
import VTTextArea from '@/components/VTTextArea/VTTextArea.vue'

interface User {
  firstName: string
}

const schema = z.object({
  firstName: z.string().min(3)
})

const autoSource = [{ name: 'buku 1', value: '1' }, { name: 'buku 2', value: '2' }, { name: 'buku 3', value: '3' },
{ name: 'buku 4', value: '4' }, { name: 'buku 5', value: '5' }, { name: 'buku 6', value: '1' }];



type SessionFormSchema = z.Infer<typeof schema>;

const selectedAutoCompletex = ref(0);
const errors = ref<z.ZodFormattedError<SessionFormSchema> | null>(null);

const sessionData = reactive<User>({ firstName: '' });


const validate = () => {
  var validatorResult = schema.safeParse(sessionData);
  errors.value = validatorResult.success ? null : validatorResult.error?.format();
}
validate();


const ShowResult = (data: any[]) => {
  console.log(data.reduce((total, item) => {
    return total + item.sks_mata_kuliah
  }, 0));
};


const ButtonSaveClick = () => {
  isBusy.value = true;
  isDisabled.value = false;
  setTimeout(() => {
    isBusy.value = false;
  }, 2000);

}

const showToast = () => {
  VTToastService.success('Anda tidak memiliki hak akses', 0, true);
  isShowModal.value = true;
  setTimeout(() => {
    tableTest.value?.refresh();
  }, 500);
}

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
  { propName: "nama_program_studi", title: "Program Studi", headerPosition: "between" },
]
const tableTest = ref<InstanceType<typeof VTTable> | null>(null)

onMounted(() => {
  tableTest.value?.setDataSource(dataTests.value)
  tableTest.value?.refresh()
})

const dataTests = ref(tableData.sources)
const isBusy = ref(false);
const isDisabled = ref(false);

const isShowModal = ref(false);

const closeModal = (() => {
  isShowModal.value = false
});

const showModal = (() => {
  isShowModal.value = true;
});

const rowClick = (rowData: any) => {
  console.log("Row clicked:", rowData);
};

const createTanggal = (date: string): Tanggal => {
  return {
    date,
    timezone_type: 3,
    timezone: 'UTC',
    getTanggal: () => new Date(date).toLocaleDateString('id-ID')
  };
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


interface Tanggal {
  date: string;
  timezone_type: number;
  timezone: string;
  getTanggal: Function

}
</script>
