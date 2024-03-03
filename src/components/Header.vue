<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ButtonVue from './Button.vue';
import Logo from './Logo.vue';
</script>

<template>
    <header class="px-8 xl:px-16 py-10 text-[#000000]">
        <div class="collapse border border-[#DCDCDC] lg:border-0">
            <input class="flex lg:hidden" type="checkbox" />
            <div class="collapse-title text-xl font-medium sm:flex sm:justify-between lg:items-center">
                <Logo />
                <ul class="hidden text-black lg:flex lg:text-center lg:gap-10 lg:font-extrabold lg:text-[18px]">
                    <RouterLink to="/" class="hover:text-[#5236FF]">Home</RouterLink>
                    <RouterLink to="/features" class="hover:text-[#5236FF]">Features</RouterLink>
                    <RouterLink to="/pricing" class="hover:text-[#5236FF]">Pricing</RouterLink>
                    <RouterLink to="/blog" class="hover:text-[#5236FF]">Blog</RouterLink>
                </ul>
                <ButtonVue class="w-fit hidden lg:flex" text="Sign In" format="small" color="white" />
            </div>
            <div class="collapse-content flex flex-col items-center lg:hidden">
                <ul class="flex flex-col text-center gap-6 font-extrabold text-[14px]">
                    <RouterLink to="/" class="hover:text-[#5236FF]">Home</RouterLink>
                    <RouterLink to="/features" class="hover:text-[#5236FF]">Features</RouterLink>
                    <RouterLink to="/pricing" class="hover:text-[#5236FF]">Pricing</RouterLink>
                    <RouterLink to="/blog" class="hover:text-[#5236FF]">Blog</RouterLink>
                </ul>
                <ButtonVue class="mt-4 w-fit" text="Sign In" format="small" color="white" />
            </div>
        </div>
    </header>
</template>