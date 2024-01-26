<template>
  <div class="bg-gray-100 p-4 mt-8 mb-8 flex items-center justify-between">
    <p class="page-description">Profile picture</p>
    <div class="flex items-center gap-6">
      <label for="fileInput" class="cursor-pointer">
        <div class="w-40 h-40 relative hover:brightness-90 bg-violet-200 rounded-2xl">
          <img
            @mouseenter="activeHover = true"
            @mouseleave="activeHover = false"
            class="object-cover inline-block rounded-2xl"
            :src="imageSrc"
          />
          <input
            id="fileInput"
            ref="fileInput"
            type="file"
            style="display: none"
            @change="handleFileChange"
          />
          <div
            v-if="activeHover || imageSrc == null"
            class="flex flex-col items-center absolute center-background-text"
          >
            <img
              class="w-10 upload-img"
              :class="[imageSrc == null ? '' : 'filter-white']"
              src="../../../assets/icons/icon-upload-image.svg"
              alt="upload image"
            />
            <p
              class="font-emphasized whitespace-nowrap"
              :class="[imageSrc == null ? 'text-violet-700' : 'text-white']"
            >
              Change image
            </p>
          </div>
        </div>
      </label>
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
import { useNotificationStore } from "../../../store/notification";
const notificationStore = useNotificationStore();
const activeHover = ref(false);

const checkImageResolution = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();

      img.onload = function () {
        const resolution = {
          width: img.width,
          height: img.height,
        };
        resolve(resolution);
      };

      img.onerror = function (error) {
        reject(error);
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
};

const { turnOnNotification } = notificationStore;

let imageSrc = ref(null);
const saveAvatar = (file) => {
  imageSrc.value = URL.createObjectURL(file);
  turnOnNotification(true);
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const resolutionLimit = 1024;

  if (file) {
    checkImageResolution(file).then((resolution) => {
      resolution.width && resolution.height <= resolutionLimit
        ? saveAvatar(file)
        : turnOnNotification(false);
    });
  }
};
</script>