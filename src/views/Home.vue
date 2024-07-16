<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTButtonSave title="SAVE" :busy="isBUsy" @click="onClick">
            <template #icon>
                <VTIconCheck type="button" size="sm"/>
            </template>
        </VTButtonSave>
        <VTIconDelete />
        <VTSelect></VTSelect>
    </VTCard>
</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue';
import VTSelect from '@/components/VTSelect/VTSelect.vue';
import { VTIconCheck, VTIconDelete } from '..';
import VTButtonSave from '@/components/VTButtonSave/VTButtonSave.vue';
import { ref } from 'vue';

const isBUsy = ref(false);

const onClick = () => {
    isBUsy.value = true;
    setTimeout(() => {
        isBUsy.value = false
    },1000)
}
</script>