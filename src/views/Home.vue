<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="selected" :sources="data"></VTAutocomplete>
    </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import VTCard from '@/components/VTCard.vue';
import VTSelect from '@/components/VTSelect/VTSelect.vue';
import { ref } from 'vue';


const selected = ref(null)
const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]


</script>