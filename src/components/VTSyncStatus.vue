<script setup lang="ts">
import { ref } from 'vue';
import IconDoubleCheck from '../icons/IconDoubleCheck.vue';
import IconTime from '../icons/IconTime.vue';


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
                :class="[syncStatus === 'sudah sync' ? 'bg-green-600' : 'bg-yellow-400', 'p-1 rounded-2xl w-[7rem] flex flex-row items-center justify-center']">
                <IconDoubleCheck v-if="syncStatus === 'sudah sync'" class="mr-1" />
                <IconTime v-else class="mr-2" />
                <span class="text-md text-white">{{ syncStatus }}</span>
            </div>
        </template>
        <template #content>
            <div class="text-white">
                {{ props.date }}
            </div>
        </template>
    </VTToolTip>
</template>