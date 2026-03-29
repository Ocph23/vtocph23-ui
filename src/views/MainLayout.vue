<template>
  <div class="flex h-screen">
    <div :class="open ? 'w-64' : 'w-16'" class="p-2 bg-gray-800 text-white transition-all">
      <button @click="open = !open" class="p-4">Toggle</button>
      <ul>
        <li v-for="menu in menus" :key="menu.label" class="p-1 hover:bg-gray-700">
          <router-link class="w-full" :to=menu.route>{{ menu.label }}</router-link>
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

const menus = [
  // Basic
  { label: "Home", route: "/", icon: "home" },
  { label: "Button", route: "/button", icon: "button" },
  { label: "Button Save", route: "/button-save", icon: "button" },
  { label: "Button Action", route: "/button-action", icon: "button" },

  // Form Inputs
  { label: "Input", route: "/input", icon: "input" },
  { label: "Select", route: "/select", icon: "input" },
  { label: "Text Area", route: "/textarea", icon: "input" },
  { label: "Autocomplete", route: "/autocomplete", icon: "input" },

  // Data Display
  { label: "Table", route: "/table", icon: "table" },
  { label: "Card", route: "/card", icon: "table" },
  { label: "Label Item", route: "/label-item", icon: "table" },
  { label: "Status", route: "/status", icon: "table" },
  { label: "Sync Status", route: "/sync-status", icon: "table" },

  // Navigation
  { label: "Tabs", route: "/tabs", icon: "table" },
  { label: "Accordion", route: "/accordion", icon: "table" },

  // Feedback
  { label: "Dialog", route: "/dialog", icon: "dialog" },
  { label: "Modal", route: "/modal", icon: "dialog" },
  { label: "Toast", route: "/toast", icon: "dialog" },
  { label: "Tooltip", route: "/tooltip", icon: "tooltip" },
  { label: "Busy Progress", route: "/busy-progress", icon: "dialog" },

  // Typography
  { label: "Typography", route: "/typography", icon: "table" },
  { label: "Page Title", route: "/page-title", icon: "table" },
  { label: "Wrap Text", route: "/wrap-text", icon: "table" },

  // Pages
  { label: "Error", route: "/error", icon: "dialog" },
  { label: "Coming Soon", route: "/coming-soon", icon: "dialog" },
];



</script>

<style lang="scss" scoped></style>
