<script setup lang="ts">

</script>
<template>
    <div class="bg">
        <div class="triangle">
            <div class="card">
                <div class="relative flex flex-row items-center justify-center mb-16">
                    <div class="headline">
                        Halaman Ini Masih dalam Pengembangan
                    </div>
                    
                    <div class="logo">
                        <img src="../assets/images/graduation-cap.png">
                    <!-- <svg viewBox="0 0 272 259" class="caution even:bg-[#2888d2]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" 
                        d="M179.849 26.1936C160.94 -8.73117 110.822 -8.73123 91.9119 26.1936L6.10137 184.68C-11.9366 217.995 12.1855 258.486 50.0699 258.486H221.691C259.576 258.486 283.698 217.995 265.66 184.68L179.849 26.1936ZM166.661 34.8536C153.426 10.4008 118.336 10.4008 105.1 34.8536L20.9484 190.326C8.32597 213.646 25.2117 241.986 51.7288 241.986H220.033C246.55 241.986 263.435 213.646 250.813 190.326L166.661 34.8536Z" fill="#8B0505"/>
                        <rect x="126" y="76" width="19" height="91" rx="9.5" fill="currentColor"/>
                        <rect x="125" y="184" width="21" height="21" rx="10.5" fill="currentColor"/>
                    </svg> -->
                    </div>
                </div>
                <!-- <hr /> -->
                <div class="desc">
                    Kami sedang menyiapkan fitur-fitur baru yang akan segera tersedia. Harap bersabar dan terus kunjungi
                    website
                    kami untuk pembaruan.
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg {
    @apply relative bg-no-repeat h-screen bg-center bg-cover 
    bg-[url('../assets/images/fluid-bg-2.jpg')]
}

.card {
    @apply px-12 py-16 flex flex-col justify-center items-start 
    bg-gradient-to-tl from-transparent to-white/35 absolute top-1/2 left-1/2 
    transform -translate-y-1/2 -translate-x-1/2 overflow-hidden
    rounded-[3rem] backdrop-blur-md z-50 text-[#efecec]
    font-poppins border-2 border-white;
}

.logo {
    @apply 
    absolute -z-20 w-56 -top-7 right-0 bg-no-repeat 
    bg-fixed bg-auto bg-center transform translate-x-3 scale-110
    
    /* w-28 border-[#2888d2] */
}

.headline {
    @apply text-[30px] font-bold uppercase
}

.desc {
    @apply text-lg mb-2 text-justify
}

.card hr {
    @apply border-[1px] border-[#252222]/75 w-full mb-2
}
</style>
