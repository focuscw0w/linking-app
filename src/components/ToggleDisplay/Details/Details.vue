<template>
  <div class="flex gap-5">
    <div
      class="flex-grow flex justify-between flex-col bg-white pt-8 pb-6 rounded-md gap-5"
    >
      <div class="px-8">
        <h2 class="page-title mb-3">Profile Details</h2>
        <p class="page-description">
          Add your details to create a personal touch to your profile
        </p>
        <ProfileEdit />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileEdit from "./ProfileEdit.vue";
</script>
