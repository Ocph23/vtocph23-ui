<template>
    <MainLayout>
        <VTPageTitle title="Modal" subtitle="This is modal view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Modal"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTButton @click="showModal = true"&gt;Open Modal&lt;/VTButton&gt;

&lt;VTModal v-if="showModal" @close="showModal = false"&gt;
    &lt;template #header&gt;
        &lt;h3 class="text-xl font-semibold"&gt;Modal Title&lt;/h3&gt;
    &lt;/template&gt;
    &lt;template #body&gt;
        &lt;p&gt;Modal content here...&lt;/p&gt;
    &lt;/template&gt;
&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="blue" @click="showBasic = true">Open Basic Modal</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Sizes" subtitle="Modal Sizes"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTModal :size="'sm'"&gt;...&lt;/VTModal&gt;
&lt;VTModal :size="'md'"&gt;...&lt;/VTModal&gt;
&lt;VTModal :size="'lg'"&gt;...&lt;/VTModal&gt;
&lt;VTModal :size="'xl'"&gt;...&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5 flex gap-2 flex-wrap">
            <VTButton color="blue" size="sm" @click="showSize('xs')">XS</VTButton>
            <VTButton color="blue" size="sm" @click="showSize('sm')">SM</VTButton>
            <VTButton color="blue" size="sm" @click="showSize('md')">MD</VTButton>
            <VTButton color="blue" size="sm" @click="showSize('lg')">LG</VTButton>
            <VTButton color="blue" size="sm" @click="showSize('xl')">XL</VTButton>
            <VTButton color="blue" size="sm" @click="showSize('2xl')">2XL</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Positions" subtitle="Modal Positions"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTModal :position="'center'"&gt;...&lt;/VTModal&gt;
&lt;VTModal :position="'top-right'"&gt;...&lt;/VTModal&gt;
&lt;VTModal :position="'bottom-left'"&gt;...&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5 flex gap-2 flex-wrap">
            <VTButton color="green" size="sm" @click="showPosition('center')">Center</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('top-left')">Top Left</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('top-center')">Top Center</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('top-right')">Top Right</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('center-left')">Center Left</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('center-right')">Center Right</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('bottom-left')">Bottom Left</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('bottom-center')">Bottom Center</VTButton>
            <VTButton color="green" size="sm" @click="showPosition('bottom-right')">Bottom Right</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Persistent" subtitle="Modal with Persistent Mode"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTModal :persistent="true"&gt;
    &lt;!-- Cannot close by clicking outside or pressing ESC --&gt;
&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="yellow" @click="showPersistent = true">Open Persistent Modal</VTButton>
            <p class="mt-2 text-sm text-gray-600">This modal cannot be closed by clicking outside or pressing ESC.</p>
        </div>

        <VTPageTitle :size="'sm'" title="With Footer" subtitle="Modal with Footer Actions"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTModal&gt;
    &lt;template #header&gt;
        &lt;h3&gt;Title&lt;/h3&gt;
    &lt;/template&gt;
    &lt;template #body&gt;
        &lt;p&gt;Content&lt;/p&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;VTButton color="blue"&gt;Save&lt;/VTButton&gt;
        &lt;VTButton color="alternative"&gt;Cancel&lt;/VTButton&gt;
    &lt;/template&gt;
&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="purple" @click="showWithFooter = true">Open Modal with Footer</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Form Modal" subtitle="Modal with Form"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;VTModal&gt;
    &lt;template #header&gt;
        &lt;h3&gt;Edit Profile&lt;/h3&gt;
    &lt;/template&gt;
    &lt;template #body&gt;
        &lt;VTInput label="Name" v-model="name" /&gt;
        &lt;VTInput label="Email" v-model="email" /&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
        &lt;VTButtonSave /&gt;
    &lt;/template&gt;
&lt;/VTModal&gt;</code>
        </pre>
        <div class="my-5">
            <VTButton color="green" @click="showForm = true">Open Form Modal</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Modal Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
interface VTModalProps {
    notEscapable?: boolean;
    persistent?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    position?: 'center' | 'top-left' | 'top-center' | 'top-right' | 
               'center-left' | 'center-right' | 'bottom-left' | 
               'bottom-center' | 'bottom-right';
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Slots" subtitle="Modal Slots"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
- header: Modal header content (title, actions)
- body: Modal body content
- footer: Modal footer content (buttons)
- close-icon: Custom close icon
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Events" subtitle="Modal Events"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
@close - Emitted when modal is closed
@click:outside - Emitted when clicking outside modal
            </code>
        </pre>

        <!-- Basic Modal -->
        <VTModal v-if="showBasic" @close="showBasic = false" :size="'md'">
            <template #header>
                <h3 class="text-xl font-semibold">Basic Modal</h3>
            </template>
            <template #body>
                <p class="text-gray-600 dark:text-gray-300">
                    This is a basic modal dialog. You can close it by clicking outside, 
                    pressing ESC, or clicking the close button.
                </p>
            </template>
        </VTModal>

        <!-- Size Modal -->
        <VTModal v-if="showSizeModal" :size="'md'" @close="showSizeModal = false">
            <template #header>
                <h3 class="text-xl font-semibold">{{ currentSize.toUpperCase() }} Modal</h3>
            </template>
            <template #body>
                <p class="text-gray-600 dark:text-gray-300">This modal has {{ currentSize }} size.</p>
            </template>
        </VTModal>

        <!-- Position Modal -->
        <VTModal v-if="showPositionModal" :position="'center'" @close="showPositionModal = false" :size="'md'">
            <template #header>
                <h3 class="text-xl font-semibold">{{ currentPosition.replace('-', ' ').toUpperCase() }} Modal</h3>
            </template>
            <template #body>
                <p class="text-gray-600 dark:text-gray-300">This modal is positioned at {{ currentPosition }}.</p>
            </template>
        </VTModal>

        <!-- Persistent Modal -->
        <VTModal v-if="showPersistent" :persistent="true" :notEscapable="true" @close="showPersistent = false" :size="'md'">
            <template #header>
                <h3 class="text-xl font-semibold">Persistent Modal</h3>
            </template>
            <template #body>
                <p class="text-gray-600 dark:text-gray-300">
                    This modal cannot be closed by clicking outside or pressing ESC. 
                    You must use the close button.
                </p>
            </template>
            <template #footer>
                <VTButton color="blue" @click="showPersistent = false">Close</VTButton>
            </template>
        </VTModal>

        <!-- Footer Modal -->
        <VTModal v-if="showWithFooter" @close="showWithFooter = false" :size="'md'">
            <template #header>
                <h3 class="text-xl font-semibold">Modal with Footer</h3>
            </template>
            <template #body>
                <p class="text-gray-600 dark:text-gray-300">
                    This modal has a footer section with action buttons.
                </p>
            </template>
            <template #footer>
                <div class="flex gap-2 justify-end">
                    <VTButton color="alternative" @click="showWithFooter = false">Cancel</VTButton>
                    <VTButton color="blue" @click="showWithFooter = false">Save</VTButton>
                </div>
            </template>
        </VTModal>

        <!-- Form Modal -->
        <VTModal v-if="showForm" @close="showForm = false" :size="'lg'">
            <template #header>
                <h3 class="text-xl font-semibold">Edit Profile</h3>
            </template>
            <template #body>
                <div class="space-y-4">
                    <VTInput v-model="formData.name" :label="'Name'" />
                    <VTInput v-model="formData.email" :label="'Email'" :type="'email'" />
                    <VTTextArea v-model="formData.bio" :label="'Bio'" :rows="3" />
                </div>
            </template>
            <template #footer>
                <div class="flex gap-2 justify-end">
                    <VTButton color="alternative" @click="showForm = false">Cancel</VTButton>
                    <VTButton color="blue" @click="saveForm">Save Changes</VTButton>
                </div>
            </template>
        </VTModal>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import VTModal from '@/components/VTModal.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTInput from '@/components/VTInput/VTInput.vue';
import VTTextArea from '@/components/VTTextArea/VTTextArea.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';

const showBasic = ref(false);
const showSizeModal = ref(false);
const showPositionModal = ref(false);
const showPersistent = ref(false);
const showWithFooter = ref(false);
const showForm = ref(false);

const currentSize = ref('md');
const currentPosition = ref('center');

const formData = reactive({
    name: '',
    email: '',
    bio: ''
});

const showSize = (size: string) => {
    currentSize.value = size;
    showSizeModal.value = true;
};

const showPosition = (position: string) => {
    currentPosition.value = position;
    showPositionModal.value = true;
};

const saveForm = () => {
    console.log('Form saved:', formData);
    showForm.value = false;
};
</script>

<style lang="scss" scoped></style>
