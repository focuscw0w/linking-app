<template>
  <div class="py-4 px-4 mb-2 bg-gray-100">
    <div class="flex justify-between items-center">
      <div class="flex gap-2">
        <img src="@/assets/icons/icon-drag-and-drop.svg" alt="drag and drop">
        <p class="text-sm">Link #{{ linkItem.order }}</p>
      </div>
      <p class="page-description cursor-pointer hover:text-gray-400" @click="userLinksStore.removeUserLink(props.id)">
        Remove</p>
    </div>
    <div class="flex flex-col gap-1">
      <DropDown :placeholder="linkItem.platform" :id="props.id"/>
      <div>
        <label class="text-xs">Link</label>
        <input
            class="link-input w-full rounded-md bg-white px-8 py-2 text-sm font-semi-bold placeholder-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            :placeholder="linkItem.placeholder"
            v-model="linkItem.placeholder"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserLinksStore} from "../../../store/userLinks.js";
import DropDown from "./DropDown.vue"
import {computed} from "vue";

const props = defineProps(["id"]);
const userLinksStore = useUserLinksStore();
const linkItem = computed(() => {
  return userLinksStore.userLinks.find(link => link.id === props.id);
})


</script>
