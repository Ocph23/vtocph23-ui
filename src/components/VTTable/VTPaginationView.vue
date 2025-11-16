<template>
  <div class="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-slate-700 py-2">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700 dark:text-white" v-if="props.pageSize > 0">
          Showing {{ props.pageSize }} of
          {{ props.totalRecords }}
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a @click="goToPage(props.pageNumber - 1)"
            class="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="size-5" aria-hidden="true" />
          </a>

          <a v-for="page in pageNumbers" :key="page" aria-current="page" @click="goToPage(page)"
            :class="{ active: props.pageNumber === page }"
            class="cursor-pointer text-gray-400 relative z-10 inline-flex items-center px-4 py-2 text-sm focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ page }}</a>

          <a @click="goToPage(props.pageNumber + 1)"
            class="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="size-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { defineEmits, defineProps } from 'vue'
import { watch, ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'


interface VTTablePaginateResponse {
  pageNumber: number
  pageSize: number
  totalRecords: number
}

const props = withDefaults(defineProps<VTTablePaginateResponse>(), {
  pageNumber: 0,
  totalRecords: 0,
  pageSize: 10,
})
const emit = defineEmits(['pagechange'])
//const model = defineModel();
const pageNumbers = ref([] as number[])



watch(
  () => props.pageNumber,
  () => {
    pageNumbers.value = getPageNumbers()
  },
)

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages()) {
    return
  }
  // eslint-disable-next-line vue/no-mutating-props
  emit('pagechange', page)
}

const totalPages = () => {
  return Math.ceil(props.totalRecords / Number(props.pageSize))
}

const getPageNumbers = (): number[] => {
  let startPage = props.pageNumber - 1
  let endPage = props.pageNumber + 1

  if (props.pageNumber === 1) {
    startPage = 1
    endPage = 3
  } else if (props.pageNumber === totalPages()) {
    startPage = totalPages() - 2
    endPage = totalPages()
  }

  // Ensure that page numbers are within valid range
  startPage = Math.max(startPage, 1)
  endPage = Math.min(endPage, totalPages())

  const pages = [] as number[]
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
}
</script>

<style scoped>
.active {
  font-weight: bold;
  background-color: #007bff;
  color: white;
}
</style>
