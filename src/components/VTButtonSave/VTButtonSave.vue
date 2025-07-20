<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
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
    } else {
        isSuccess.value = true;
        setTimeout(() => {
            isSuccess.value = false;
            isBusyx.value = false;
        }, 1000);
    }
});

onMounted(() => {
    if (props.busy) {
        isBusyx.value = true;
    }
});


</script>

<template>
    <button
        :class="[props.disabled || isBusyx ? 'bg-gray-600 cursor-no-drop' : 'bg-teal-500 hover:bg-teal-600 group text-gray-200 hover:text-white', 'rounded-lg  flex flex-row items-center']"
        :disabled="props.disabled">
        <div class="mx-4 my-2 min-w-10">
            <div class="flex flex-row items-center justify-center">
                <VTIconSave class="w-5 h-5" v-if="!isBusyx && !isSuccess" />
                <div v-if="isBusyx" class="circle-loader w-5 h-5" :class="isSuccess ? 'load-complete' : ''">
                    <div v-if="isSuccess" class="checkmark draw w-3 h-3"></div>
                </div>
                <span v-if="props.title" class="font-medium">{{ props.title }}</span>
                <span v-else class="font-medium ml-2">Simpan</span>
            </div>
        </div>

    </button>
</template>


<style scoped>
.circle-loader {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-left-color: #5cb85c;
    animation: loader-spin 1.2s infinite linear;
    position: relative;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
}

.btn-success {
    background: #08c42e;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.load-complete {
    -webkit-animation: none;
    animation: none;
    border-color: #5cb85c;
    transition: border 500ms ease-out;
}

.checkmark {
    display: block;
}

.checkmark.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
}

.checkmark:after {
    opacity: 1;
    height: 0.60em;
    width: 0.3em;
    transform-origin: left top;
    border-right: 2px solid #5cb85c;
    border-top: 2px solid #5cb85c;
    content: "";
    left: 0.20em;
    top: 0.55em;
    position: absolute;
}

@keyframes loader-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes checkmark {
    0% {
        height: 0;
        width: 0;
        opacity: 1;
    }

    20% {
        height: 0;
        width: 0.3em;
        opacity: 1;
    }

    40% {
        height: 0.60em;
        width: 0.3em;
        opacity: 1;
    }

    100% {
        height: 0.60em;
        width: 0.3em;
        opacity: 1;
    }
}
</style>
