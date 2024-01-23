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
            v-if="activeHover"
            class="flex flex-col items-center absolute center-background-text"
          >
            <img
              class="w-10 upload-img"
              src="../../../assets/icons/icon-upload-image.svg"
              alt="upload image"
              style="fill: black;"
            />
            <p class="font-semibold whitespace-nowrap" :class="[imageSrc == null ? 'text-black' : 'text-white']">
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
import { useNotificationStore } from "../../../store/notification";
import { storeToRefs } from "pinia";
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
const saveAvatar = (file, res) => {
  imageSrc.value = URL.createObjectURL(file);
  turnOnNotification(true);
  console.log(res)
};

const handleFileChange = (event,) => {
  const file = event.target.files[0];
  const resolutionLimit = 1024;

  if (file) {
    checkImageResolution(file).then((resolution) => {
      resolution.width && resolution.height <= resolutionLimit
        ? saveAvatar(file, resolution)
        : turnOnNotification(false);
    });
  }
};
</script>
