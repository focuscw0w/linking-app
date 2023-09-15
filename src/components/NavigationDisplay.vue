<template>
  <div class="flex justify-between flex-col bg-white py-8">
    <keep-alive>
      <component class="px-6" :is="displayStore.components[displayStore.currentComponent]">
        <template>test</template>
      </component>
    </keep-alive>
    <SaveProgress class="self-end"/>
  </div>
</template>

<script setup>
import SaveProgress from "./ToggleDisplay/SaveProgress.vue";
import {useToggleDisplayStore} from "../store/toggleDisplay.js";

const displayStore = useToggleDisplayStore();
</script>