<script setup lang="ts">
import Button from './Button.vue';
const props = defineProps<{
    title: string;
    content?: string;
    buttonText?: string;
}>();

const button: string | undefined = props.buttonText;
</script>


<template>
    <div
        class="bg-[url('/src/assets/Background_Banner.svg')] bg-cover bg-no-repeat overflow-visible z-0 rounded-[20px] h-fit p-5 md:p-10 lg:p-20">
        <h1 v-html="props.title"
            class=" text-2xl font-extrabold text-balance text-center text-[#FFFFFF] my-8 md:text-5xl lg:text-6xl"></h1>
        <p v-if="props.content !== undefined" class="text-[#FFFFFF] text-center text-sm md:text-xl">{{ props.content }}</p>
        <div v-if="props.content !== undefined" class="flex justify-center w-full">
            <Button class="px-8 min-w-[200px] my-10" v-if="button !== undefined" :text="button" format="default"
                color="white" />
        </div>
        <slot></slot>
    </div>
</template>