<!-- This icon is from <https://github.com/Templarian/MaterialDesign>, distributed under Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0) license-->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
    :class="iconClass" viewBox="0 0 448 512" fill="currentColor">
    <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
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