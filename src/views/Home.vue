<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <VTCard class="h-screen" title="Title" subtitle="subtitle" description="description">
        <VTAutocomplete v-model="options.listing" :sources="data"></VTAutocomplete>
        <VTIconSubmenu />
        <div class="p-2 bg-rose-100">
            <VTIconResetPassword color="info"/>
        </div>
        <div class="p-2 bg-indigo-400">
            <VTAutocomplete :sources="listJenis" v-model="options.listing"/>
            {{ options.listing }}
        </div>
        
        <button @click="showDialog">test</button>
    </VTCard>
</template>

<script setup lang="ts">
import VTAutocomplete from '@/components/VTAutocomplete.vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import VTCard from '@/components/VTCard.vue';
import { VTDialogService } from '@/components/VTDialog';
import { onMounted, reactive, ref } from 'vue';
import { VTIconAddUser, VTIconMahasiswa, VTIconResetPassword, VTIconSubmenu, VTSidebarDropdown } from '..';
import VTSidebarItem from '@/components/VTSidebarItem.vue';

interface select {
    name: string
    value: string
}

const options = reactive({
    listing: [] as select[]
})

const listJenis = [
    {name: 'victor', value: '1' },
    {name: 'budi', value: '2' },
    {name: 'jevon', value: '3' },
]

const selected = ref(null)
const data = [{ name: "Yoseph Kungkung", value: 1 }, { name: "Yoseph X", value: 2 }]

const showDialog = () => {
    VTDialogService.asyncShowDialog("Dialog", "ini Pesan ini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesanini Pesan", { name: 'budi' }, 'warning')
        .then(result => {
            VTDialogService.show("Dialog", "ini Pesan" + result)
        })
}


</script>