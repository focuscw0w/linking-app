<template>
  <div class="flex justify-between items-center bg-white rounded-xl p-3 mb-5">
    <a
      ><img
        class="w-9/12 hidden sm:block"
        src="../../assets/images/logo-devlinks-large.svg"
        alt="devlinks"
      />
      <img
        class="w-9/12 block sm:hidden"
        src="../../assets/images/logo-devlinks-small.svg"
        alt="devlinks"
      />
    </a>
    <div class="flex md:gap-8">
      <NavigationItem
        v-for="item in currentViewStore.navigationItems"
        :key="item.id"
        @click="currentViewStore.toggleDisplay(item.name)"
        :name="item.name"
      />
    </div>
    <button class="button-bordered px-6 py-2">
      <img
        class="block sm:hidden"
        src="../../assets/icons/eye-regular.svg"
        alt="preview"
      />
      <p class="hidden sm:block">Preview</p>
    </button>
  </div>
</template>

<script setup>
import { useCurrentViewStore } from "../../store/currentView.js";
import NavigationItem from "./NavigationItem.vue";

const currentViewStore = useCurrentViewStore();
</script>
