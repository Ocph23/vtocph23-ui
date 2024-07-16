<script setup lang="ts">
import { RouterView } from "vue-router";
import { VTBusyProgressView } from ".";
import { VTToastView } from ".";
</script>

<template>
    <VTBusyProgressView />
    <VTToastView />
    <RouterView />
</template>