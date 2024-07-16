<template>
  <svg
    :class="iconClass"
    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z">
    </path>
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