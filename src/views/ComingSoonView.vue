<template>
    <MainLayout>
        <VTPageTitle title="Coming Soon" subtitle="This is coming soon view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Coming Soon View"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTComingSoonView /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="blue" @click="showComingSoon = true">Preview Coming Soon</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Use Cases" subtitle="When to Use Coming Soon View"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Use VTComingSoonView for:
// - Pages under construction
// - Features in development
// - Temporarily unavailable sections
// - Placeholder for future content</code>
        </pre>
        <div class="my-5">
            <VTCard title="Common Use Cases">
                <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>New features that are being developed</li>
                    <li>Pages temporarily unavailable for maintenance</li>
                    <li>Sections under construction</li>
                    <li>Placeholder for planned functionality</li>
                </ul>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="In Router" subtitle="Using with Vue Router"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// router.ts
{
    path: '/reports',
    name: 'reports',
    component: VTComingSoonView
}

// Or conditionally show
{
    path: '/analytics',
    name: 'analytics',
    component: () => import('@/views/ComingSoonView.vue')
}</code>
        </pre>
        <div class="my-5">
            <VTCard title="Router Integration">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    The Coming Soon view can be used as a placeholder route while you develop
                    the actual page. This allows you to commit routes early and show users
                    what's coming.
                </p>
                <VTButton color="green" @click="showExample = true">Show Example</VTButton>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Coming Soon Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// VTComingSoonView has no props
// It's a simple presentational component

// Features:
// - Full screen layout
// - Centered content
// - Background image
// - Responsive design
// - Semi-transparent overlay
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Customization" subtitle="Customizing the Coming Soon View"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// To customize:
// 1. Modify the headline text
// 2. Change the description
// 3. Replace the background image
// 4. Add countdown timer
// 5. Add notify me button

// Example customization:
&lt;div class="bg"&gt;
    &lt;div class="flex flex-col items-center"&gt;
        &lt;img src="custom-image.jpg"&gt;
        &lt;div class="headline"&gt;Your Text&lt;/div&gt;
        &lt;div class="desc"&gt;Your description&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
        </pre>

        <VTPageTitle :size="'sm'" title="Styling" subtitle="Default Styles"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Default styles include:
.bg {
    @apply font-sans font-bold 
           flex justify-center p-24 
           items-end relative 
           bg-no-repeat h-screen 
           opacity-50
}

// Image: w-1/4
// Headline: text-4xl
// Description: normal text
            </code>
        </pre>
        <div class="my-5">
            <VTCard title="Style Classes">
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th class="py-2 px-4 text-left">Element</th>
                                <th class="py-2 px-4 text-left">Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-t">Container</td>
                                <td class="py-2 px-4 border-t font-mono text-sm">h-screen, p-24</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-t">Image</td>
                                <td class="py-2 px-4 border-t font-mono text-sm">w-1/4</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-t">Headline</td>
                                <td class="py-2 px-4 border-t font-mono text-sm">text-4xl</td>
                            </tr>
                            <tr>
                                <td class="py-2 px-4 border-t">Opacity</td>
                                <td class="py-2 px-4 border-t font-mono text-sm">opacity-50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Best Practices" subtitle="Usage Guidelines"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// DO:
// - Use for temporary states only
// - Provide clear messaging
// - Consider adding ETA if known
// - Offer alternative navigation

// DON'T:
// - Leave pages in this state long-term
// - Use for broken/error states
// - Forget to update when feature launches
            </code>
        </pre>

        <!-- Preview Modal -->
        <VTModal v-if="showComingSoon" @close="showComingSoon = false" :size="'lg'">
            <template #header>
                <h3 class="text-xl font-semibold">Coming Soon Preview</h3>
            </template>
            <template #body>
                <div class="bg">
                    <div class="flex flex-col items-center justify-end mb-16 gap-4">
                        <img class="w-1/4" src="../assets/images/workprogress.jpg" alt="Work in progress">
                        <div class="headline text-4xl">
                            Halaman Ini Dalam Pengembangan
                        </div>
                        <div class="desc">
                            Kami sedang menyiapkan fitur-fitur baru yang akan segera tersedia.
                        </div>
                    </div>
                </div>
            </template>
        </VTModal>

        <!-- Example Modal -->
        <VTModal v-if="showExample" @close="showExample = false" :size="'md'">
            <template #header>
                <h3 class="text-xl font-semibold">Router Example</h3>
            </template>
            <template #body>
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        Example of using Coming Soon view in your router configuration:
                    </p>
                    <pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
<code>// router/route.ts
const routes = [
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('@/views/ComingSoonView.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/ComingSoonView.vue')
  }
]</code>
                    </pre>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        This allows you to have working navigation links while the actual
                        pages are being developed.
                    </p>
                </div>
            </template>
            <template #footer>
                <VTButton color="blue" @click="showExample = false">Got it</VTButton>
            </template>
        </VTModal>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTComingSoonView from '@/components/VTComingSoonView.vue';
import VTCard from '@/components/VTCard.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import VTModal from '@/components/VTModal.vue';
import MainLayout from './MainLayout.vue';

const showComingSoon = ref(false);
const showExample = ref(false);
</script>

<style lang="scss" scoped></style>
