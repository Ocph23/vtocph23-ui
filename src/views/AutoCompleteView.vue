<template>
    <MainLayout>
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

const data = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 },
];


const model = ref(null);




</script>

<style scoped></style>