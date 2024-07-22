<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { VTIconSave } from '@/index';

const loadingAnimation = new URL('./loading_animation.json', import.meta.url).href;
const successAnimation = new URL('./check_animation.json', import.meta.url).href;


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
        :class="[props.disabled || props.busy ? 'bg-gray-500 cursor-no-drop' : 'bg-teal-500 hover:bg-teal-600 group text-gray-200 hover:text-white', 'rounded-lg p-2 flex flex-row items-center']"
        :disabled="props.disabled">
        <div class="flex flex-row items-center justify-center mx-2 min-w-10" v-if="showContent">
            <slot v-if="$slots.icon" name="icon" />
            <VTIconSave v-else class="mr-2" />
            <span v-if="props.title" class="font-medium">{{ props.title }}</span>
            <span v-else class="font-medium">Simpan</span>
        </div>
        <DotLottieVue class="w-12 overflow-hidden" autoplay loop v-if="isBusy" :src="loadingAnimation" />
        <DotLottieVue class="w-12 overflow-hidden" autoplay loop v-if="isSuccess" :src="successAnimation" />
    </button>
</template>
