<template>
  <div class="flex gap-5">
    <Preview class="basis-1/3" />
    <div
      class="flex-grow flex justify-between flex-col bg-white pt-8 rounded-md gap-5"
    >
      <div class="px-8">
        <h2 class="page-title mb-3">Customize your links</h2>
        <p class="page-description">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button class="button-bordered mt-8 mb-3 w-full">+ Add new link</button>
        <div class="flex flex-col gap-1 mt-3">
          <Link
            v-for="Link in userLinksStore.userLinks"
            :key="Link.id"
            :id="Link.id"
          />
        </div>
      </div>
      <Footer class="self-end"></Footer>
    </div>
  </div>
</template>

<script setup>
import Preview from "../Preview.vue";
import Footer from "../Footer.vue";
import Link from "../Links/Link.vue";
import { useUserLinksStore } from "../../../store/userLinks.js";
const userLinksStore = useUserLinksStore();
</script>
