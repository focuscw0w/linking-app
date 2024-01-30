<template>
  <a class="active-link-default" :class="className">
    <img :src="`/src/assets/icons/${iconName}`" alt="Link icon" />
    {{ navigationLinkName }}
  </a>
</template>

<script setup>
import { useCurrentViewStore } from "../../store/currentView.js";
import { computed } from "vue";

const props = defineProps(["name"]);
const currentViewStore = useCurrentViewStore();

const iconName = computed(() => {
  return props.name === "Links"
    ? "icon-link.svg"
    : "icon-profile-details-header.svg";
});

const navigationLinkName = computed(() => {
  return props.name === "Links" ? "Links" : "Profile Details";
});

const className = computed(() => {
  return currentViewStore.currentComponent === props.name
    ? "font-emphasized bg-violet-200 rounded-md"
    : "";
});
</script>
