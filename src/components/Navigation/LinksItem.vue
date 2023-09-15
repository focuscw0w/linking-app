<template>
  <a class="active-link-default"
     :class="[displayStore.currentComponent === props.linkName ? 'font-emphasized bg-violet-200 rounded-md' : '']">
    <img :src="`/src/assets/icons/${props.image}`" alt="Link icon">
    {{props.linkName === "Links" ? "Links" : "Profile Details"}}
  </a>
</template>

<script setup>
import {useToggleDisplayStore} from "../../store/toggleDisplay.js";

const props = defineProps(['linkName', 'image'])
const displayStore = useToggleDisplayStore();
</script>