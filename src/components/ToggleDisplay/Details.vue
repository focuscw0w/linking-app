<template>
  <div class="flex gap-5">
    <Preview class="basis-1/3"/>
    <div class="flex-grow flex justify-between flex-col bg-white pt-8 rounded-md gap-5">
      <div class="px-8">
        <h2 class="page-title mb-3">Profile Details</h2>
        <p class="page-description">Add your details to create a personal touch to your profile</p>
      </div>
      <Footer class="self-end"></Footer>
    </div>
  </div>
</template>

<script setup>
import Preview from "./Preview.vue";
import Footer from "./Footer.vue";
</script>
