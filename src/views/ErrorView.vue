<template>
    <MainLayout>
        <VTPageTitle title="Error View" subtitle="This is error view documentation"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Error View"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTErrorView /&gt;</code>
        </pre>
        <div class="my-5">
            <p class="mb-2 text-sm text-gray-600">Default error view (503 - Maintenance Mode):</p>
            <VTErrorView />
        </div>

        <VTPageTitle :size="'sm'" title="Error Types" subtitle="Different Error Types"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
type ErrorTypes = '500' | '503' | '404' | '401'

&lt;VTErrorView :type="'404'" /&gt;  // Page Not Found
&lt;VTErrorView :type="'500'" /&gt;  // Server Error
&lt;VTErrorView :type="'503'" /&gt;  // Service Unavailable
&lt;VTErrorView :type="'401'" /&gt;  // Unauthorized</code>
        </pre>

        <VTPageTitle :size="'sm'" title="404 - Not Found" subtitle="Page Not Found Error"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTErrorView :type="'404'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="blue" @click="showError404">Show 404 Error</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="500 - Server Error" subtitle="Internal Server Error"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTErrorView :type="'500'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="red" @click="showError500">Show 500 Error</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="503 - Service Unavailable" subtitle="Maintenance Mode"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTErrorView :type="'503'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="yellow" @click="showError503">Show 503 Error</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="401 - Unauthorized" subtitle="Unauthorized Access Error"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>&lt;VTErrorView :type="'401'" /&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="purple" @click="showError401">Show 401 Error</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Error View Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTErrorViewProps {
    type?: '500' | '503' | '404' | '401';
}

// Default: type = '503'
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Features" subtitle="Error View Features"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- Animated Lottie animations for each error type
- Custom headline for each error type
- Descriptive message for each error type
- Responsive design (mobile and desktop)
- Dark mode support
- Full-screen layout
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Error Messages" subtitle="Default Messages by Type"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
404: "Oops! Page Not Found"
500: "oops, that's our bad"
503: "We'll Be Right Back!"
401: "Unauthorized Access"
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Usage Example" subtitle="How to Use Error View"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;script setup lang="ts"&gt;
import { ref } from 'vue';
import VTErrorView from '@/components/VTError/VTErrorView.vue';

const errorCode = ref('404');

// Show error based on API response
const handleError = (status: number) => {
    if (status === 404) errorCode.value = '404';
    else if (status === 500) errorCode.value = '500';
    else if (status === 401) errorCode.value = '401';
    else errorCode.value = '503';
}
&lt;/script&gt;

&lt;template&gt;
    &lt;VTErrorView :type="errorCode" /&gt;
&lt;/template&gt;</code>
        </pre>

        <!-- Hidden error views for demonstration -->
        <div v-if="show404" class="fixed inset-0 bg-white z-50">
            <VTErrorView :type="'404'" />
            <VTButton class="absolute top-4 right-4" color="red" @click="show404 = false">Close</VTButton>
        </div>
        <div v-if="show500" class="fixed inset-0 bg-white z-50">
            <VTErrorView :type="'500'" />
            <VTButton class="absolute top-4 right-4" color="red" @click="show500 = false">Close</VTButton>
        </div>
        <div v-if="show503" class="fixed inset-0 bg-white z-50">
            <VTErrorView :type="'503'" />
            <VTButton class="absolute top-4 right-4" color="red" @click="show503 = false">Close</VTButton>
        </div>
        <div v-if="show401" class="fixed inset-0 bg-white z-50">
            <VTErrorView :type="'401'" />
            <VTButton class="absolute top-4 right-4" color="red" @click="show401 = false">Close</VTButton>
        </div>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTErrorView from '@/components/VTError/VTErrorView.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const show404 = ref(false);
const show500 = ref(false);
const show503 = ref(false);
const show401 = ref(false);

const showError404 = () => { show404.value = true; };
const showError500 = () => { show500.value = true; };
const showError503 = () => { show503.value = true; };
const showError401 = () => { show401.value = true; };
</script>

<style lang="scss" scoped></style>
