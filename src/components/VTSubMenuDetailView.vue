<script setup lang="ts">
import { type Router } from 'vue-router';
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
  FwbButton,
} from 'flowbite-vue'
import { onMounted, ref } from 'vue';
import type { SubMenuDetail } from '.';


const props = defineProps({
  router: {
    type: Object
  },
  items: {
    type: Array<SubMenuDetail>
  }, title: {
    type: String
  },
  currentMenu: {
    type: String
  }
});
const currentTab = ref<string>('');

const emit = defineEmits(['onClick']);


onMounted(() => {
  currentTab.value = props.currentMenu ?? '';
})

const clickButton = (item: SubMenuDetail) => {
  let r = props.router as Router
  currentTab.value = item.title;
  if (item.typeMenu == 'Router') {
    r.push({ name: item.routeName, params: item.param })
  } else if (item.typeMenu == 'Link') {
    r.push(item.link);
  } else {
    emit('onClick', item);
  }
}
</script>

<template>
  <div class="mb-5">
    <FwbButton @click="clickButton(item)" v-for="item in props.items" :key="item.title" class="m-1"
      :outline="currentTab != item.title" color="default" :disabled="item.disabled ? true : false">
      {{ item.title }}</FwbButton>
  </div>
</template>
