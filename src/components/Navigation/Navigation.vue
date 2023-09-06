<template>
  <div class="flex justify-between items-center bg-white rounded-xl p-3">
    <a><img class="w-9/12" src="../../assets/images/logo-devlinks-large.svg" alt="devlinks"></a>
    <div class="flex gap-8">
      <p @click="activeLink = 'Links'" class="flex gap-2 py-2 px-4 cursor-pointer"
         :class="[activeLink === 'Links' ? 'text-violet-700 bg-violet-200 rounded-md font-bold' : '']">
        <img src="../../assets/icons/icon-link.svg" alt="Link icon">
        Links
      </p>
      <p @click="activeLink = 'Profile Details'" class="whitespace-nowrap flex gap-2 py-2 px-4 cursor-pointer"
         :class="[activeLink === 'Profile Details' ? 'text-violet-700 bg-violet-200 rounded-md font-bold' : '']">
        <img src="../../assets/icons/icon-profile-details-header.svg" alt="My profile icon">
        Profile Details
      </p>
    </div>
    <button>Preview</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

let activeLink = ref('Links');
</script>