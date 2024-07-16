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
import { onMounted, ref } from 'vue';


const selected = ref(null)
const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]

const showDialog = () => {
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan", { name: 'budi' }).then(result => {
        VTDialogService.show("Dialog", "ini Pesan" + result)
    })
}

</script>