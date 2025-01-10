<template>
  <component :is="buttonComponent" :class="wrapperClasses" :[linkAttr]="href"
    :disabled="buttonComponent === 'button' && disabled">

    <div v-if="!isOutlineGradient && $slots.prefix" class="mr-2">
      <slot name="prefix" />
    </div>

    <span :class="spanClasses">
      <span v-if="isOutlineGradient && $slots.prefix" class="mr-2">
        <slot name="prefix" />
      </span>
      <slot />
      <span v-if="isOutlineGradient && $slots.suffix" class="ml-2">
        <slot name="suffix" />
      </span>
    </span>

    <div v-if="!isOutlineGradient && $slots.suffix" class="ml-2">
      <slot name="suffix" />
    </div>

  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent, toRefs } from 'vue'
import { useMergeClasses } from '..'
import { useButtonClasses } from './ButtonClasses'
import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types'

export interface IButtonProps {
  class?: string
  color?: ButtonVariant
  gradient?: ButtonGradient | null
  size?: ButtonSize
  shadow?: ButtonMonochromeGradient | null
  pill?: boolean
  square?: boolean
  outline?: boolean
  disabled?: boolean
  href?: string
  tag?: string
}
const props = withDefaults(defineProps<IButtonProps>(), {
  class: '',
  color: 'default',
  gradient: null,
  size: 'md',
  shadow: null,
  pill: false,
  square: false,
  outline: false,
  loading: false,
  loadingPosition: 'prefix',
  disabled: false,
  href: '',
  tag: 'a',
})

const buttonClasses = computed(() => useButtonClasses(toRefs(props)))
const wrapperClasses = computed(() => useMergeClasses(buttonClasses.value.wrapperClasses))
const spanClasses = computed(() => useMergeClasses(buttonClasses.value.spanClasses))

const isOutlineGradient = computed(() => props.outline && props.gradient)

const linkComponent = props.tag !== 'a' ? resolveComponent(props.tag) : 'a'
const buttonComponent = props.href ? linkComponent : 'button'
const linkAttr = props.tag === 'router-link' || props.tag === 'nuxt-link' ? 'to' : 'href'
</script>