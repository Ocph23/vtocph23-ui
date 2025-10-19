<template>
    <MainLayout>
        <VTCard title="Form">
            <VTInput v-model="sessionData.firstName" :label="'First Name'" @change="validate" :validation="true"
                :errors="errors?.firstName?._errors"></VTInput>
            <VTInput v-model="sessionData.bornDate" :type="'time'" :label="'Born Date'" :validation="true"
                @change="validate" :errors="errors?.bornDate?._errors"></VTInput>
        </VTCard>

    </MainLayout>
</template>

<script setup lang="ts">
import VTCard from '@/components/VTCard.vue';
import MainLayout from './MainLayout.vue';
import VTInput from '@/components/VTInput/VTInput.vue';
import z from 'zod';
import { reactive, ref } from 'vue';


interface User {
    firstName: string,
    bornDate: Date
}

const schema = z.object({
    firstName: z.string().min(3),
    bornDate: z.date()
})



type SessionFormSchema = z.Infer<typeof schema>;
const errors = ref<z.ZodFormattedError<SessionFormSchema> | null>(null);
const sessionData = reactive<User>({ firstName: '', bornDate: new Date() });
const validate = () => {
    var validatorResult = schema.safeParse(sessionData);
    errors.value = validatorResult.success ? null : validatorResult.error?.format();
}
validate();

</script>

<style lang="scss" scoped></style>