<template>
  <div class="py-3 px-4 mb-2 bg-gray-100">
    <div class="flex justify-between items-center">
      <div class="flex gap-2">
        <img src="@/assets/icons/icon-drag-and-drop.svg" alt="drag and drop">
        <p class="text-sm">Link #{{ props.order }}</p>
      </div>
      <p class="page-description cursor-pointer hover:text-gray-400" @click="userLinksStore.removeUserLink(props.id)">Remove</p>
    </div>
    <DropDown :placeholder="props.placeholder" :id="props.id" />
  </div>
</template>

<script setup>
import {useUserLinksStore} from "../../../store/userLinks.js";
import DropDown from "./DropDown.vue";

const props = defineProps(["order", "id", "placeholder",]);
const userLinksStore = useUserLinksStore();
</script>
