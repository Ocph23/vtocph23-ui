<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core';

defineProps<{
    messages: ErrorObject[]
}>()

const getMessage = (messages: ErrorObject[]) => {
    if (messages && messages.length > 0) {
        var data = messages[0];
        return data ? data.$message : ""
    }
    return "";
}

</script>

<template v-if="messages && messages.length > 0">
    <div class="text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500  text-sm">
        {{ getMessage(messages) }}
    </div>
</template>