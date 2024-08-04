<template>
  <div class="bg-white flex items-center justify-center p-10 rounded-md">
      <img class="w-60" src="../../../assets/images/illustration-phone-mockup.svg" alt="Links preview">
      <!-- <Badge v-for="link in userLinksStore.userLinks" :key="link.id" :content="link" /> -->
  </div>
</template>

<script setup>
import { useUserLinksStore } from '../../../store/userLinks';
import Badge from "./Badge.vue"
const userLinksStore = useUserLinksStore();
</script>
