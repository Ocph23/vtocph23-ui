<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <div class="group bg-slate-100 hover:bg-slate-500 w-20 p-2 rounded-md flex justify-center my-4">
            <VTButtonAction :style="'info'" type="detail">
            </VTButtonAction>
        </div>

        <VTSelect></VTSelect>
    </VTCard>
</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue';
import VTSelect from '@/components/VTSelect/VTSelect.vue';
import VTButtonSave from '@/components/VTButtonSave/VTButtonSave.vue';
import { ref } from 'vue';
import { VTIconCommunity } from '..';
import VTButtonAction from '@/components/VTButtonAction.vue';

</script>