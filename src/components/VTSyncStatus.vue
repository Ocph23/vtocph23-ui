<script setup lang="ts">
import { ref } from 'vue';
import IconDoubleCheck from '../icons/IconDoubleCheck.vue';
import IconTime from '../icons/IconTime.vue';
import VTToolTip from './VTToolTip.vue';


const props = defineProps({
    column: { type: String },
    date: { type: String },
});

const syncStatus = ref(props.column);

if (syncStatus.value != 'sudah sync') {
    syncStatus.value = "belum sync";
}

</script>
<template>
    <VTToolTip :data="props.date">
        <template #trigger>
            <div
                :class="[syncStatus === 'sudah sync' ? 'bg-green-500 dark:bg-green-600' : 'bg-amber-500', 'p-1 rounded-2xl w-32 flex flex-row items-center justify-center']">
                <IconDoubleCheck v-if="syncStatus === 'sudah sync'" type="button" size="md"/>
                <IconTime v-else type="button" size="sm"/>
                <span class="text-md pb-1 text-white capitalize">{{ syncStatus }}</span>
            </div>
        </template>
        <template #content>
            <div class="text-white">
                {{ props.date }}
            </div>
        </template>
    </VTToolTip>
</template>