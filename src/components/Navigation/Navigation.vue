<template>
  <div class="flex justify-between items-center bg-white rounded-xl p-3 mb-5">
    <a><img class="w-9/12" src="../../assets/images/logo-devlinks-large.svg" alt="devlinks"></a>
    <div class="flex gap-8">
      <LinksItem v-for="link in Links" :key="link.id" @click="toggleActiveLink(link.name)" :linkName="link.name"
                 :linkImage="link.image"/>
    </div>
    <button
        class="font-emphasized p-3 border border-violet-600 hover:bg-violet-600 hover:text-white ease-in-out duration-150 rounded-md px-6 py-2">
      Preview
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useToggleDisplayStore} from "../../store/toggleDisplay.js";
import LinksItem from "./LinksItem.vue";

let currentComponent = ref('Links');
const displayStore = useToggleDisplayStore();

const toggleActiveLink = (componentName) => {
  currentComponent.value = componentName;
  displayStore.toggleDisplay(componentName);
};

const Links = [
  {
    id: 0,
    name: 'Links',
    image: require('/src/assets/icons/icon-link.svg')
  },
  {
    id: 1,
    name: 'Details',
    image: require('/src/assets/icons/icon-profile-details-header.svg')
  }
];

</script>