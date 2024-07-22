<script setup lang="ts">
import { VTIconEllipsis } from '..';
import VTButton from './VTButton/VTButton.vue';
</script>

<template>
    <div class="bg-no-repeat bg-center bg-cover shadow-xl rounded-lg ring-[1.2px] ring-gray-50 ring-opacity-30
    drop-shadow-lg
    bg-[url('../assets/images/fluid-bg-1.jpg')]">

        <div class="z-50 w-72 rounded-lg bg-gray-800/20 backdrop-blur-sm overflow-hidden
         drop-shadow-2xl shadow-inner shadow-gray-300/50">
            <div class="flex justify-end p-2 bg-gradient-to-tl from-gray-300/40">
                <VTButton outline color="blue" class="group">
                    <VTIconEllipsis size="md" color="black" />
                </VTButton>
            </div>
            <div class="px-5 mt-5 mb-2 font-semibold text-lg text-gray-700 dark:text-white">
                Abraham Victor Patrick Ohoiwutun
            </div>
            <div class="px-5 mb-10">
                <p class="font-medium text-sm text-gray-400 dark:text-gray-200">201911001</p>
            </div>
            <div class="flex justify-end p-2 bg-gray-300/40">
                <VTButton color="yellow" class="uppercase" outline>detail</VTButton>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>