<script setup lang="ts">
const props = defineProps<{
  text: string;
  format?: 'small' | 'default' | 'largeSize';
  color?: 'black' | 'white' | 'blue';
}>();

const format = props.format ? props.format : 'small';
const color = props.color ? props.color : 'black';
const textColor = props.color === 'white' ? 'black' : '#FFFFFF'

const buttonsColor = {
    black: 'bg-primary2',
    white: 'bg-secondary2',
    blue: 'bg-primary1'
}

const buttonStyle = {
    small: {
        horizontalPadding: "px-12",
    },
    default: {
        horizontalPadding: "px-20",
    },
    largeSize: {
        horizontalPadding: "px-[60px]",
    },
};

</script>

<template>
    <button class="bg-primary2 text-[18px] font-semibold py-5 rounded-full"
        :class="buttonStyle[format].horizontalPadding, buttonsColor[color], `text-[${textColor}]`">
        {{ props.text }}
    </button>
</template>
