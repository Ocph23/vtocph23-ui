<template>
    <div class="flex items-start">
        <tooltip :placement="placement" :triggers="[trigger]" :theme="theme" auto-hide :disabled="isDisabled">
            <slot name="trigger" />
            <template #popper >
                <slot name="content" />
            </template>
        </tooltip>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Tooltip } from 'floating-vue';
import 'floating-vue/dist/style.css';

interface TooltipProps {
    placement?: TooltipPlacement
    theme?: TooltipStyle
    trigger?: TooltipTrigger
    data?: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
    theme: 'dark',
    trigger: 'hover',
})

const isDisabled = ref(false)
if(!props.data){
    isDisabled.value = true
}

const theme = computed(() => {
    const themes = {
        light: 'tooltip-light',
        dark: 'tooltip-dark',
    }
    return themes[props.theme]
})

type TooltipPlacement = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
type TooltipStyle = 'dark' | 'light';
type TooltipTrigger = 'hover' | 'click';
</script>


<style>
.v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
    background: rgba(0, 0, 0);
    color: #fff;
    border-radius: 6px;
    padding: 7px 12px 6px;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-inner {
    visibility: hidden;
}

.v-popper--theme-tooltip-dark .v-popper__arrow-outer {
    border-color: #000c;
}

@media (prefers-color-scheme: dark) {
    .v-popper--theme-tooltip-dark .v-popper__wrapper .v-popper__inner {
        background: rgb(55 65 81);
    }

    .v-popper--theme-tooltip-dark .v-popper__arrow-outer {
        border-color: rgb(55 65 81);
    }
}

.v-popper--theme-tooltip-light .v-popper__wrapper .v-popper__inner {
    background: #fff;
    color: black;
    padding: 7px 12px 6px;
    border-radius: 6px;
    border: 1px solid #eeeeee;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
}

.v-popper--theme-tooltip-light .v-popper__arrow-inner {
    visibility: visible;
    border-color: #fff;
}

.v-popper--theme-tooltip-light .v-popper__arrow-outer {
    border-color: #ddd;
}

.v-popper__popper[data-popper-placement^='bottom'] .v-popper__inner {
    margin-top: -1px;
}

.v-popper__popper[data-popper-placement^='right'] .v-popper__inner {
    margin-left: -1px;
}
</style>