<template>
  <a class="active-link-default"
     :class="className">
    <img :src="`/src/assets/icons/${iconName}`" alt="Link icon">
    {{navigationLinkName}}
  </a>
</template>

<script setup>
import {useToggleDisplayStore} from "../../store/toggleDisplay.js";
import {computed} from "vue";

const props = defineProps(["name"]);
const displayStore = useToggleDisplayStore();

const iconName = computed(() => {
  return props.name === "Links" ? "icon-link.svg" : "icon-profile-details-header.svg";
});

const navigationLinkName = computed(() => {
  return props.name === "Links" ? "Links" : "Profile Details";
});

const className = computed(() => {
  return displayStore.currentComponent === props.name ? 'font-emphasized bg-violet-200 rounded-md' : '';
});
</script>