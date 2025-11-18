<template>
  <MainLayout>
    <VTPageTitle title="Table" subtitle=" Table Old View"></VTPageTitle>
    <TableViewOld />
    <VTPageTitle title="Table New View" subtitle="Table New View"></VTPageTitle>
    <TableViewNew />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './MainLayout.vue'
import TableViewOld from './TableViewOld.vue'
import TableViewNew from './TableViewNew.vue'
import VTPageTitle from '@/components/VTPageTitle.vue'
</script>

<style lang="scss" scoped></style>
