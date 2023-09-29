<template>
  <div class="bg-gray-100 w-screen">
    <div class="container mx-auto py-4">
      <Navigation/>
      <keep-alive>
        <component :is="displayStore.components[displayStore.currentComponent]">
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import {useToggleDisplayStore} from "./store/toggleDisplay.js";

const displayStore = useToggleDisplayStore();
</script>
