<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { VTIconSave } from '@/index';

const props = defineProps({
    busy: { type: Boolean },
    disabled: { type: Boolean },
    title: { type: String }
})

const isBusy = ref(false);
const isSuccess = ref(false);
const showContent = ref(false)

watch(() => props.busy, (newValue) => {
    if (newValue) {
        isBusy.value = true;
        isSuccess.value = false;
        showContent.value = false;
    } else {
        isBusy.value = false;
        isSuccess.value = true;
        setTimeout(() => {
            isSuccess.value = false;
            showContent.value = true;
        }, 2560);
    }
});

onMounted(() => {
    if (props.busy) {
        isBusy.value = true;
    } else {
        showContent.value = true;
    }
});
</script>

<template>
    <button
        :class="[props.disabled || props.busy ? 'bg-gray-500 cursor-no-drop' : 'bg-teal-500', 'rounded-lg p-2 flex flex-row items-center']"
        :disabled="props.disabled">
        <div class="flex flex-row items-center justify-center text-white mx-2 px-2 min-w-20" v-if="showContent">
            <slot v-if="$slots.icon" name="icon" />
            <VTIconSave v-else class="mr-2" />
            <span v-if="props.title">{{ props.title }}</span>
            <span v-else>Simpan</span>
        </div>
        <DotLottieVue class="w-12 overflow-hidden" autoplay loop v-if="isBusy"
            src="https://lottie.host/70151e1f-47ba-401d-a7f7-c11a53f062d9/hNsb9qZ1SY.lottie" />
        <DotLottieVue class="w-12 overflow-hidden" autoplay loop v-if="isSuccess"
            src="https://lottie.host/d4471590-f1c6-4e33-9d2b-9d1af9733fe4/JA6btkWrvn.lottie" />
    </button>
</template>
