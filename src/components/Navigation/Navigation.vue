<template>
  <div class="flex justify-between items-center bg-white rounded-xl p-3 mb-5">
    <a
      ><img
        class="w-9/12"
        src="../../assets/images/logo-devlinks-large.svg"
        alt="devlinks"
    /></a>
    <div class="flex gap-8">
      <LinksItem
        v-for="item in displayStore.navigationItems"
        :key="item.id"
        @click="displayStore.toggleDisplay(item.name)"
        :name="item.name"
      />
    </div>
    <button class="button-bordered px-6 py-2">Preview</button>
  </div>
</template>

<script setup>
import { useToggleDisplayStore } from "../../store/toggleDisplay.js";
import LinksItem from "./NavigationItem.vue";

const displayStore = useToggleDisplayStore();
</script>
