<template>
  <div class="flex flex-row items-center">
    <input v-model="searchQuery" @input="onSearch" type="text" placeholder="Search..."
      class="flex justify-center bg-transparent rounded-lg active:ring active:ring-sky-400">
    <!-- <button @click="onSearch"
      class="bg-blue-600 rounded-lg p-[.6rem] text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
      Cari
    </button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['search']);

const searchQuery = ref('');

const onSearch = () => {
  emit('search', searchQuery.value);
};
</script>