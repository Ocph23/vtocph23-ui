<template>
    <MainLayout>
        <VTPageTitle title="Busy Progress" subtitle="This is busy progress view"></VTPageTitle>

        <VTPageTitle :size="'sm'" title="Basic" subtitle="Basic Busy Progress"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// In your component
&lt;VTBusyProgressView /&gt;

// In your script
import { VTBusyProgressService } from '@/components/VTBusyProgress';

// Start progress
await VTBusyProgressService.start();

// Complete progress
await VTBusyProgressService.stop();</code>
        </pre>
        <div class="my-5">
            <VTButton color="blue" @click="runBasicProgress">Run Basic Progress</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="With Busy State" subtitle="Progress with Busy State Management"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
const isBusy = ref(false);

// Start with busy state
await VTBusyProgressService.start(isBusy);

// Stop with busy state
await VTBusyProgressService.stop(isBusy);</code>
        </pre>
        <div class="my-5">
            <VTButton color="green" @click="runBusyProgress">Run with Busy State</VTButton>
            <p v-if="isBusy" class="mt-2 text-sm text-green-600">Currently busy...</p>
        </div>

        <VTPageTitle :size="'sm'" title="Manual Control" subtitle="Manual Progress Control"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Start progress
await VTBusyProgressService.start();

// Continue to 100%
await VTBusyProgressService.continue();

// Stop immediately
await VTBusyProgressService.stop();</code>
        </pre>
        <div class="my-5 flex gap-2">
            <VTButton color="blue" @click="startManual">Start</VTButton>
            <VTButton color="yellow" @click="continueManual">Continue</VTButton>
            <VTButton color="red" @click="stopManual">Stop</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="In Form Submission" subtitle="Progress During Form Submission"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
const submitForm = async () => {
    await VTBusyProgressService.start();
    
    try {
        await api.submit(data);
        VTToastService.success('Saved!');
    } catch (error) {
        VTToastService.error('Failed!');
    } finally {
        await VTBusyProgressService.stop();
    }
};</code>
        </pre>
        <div class="my-5">
            <VTButton color="purple" @click="simulateFormSubmit">Simulate Form Submit</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="In Data Fetching" subtitle="Progress During Data Fetching"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
const fetchData = async () => {
    await VTBusyProgressService.start();
    
    try {
        const data = await api.get('/endpoint');
        // Process data
    } finally {
        await VTBusyProgressService.stop();
    }
};</code>
        </pre>
        <div class="my-5">
            <VTButton color="indigo" @click="simulateDataFetch">Simulate Data Fetch</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Multiple Operations" subtitle="Progress for Multiple Sequential Operations"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
const processMultiple = async () => {
    await VTBusyProgressService.start();
    
    await operation1();
    await operation2();
    await operation3();
    
    await VTBusyProgressService.stop();
};</code>
        </pre>
        <div class="my-5">
            <VTButton color="pink" @click="simulateMultipleOps">Run Multiple Operations</VTButton>
        </div>

        <VTPageTitle :size="'sm'" title="Properties" subtitle="Busy Progress Properties"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// VTBusyProgressView has no props
// It's a service-based component

// Service API:
interface VTBusyProgressService {
    start(isBusy?: Ref&lt;boolean&gt;): Promise&lt;void&gt;;
    continue(): Promise&lt;void&gt;;
    stop(isBusy?: Ref&lt;boolean&gt;): Promise&lt;void&gt;;
}
            </code>
        </pre>

        <VTPageTitle :size="'sm'" title="Progress Behavior" subtitle="How Progress Works"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// Progress Flow:
1. start() - Progress starts from 0% to 80%
2. At 80% - Progress waits (pending state)
3. continue() - Progress goes from 80% to 100%
4. stop() - Progress completes and hides

// Auto-behavior:
- If stop() is called before 80%, it jumps to 100%
- If stop() is called after 80%, it continues to 100%
- Progress bar is shown at top of page
            </code>
        </pre>
        <div class="my-5">
            <VTCard title="Progress States">
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-32 font-semibold">Start (0-80%)</div>
                        <div class="flex-1 bg-gray-200 rounded-full h-4">
                            <div class="bg-blue-500 h-4 rounded-full" style="width: 80%"></div>
                        </div>
                        <span class="text-sm text-gray-600">Auto-progress to 80%</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-32 font-semibold">Pending (80%)</div>
                        <div class="flex-1 bg-gray-200 rounded-full h-4">
                            <div class="bg-yellow-500 h-4 rounded-full" style="width: 80%"></div>
                        </div>
                        <span class="text-sm text-gray-600">Waits for operation</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-32 font-semibold">Complete (100%)</div>
                        <div class="flex-1 bg-gray-200 rounded-full h-4">
                            <div class="bg-green-500 h-4 rounded-full" style="width: 100%"></div>
                        </div>
                        <span class="text-sm text-gray-600">Finishes and hides</span>
                    </div>
                </div>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Best Practices" subtitle="Usage Guidelines"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
// DO:
// - Call start() before async operations
// - Always call stop() in finally block
// - Use with isBusy for button states
// - Use for page-level loading

// DON'T:
// - Use for component-level loading
// - Forget to call stop()
// - Use multiple instances
// - Use for instant operations (&lt;100ms)
            </code>
        </pre>
        <div class="my-5">
            <VTCard title="Usage Tips">
                <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Use <strong class="font-semibold">try-finally</strong> to ensure stop() is always called</li>
                    <li>Pass <strong class="font-semibold">isBusy ref</strong> to automatically manage button states</li>
                    <li>Use for <strong class="font-semibold">page-level</strong> operations, not component-level</li>
                    <li>Combine with <strong class="font-semibold">VTToastService</strong> for success/error messages</li>
                </ul>
            </VTCard>
        </div>

        <VTPageTitle :size="'sm'" title="Complete Example" subtitle="Full Implementation Example"></VTPageTitle>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto">
            <code>
&lt;template&gt;
    &lt;MainLayout&gt;
        &lt;VTBusyProgressView /&gt;
        
        &lt;VTButton 
            :disabled="isBusy" 
            @click="saveData"
        &gt;
            Save Data
        &lt;/VTButton&gt;
    &lt;/MainLayout&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import { VTToastService } from '@/components/VTToast';

const isBusy = ref(false);

const saveData = async () => {
    await VTBusyProgressService.start(isBusy);
    
    try {
        await api.save(data);
        VTToastService.success('Data saved successfully!');
    } catch (error) {
        VTToastService.error('Failed to save data!');
    } finally {
        await VTBusyProgressService.stop(isBusy);
    }
};
&lt;/script&gt;</code>
        </pre>

    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VTBusyProgressView from '@/components/VTBusyProgress/VTBusyProgressView.vue';
import VTButton from '@/components/VTButton/VTButton.vue';
import VTCard from '@/components/VTCard.vue';
import VTPageTitle from '@/components/VTPageTitle.vue';
import MainLayout from './MainLayout.vue';
import { VTBusyProgressService } from '@/components/VTBusyProgress';
import { VTToastService } from '@/components/VTToast';

const isBusy = ref(false);

const runBasicProgress = async () => {
    await VTBusyProgressService.start();
    setTimeout(async () => {
        await VTBusyProgressService.stop();
        VTToastService.success('Progress completed!');
    }, 2000);
};

const runBusyProgress = async () => {
    await VTBusyProgressService.start(isBusy);
    setTimeout(async () => {
        await VTBusyProgressService.stop(isBusy);
        VTToastService.success('Busy progress completed!');
    }, 2000);
};

const startManual = async () => {
    await VTBusyProgressService.start();
    VTToastService.info('Progress started - now at 80%');
};

const continueManual = async () => {
    await VTBusyProgressService.continue();
    VTToastService.info('Progress continued to 100%');
};

const stopManual = async () => {
    await VTBusyProgressService.stop();
    VTToastService.info('Progress stopped');
};

const simulateFormSubmit = async () => {
    await VTBusyProgressService.start(isBusy);
    setTimeout(async () => {
        await VTBusyProgressService.stop(isBusy);
        VTToastService.success('Form submitted successfully!');
    }, 2000);
};

const simulateDataFetch = async () => {
    await VTBusyProgressService.start(isBusy);
    setTimeout(async () => {
        await VTBusyProgressService.stop(isBusy);
        VTToastService.success('Data fetched successfully!');
    }, 2500);
};

const simulateMultipleOps = async () => {
    await VTBusyProgressService.start(isBusy);
    
    // Simulate multiple operations
    await new Promise(resolve => setTimeout(resolve, 800));
    await new Promise(resolve => setTimeout(resolve, 800));
    await new Promise(resolve => setTimeout(resolve, 800));
    
    await VTBusyProgressService.stop(isBusy);
    VTToastService.success('All operations completed!');
};
</script>

<style lang="scss" scoped></style>
