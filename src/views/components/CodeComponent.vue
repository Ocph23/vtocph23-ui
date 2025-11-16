<script setup lang="ts">


interface CodeComponentProps {
  title?: string
  subTitle?: string
}

const props = withDefaults(defineProps<CodeComponentProps>(), {
  title: 'Code :',
  subTitle: ''
})


</script>

<template>
  <div class="p-2 m-2">
    <h2>{{ props.title }}</h2>
    <h6 v-if="props.subTitle">{{ props.subTitle }}</h6>
    <div class="bg-slate-200 p-2">
      <slot></slot>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
