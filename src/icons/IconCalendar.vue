<template>
  <svg
    :class="iconClass"
    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
    <path
      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
  </svg>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';
import { setIconClasses } from './iconClass';
import type { IconProps } from './types';

const props = withDefaults(defineProps<IconProps>(), {
  size: 'xs',
  color: 'default',
  type: 'default',
});

const { iconClass } = setIconClasses(toRefs(props));

</script>
