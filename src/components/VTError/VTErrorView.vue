<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { computed } from 'vue';

type ErrorTypes = '500' | '503' | '404' | '401'
interface Error {
    type?: ErrorTypes
}

const props = withDefaults(defineProps<Error>(), {
    type: '503'
})



// const maintenanceAnimation = './Gear-Animation.json'
// const serverErrorAnimation = './Error-500-Animation.json'
// const notFoundAnimation = './Not-Found-Animation.json'



console.log(props.type);

const Headline = computed(() => {
    if (props.type === '404') {
        return "Oops! Page Not Found"
    } else if (props.type === '401') {
        return "Unauthorized Access"
    } else if (props.type === '500') {
        return "oops, that's our bad"
    }
    return "We'll Be Right Back!"
})

const desc = computed(() => {
    if (props.type === '404') {
        return "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL or return to the homepage."
    } else if (props.type === '401') {
        return "You don't have the necessary permissions to view this page. Please log in with the correct credentials or contact support if you believe this is a mistake."
    } else if (props.type === '500') {
        return "We're not exactly sure what happened, but our servers say something is wrong"
    }
    return "Sorry for the inconvenience. Our website is currently undergoing scheduled maintenance to improve your experience. We'll be back online shortly. Thank you for your patience!"
})

/* @vite-ignore */
const maintenanceAnimation = new URL('./Gear-Animation.json', import.meta.url).href;
const serverErrorAnimation = new URL('./Error-500-Animation.json', import.meta.url).href;
const notFoundAnimation = new URL('./Not-Found-Animation.json', import.meta.url).href;

</script>
<template>
    <div class="p-5 md:p-0 flex flex-col justify-center items-center h-screen font-poppins">
        <DotLottieVue v-if="props.type === '404'" class="w-full md:w-1/2" autoplay loop :src="notFoundAnimation" />
        <DotLottieVue v-else-if="props.type === '500'" class="w-full md:w-1/2" autoplay loop :src="serverErrorAnimation" />
        <DotLottieVue v-else class="w-full md:w-1/2" autoplay loop :src="maintenanceAnimation" />
        <h1 class="text-2xl my-7 text-gray-800 font-bold dark:text-gray-200">
            {{ Headline }}
        </h1>
        <p class="leading-loose md:leading-7 w-full md:w-1/2 text-sm md:text-base text-center font-medium text-gray-800 dark:text-gray-200">{{ desc }}</p>
    </div>
</template>