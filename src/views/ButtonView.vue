<template>
    <MainLayout>
        <VTPageTitle title="Button" subtitle="This is button view"></VTPageTitle>
        <VTPageTitle :size="'sm'" title="Color" subtitle="Button Color"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButton :color="'alternative'"&gt;Button&lt;/VTButton&gt;</code>
        </pre>
        <div class="flex gap-2 my-5">
            <VTButton :color="'alternative'">Button</VTButton>
            <VTButton :color="'blue'">Button</VTButton>
            <VTButton :color="'dark'">Button</VTButton>
            <VTButton :color="'default'">Button</VTButton>
            <VTButton :color="'green'">Button</VTButton>
            <VTButton :color="'light'">Button</VTButton>
            <VTButton :color="'pink'">Button</VTButton>
            <VTButton :color="'purple'">Button</VTButton>
            <VTButton :color="'red'">Button</VTButton>
            <VTButton :color="'yellow'">Button</VTButton>
        </div>
        <VTPageTitle :size="'sm'" title="Size" subtitle="Button Size"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTButton :color="'blue'" :size="'xs'"&gt;Button&lt;/VTButton&gt;</code>
        </pre>
        <div class="flex items-center gap-2 my-5">
            <VTButton :size="'xs'">Button</VTButton>
            <VTButton :size="'sm'">Button</VTButton>
            <VTButton :size="'md'">Button</VTButton>
            <VTButton :size="'lg'">Button</VTButton>
            <VTButton :size="'xl'">Button</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Button Properties"></VTPageTitle>
        <VTButton :color="'yellow'" :gradient="'green'" :shadow="'lime'" :square="true" :pill="true">Button With Custome
            Properties
        </VTButton>
        <pre>
            <code>
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
            </code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';


</script>

<style lang="scss" scoped></style>