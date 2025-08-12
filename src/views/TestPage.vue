<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">VTTable Example</h1>
        <p class="mb-4">This is an example of using VTTable with custom columns and data.</p>

        <VTTable :table-name="'tabel-siswa'" class="rounded-lg" ref="vtTable" :bordered="true" :source="data.datas"
            :columns="[
                { name: 'idx', title: 'No', propName: 'id', type: 'Custome' },
                { title: 'Nama Guru', propName: 'name' },
                { title: 'Mata Pelajaran', propName: 'subject', },
                { title: 'Email', propName: 'email', }
            ]">
            <template #idx="{ data, index }">
                <span>{{ index + 1 }}</span>
            </template>
        </VTTable>
    </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';
import VTTable from '@/components/VTTable/VTTable.vue';


const vtTable = ref<InstanceType<typeof VTTable> | null>(null);

const data = reactive({ datas: {} as any[], dc: 'indigo' });

data.datas = [
    { name: '1Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '2Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '3Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '4Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '5Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '6Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '7Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '8Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '9Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '10Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '11Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '12Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '13Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '14Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '15Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '16Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '17Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '18Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '19Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '20Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '21Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '22Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '23Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '24Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '25Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '26Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '27Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '28Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '29Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '30Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '31Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '32Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '33Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '34Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '35Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' },
    { name: '36Budi Santoso', subject: 'Matematika', email: 'ocph23@gmail.com' },
    { name: '37Siti Rahayu', subject: 'Bahasa Indonesia', email: '' },
    { name: '38Joko Widodo', subject: 'Pendidikan Kewarganegaraan', email: '' },
    { name: '39Dewi Sartika', subject: 'Ilmu Pengetahuan Alam', email: '' },
    { name: '40Rudi Hartono', subject: 'Ilmu Pengetahuan Sosial', email: '' }
]

setTimeout(() => {
    if (vtTable.value) {
        vtTable.value.refresh();
    }
}, 200);


</script>
