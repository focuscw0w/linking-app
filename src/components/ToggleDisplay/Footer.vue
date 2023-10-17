<template>
  <div class="w-full flex align-bottom justify-end border-t-4 border-t-gray-100 px-8 py-4 mt-1">
    <button
        class="py-2 px-6 ease-in duration-150 border bg-violet-600 hover:bg-violet-400 text-sm text-white rounded-md"
      @click="userLinksStore.saveNewLink()">
      Save
    </button>
  </div>
</template>

<script setup>
import {useUserLinksStore} from "../../store/userLinks.js";
const userLinksStore = useUserLinksStore();
</script>
