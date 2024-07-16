<script setup lang="ts">
import { RouterView } from "vue-router";
import { VTBusyProgressView } from ".";
import { VTToastView } from ".";
import VTDialogView from "./components/VTDialog/VTDialogView.vue";
</script>

<template>
    <VTBusyProgressView />
    <VTDialogView />
    <VTToastView />
    <RouterView />
</template>