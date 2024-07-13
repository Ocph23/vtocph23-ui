<template>
  <div class="flex flex-row justify-between items-center mt-4">
    <!-- menampilkan data -->
    <span>show 1 - 10 of {{ totalPages }} entries</span>
    <div class="flex items-center space-x-4">
      <button @click="prevPage" :disabled="currentPage === 1"
        class="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
        Previous
      </button>
      <span class="text-gray-700 dark:text-gray-300">Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages"
        class="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps<{ totalPages: number }>();
const emit = defineEmits(['pagechange']);

const currentPage = ref(1);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emitPageChange();
  }
};

const nextPage = () => {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
    emitPageChange();
  }
};

const emitPageChange = () => {
  emit('pagechange', currentPage.value);
};

watch(() => props.totalPages, () => {
  if (currentPage.value > props.totalPages) {
    currentPage.value = props.totalPages;
  }
});
</script>