<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { VTIconSave } from '@/index';




const props = defineProps({
    busy: { type: Boolean },
    disabled: { type: Boolean },
    title: { type: String }
})

const isBusyx = ref(false);
const isSuccess = ref(false);

watch(() => props.busy, (newValue) => {
    if (newValue) {
        isBusyx.value = true;
        isSuccess.value = false;
    } else {
        isBusyx.value = false;
        isSuccess.value = true;
        setTimeout(() => {
            isSuccess.value = false;
        }, 2500);
    }
});

onMounted(() => {
    if (props.busy) {
        isBusyx.value = true;
    }
});

const loadingAnimation = new URL('../../assets/animations/loading_animation.json', import.meta.url).href;
const successAnimation = new URL('../../assets/animations/checkanimation.json', import.meta.url).href;

</script>

<template>
    <button
        :class="[props.disabled || props.busy ? 'bg-gray-600 cursor-no-drop' : 'bg-teal-500 hover:bg-teal-600 group text-gray-200 hover:text-white', 'rounded-lg  flex flex-row items-center']"
        :disabled="props.disabled">
        <div class="mx-4 my-2 min-w-10">
            <div class="flex flex-row items-center justify-center">
                <VTIconSave class="w-5 h-5" v-if="!isBusyx && !isSuccess" />
                <DotLottieVue class="w-5 h-5 m-0 p-0 overflow-hidden" autoplay loop v-if="isBusyx"
                    :src="loadingAnimation" />
                <DotLottieVue class="w-5 h-5 m-0 p-0 overflow-hidden" autoplay loop v-if="isSuccess"
                    :src="successAnimation" />
                <span v-if="props.title" class="font-medium">{{ props.title }}</span>
                <span v-else class="font-medium ml-2">Simpan</span>
            </div>
        </div>

    </button>
</template>
