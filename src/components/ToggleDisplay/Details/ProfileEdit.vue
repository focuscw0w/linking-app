<template>
  <div class="bg-gray-100 p-4 mt-8 flex items-center justify-between">
    <p class="page-description">Profile picture</p>
    <div class="flex items-center gap-6">
      <div class="relative">
        <label for="fileInput" class="cursor-pointer">
          <img
            @mouseenter="activeHover = true"
            @mouseleave="activeHover = false"
            class="w-40 h-40 object-cover rounded-2xl hover:brightness-50"
            src="../../../assets/images/avatar.jpg"
            alt="profile picture"
          />
          <input
            id="fileInput"
            ref="fileInput"
            type="file"
            style="display: none"
            @change="handleFileChange"
          />
          <div
            v-if="activeHover"
            class="flex flex-col items-center absolute center-background-text"
          >
            <img
              class="w-10 upload-img"
              src="../../../assets/icons/icon-upload-image.svg"
              alt="upload image"
            />
            <p class="text-white font-semibold whitespace-nowrap">
              Change image
            </p>
          </div>
        </label>
      </div>
      <div class="flex flex-col">
        <p class="page-description break-all">
          Image must be below 1024x1024px.
        </p>
        <p class="page-description">Use PNG, JPG, or BMP format.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeHover = ref(false);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  console.log(file);
};
</script>
