<template>
    <MainLayout>
        <VTIconCalendar></VTIconCalendar>
        <VTAutocomplete :multiple="true" label="Autocomplete" :sources="data" v-model="model"></VTAutocomplete>

        <pre>
            {{ model }}
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import MainLayout from './MainLayout.vue';
import { ref } from 'vue';
import { CalendarIcon } from '@heroicons/vue/20/solid';
import { VTIconCalendar } from '..';

const data = [
    { name: 'Option 1', value: 'option1' },
    { name: 'Option 2', value: 'option2' },
    { name: 'Option 3', value: 'option3' },
];


const model = ref(null);




</script>

<style scoped></style>