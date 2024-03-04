<script setup lang="ts">
import Logo from './Logo.vue';
import ButtonVue from './Button.vue';
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue';
</script>

<template>
    <hr class="border border-[#DCDCDC]">
    <div class="flex flex-col items-center gap-5 py-4 sm:flex-row sm:justify-between md:py-8">
        <Logo />
        <ButtonVue class="max-w-[300px]" text="See our Case Studies" format="small" color="white" />
    </div>
    <hr class="border border-[#DCDCDC]">
    <footer class="flex flex-col justify-between items-center footer text-base-content py-8 md:flex-row">
        <div class="w-full md:w-[40%] flex justify-evenly">
            <nav class="flex flex-col gap-4">
                <h6 class="footer-title text-[#2F2F2F]">Resources</h6>
                <RouterLink class="hover:text-[#5236FF]" to="/">Branding</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Design</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Marketing</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Advertisement</RouterLink>
            </nav>
            <nav class="flex flex-col gap-4">
                <h6 class="footer-title text-[#2F2F2F]">Utiliy Pages</h6>
                <RouterLink class="hover:text-[#5236FF]" to="/">About us</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Contact</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Jobs</RouterLink>
                <RouterLink class="hover:text-[#5236FF]" to="/">Press kit</RouterLink>
            </nav>
        </div>
        <hr class="border border-[#DCDCDC] h-full">
        <aside class="text-[#FFFFFF] w-full md:w-[70%]">
            <div
                class="bg-primary2 flex flex-col md:flex-row md:justify-around items-center w-full max-w-[612px] h-full md:h-[376px] rounded-3xl md:p-10">
                <div class="flex flex-col items-left gap-5 justify-center h-full p-8 md:w-1/2 md:p-4">
                    <button
                        class="bg-[url('/src/assets/Popular.svg')] bg-no-repeat w-[134px] h-[51px] font-extrabold text-[18px]">Popular</button>
                    <span class=" text-3xl font-bold">Startup $<span class="text-6xl">25</span></span>
                    <ButtonVue class="bg-[#424242] text-[20px]" text="Choose Plan" format="small" />
                </div>
                <hr class="border border-[#646464] w-full md:h-full md:w-0">
                <ul class="text-[20px] h-full flex flex-col justify-center gap-5 p-8  md:w-1/2 md:pl-8">
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />3 Social Set
                    </li>
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />150 posts per social</li>
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />5 users
                    </li>
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />Phone <span
                            class="text-[#38D4FF] ml-2">Support</span>
                    </li>
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />Planning & publishing
                    </li>
                    <li class="flex stroke-[#31C65B]">
                        <Icon class="mr-2" icon="ic:baseline-check" />Analytics tools
                    </li>
                </ul>
            </div>
        </aside>
    </footer>
</template>