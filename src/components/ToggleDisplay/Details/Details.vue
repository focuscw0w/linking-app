<template>
  <div class="flex gap-5">
    <div
      class="flex-grow flex justify-between flex-col bg-white pt-8 pb-6 gap-5"
    >
      <div class="px-8">
        <h2 class="page-title mb-3">Profile Details</h2>
        <p class="page-description">
          Add your details to create a personal touch to your profile
        </p>
        <Avatar />
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "./Form.vue";
import Avatar from "./Avatar.vue";
</script>
