<template>
  <div class="flex h-screen">
    <div :class="open ? 'w-64' : 'w-16'" class="p-2 bg-gray-800 text-white transition-all">
      <button @click="open = !open" class="p-4">Toggle</button>
      <ul>
        <li class="p-1 hover:bg-gray-700">
          <router-link class="w-full" to="/">Home</router-link>
        </li>
        <li class="p-1 hover:bg-gray-700">
          <router-link to="/button">Button</router-link>
        </li>
        <li class="p-1 hover:bg-gray-700">
          <router-link to="/input">Input</router-link>
        </li>
        <li class="p-1 hover:bg-gray-700">
          <router-link to="/table">Table</router-link>
        </li>
        <li class="p-1 hover:bg-gray-700">
          <router-link to="/dialog">Dialog</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-1 p-6">
      <slot></slot>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';


const open = ref(true);

</script>

<style lang="scss" scoped></style>
