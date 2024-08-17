<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="selected" :sources="data"></VTAutocomplete>

        <button @click="showDialog">test</button>
    </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import VTCard from '@/components/VTCard.vue';
import { VTDialogService } from '@/components/VTDialog';
import { VTToastService } from '@/components/VTToast';
import { onMounted, ref } from 'vue';


const selected = ref(null)
const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]
const isBusy = ref(false);
const showDialog = () => {

    VTBusyProgressService.start(isBusy);
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan", { name: 'budi' }, 'warning')
        .then(result => {
            VTToastService.error("ini Pesan" + result.name)
        })
}

</script>