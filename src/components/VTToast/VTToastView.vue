<script setup lang="ts">
import { FwbToast } from 'flowbite-vue';
import { useToastStore } from '../../stores/toastStore';
const toast = useToastStore();
</script>
<template>
    <div class="fixed top-11 z-50 min-w-80 flex flex-col shadow-sm justify-end items-end m-3 -right-0 ">
        <div v-for="item in toast.toasts" :key="item.id">
            <fwb-toast divide class="my-1 " :closeable="item.closable" :type="item.type" data-aos="flip-left"
                data-aos-delay="100" data-aos-anchor-placement="center-center" data-aos-offset="0" closable>
                {{ item.message }}
            </fwb-toast>
        </div>
        <div class="mr-5">
        </div>
    </div>
</template>
