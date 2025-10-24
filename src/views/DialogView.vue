<template>
  <MainLayout>
    <VTPageTitle subtitle="Dialog service" size="lg" :title="'Dialog Service'"></VTPageTitle>

    <CodeComponent>
      <pre><code>
    &lt;VTButton :color="'red'" @click="dialogShow('danger')"&gt;Dialog&lt;/VTButton&gt;

    import { VTDialogService } from '@/components/VTDialog'
    VTDialogService.info('Title','message')
    </code></pre>
    </CodeComponent>
    <div class="flex gap-4">
      <div>
        <h1>danger</h1>
        <VTButton :color="'red'" @click="dialogShow('danger')">Dialog</VTButton>
      </div>
      <div>
        <h1>Info</h1>
        <VTButton :color="'blue'" @click="dialogShow('info')">Dialog</VTButton>
      </div>
      <div>
        <h1>Success</h1>
        <VTButton :color="'green'" @click="dialogShow('success')">Dialog</VTButton>
      </div>
      <div>
        <h1>Warning</h1>
        <VTButton :color="'yellow'" @click="dialogShow('warning')">Dialog</VTButton>
      </div>
    </div>
    <VTPageTitle class="mt-10" size="lg" :title="'Confirm Dialog'"></VTPageTitle>
    <VTButton @click="confirmDialog()">Click here</VTButton>
    <CodeComponent>
      <pre v-pre>
        &lt;template&gt;
          &lt;VTPageTitle title="Dialog Demo" /&gt;
          &lt;VTButton @click="confirmDialog"&gt;Click here&lt;/VTButton&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import VTPageTitle from '@/components/VTPageTitle.vue'
        import VTButton from '@/components/VTButton/VTButton.vue'
        import { VTDialogService } from '@/components/VTDialog'

        const confirmDialog = () =&gt; {
          VTDialogService.asyncShowDialog('Title', 'Message').then(
            (res) =&gt; {
              VTDialogService.info('Confirm', 'Ok')
            },
            (err) =&gt; {
              VTDialogService.danger('Confirm', 'Cancel')
            }
          )
        }
        &lt;/script&gt;
          </pre
      >
    </CodeComponent>
  </MainLayout>
</template>

<script setup lang="ts">
import CodeComponent from './components/CodeComponent.vue'
import VTPageTitle from '@/components/VTPageTitle.vue'
import { VTDialogService } from '@/components/VTDialog'
import VTButton from '@/components/VTButton/VTButton.vue'
import MainLayout from '@/views/MainLayout.vue'
const dialogShow = (type: string) => {
  switch (type) {
    case 'info':
      VTDialogService.info('Title', 'message', null)
      break
    case 'success':
      VTDialogService.success('Title', 'message')
      break
    case 'warning':
      VTDialogService.warning('Title', 'message')
      break
    default:
      VTDialogService.danger('Title', 'message')
      break
  }
}

const confirmDialog = () => {
  VTDialogService.asyncShowDialog('Title', 'Message').then(
    (res) => {
      VTDialogService.info('Confirm', 'Ok')
    },
    (err) => {
      VTDialogService.danger('Confirm', 'Cancel')
    }
  )
}
</script>
