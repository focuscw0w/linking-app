<template>
  <div class="flex justify-between items-center bg-white rounded-xl p-3 mb-5">
    <a><img class="w-9/12" src="../assets/images/logo-devlinks-large.svg" alt="devlinks"></a>
    <div class="flex gap-8">
      <p @click="activeLink = 'Links'" class="active-link-default"
         :class="[activeLink === 'Links' ? 'font-emphasized bg-violet-200 rounded-md' : '']">
        <img src="../assets/icons/icon-link.svg" alt="Link icon">
        Links
      </p>
      <p @click="activeLink = 'Profile Details'" class="active-link-default whitespace-nowrap"
         :class="[activeLink === 'Profile Details' ? 'font-emphasized bg-violet-200 rounded-md' : '']">
        <img src="../assets/icons/icon-profile-details-header.svg" alt="My profile icon">
        Profile Details
      </p>
    </div>
    <button class="font-emphasized p-3 border border-violet-800 rounded-md px-6 py-2">Preview</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
let activeLink = ref('Links');
</script>