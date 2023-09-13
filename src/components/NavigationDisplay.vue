<template>
  <div class="flex justify-between flex-col bg-white py-8">
    <keep-alive>
      <component class="px-6" :is="displayStore.components[displayStore.currentComponent]"></component>
    </keep-alive>
    <SaveProgress class="self-end"/>
  </div>
</template>

<script setup>
import SaveProgress from "./SaveProgress.vue";
import {useToggleDisplayStore} from "../store/toggleDisplay.js";

const displayStore = useToggleDisplayStore();
</script>