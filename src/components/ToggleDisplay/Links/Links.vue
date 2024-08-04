<template>
  <div class="flex gap-5">
    <div
      class="flex-grow flex justify-between flex-col bg-white pt-8 pb-6 rounded-md gap-5"
    >
      <div class="px-8 md:h-fit">
        <h2 class="page-title mb-3">Customize your links</h2>
        <p class="page-description">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          @click="userLinksStore.addNewLink"
          class="button-bordered mt-8 mb-3 w-full"
        >
          + Add new link
        </button>
        <div
          class="flex flex-col gap-1 mt-3 scrollable-content"
          :class="[MaxTwoItems ? '' : 'overflow-scroll']"
        >
          <Link
            v-for="Link in userLinksStore.userLinks"
            :key="Link.id"
            :id="Link.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from "../Links/Link.vue";
import { storeToRefs } from "pinia";

import { useUserLinksStore } from "../../../store/userLinks.js";
const userLinksStore = useUserLinksStore();

const { MaxTwoItems } = storeToRefs(userLinksStore);
</script>
