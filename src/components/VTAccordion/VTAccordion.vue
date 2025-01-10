<template>
  <div :data-accordion-id="accordionId">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { useAccordionState, type AccordionProps } from './composables/useAccordionState'


const props = withDefaults(defineProps<AccordionProps>(), {
  alwaysOpen: false,
  openFirstItem: true,
  flush: false,
})

const accordionId = nanoid()
useAccordionState(accordionId, { ...props })
</script>
