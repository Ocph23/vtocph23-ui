<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="selected" :sources="data"></VTAutocomplete>
        <VTIconSubmenu />
        <div class="p-2 bg-rose-100">
            <!-- <VTIconAddUser color="primary"/> -->
            <VTIconResetPassword color="info"/>
            <slot name="cth"/>
        </div>
        <button @click="showDialog">test</button>
    </VTCard>




</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import VTCard from '@/components/VTCard.vue';
import { VTDialogService } from '@/components/VTDialog';
import { onMounted, ref } from 'vue';
import { VTIconAddUser, VTIconResetPassword, VTIconSubmenu } from '..';


const selected = ref(null)
const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]

const showDialog = () => {
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan", { name: 'budi' }, 'danger').then(result => {
        VTDialogService.show("Dialog", "ini Pesan" + result)
    })
}

</script>