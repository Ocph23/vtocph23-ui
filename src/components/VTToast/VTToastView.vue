<script setup lang="ts">
import '../../../node_modules/aos/dist/aos.css';
import  FwbToast  from './VTToast.vue';
import { computed, onMounted } from 'vue';
import { VTToastService } from './index';
import AOS from 'aos';
const toastList = computed(() => {
    return VTToastService.toasts;
})

onMounted(() => {
    AOS.init();
})

</script>
<template>
    <div class="fixed top-11 z-50 min-w-80 flex flex-col shadow-sm justify-end items-end m-3 -right-0">
        <div v-for="item in toastList" :key="item.id">
            <FwbToast divide class="my-1" :closable="item.closable" :type="item.type" data-aos="fade-left"
                data-aos-delay="100" data-aos-anchor-placement="center-center" data-aos-offset="0">
                {{ item.message }}
            </FwbToast>
        </div>
        <div class="mr-5">
        </div>
    </div>
</template>
