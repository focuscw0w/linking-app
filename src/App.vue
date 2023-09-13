<template>
  <div class="bg-gray-100 w-screen h-screen">
    <div class="container mx-auto pt-4">
      <Navigation />
      <div class="flex gap-5">
        <Preview class="basis-1/3" />
        <Customizer class="flex-grow" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Preview from "./components/Preview.vue";
import Customizer from "./components/NavigationDisplay.vue";

</script>
