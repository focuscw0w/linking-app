<template>
  <div class="bg-gray-100 w-screen h-screen">
    <div class="container mx-auto py-4">
      <Navigation />
      <div class="flex gap-6">
        <Preview class="basis-1/3" />
        <div class="grow">
          <keep-alive>
            <component
              :is="displayStore.components[displayStore.currentComponent]"
            />
          </keep-alive>
          <Footer class="self-end" />
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-fade">
    <Notification v-if="notificationStore.isActive">
      <template #icon>
        <NotificationIcon />
      </template>
      <template #message-content>
        <p>Successfully saved!</p>
        <p class="page-description">Everyone can see your new link.</p>
      </template>
    </Notification>
  </transition>
</template>

<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import Preview from "./components/ToggleDisplay/Preview/Preview.vue";
import Footer from "./components/ToggleDisplay/Footer.vue";
import Notification from "./components/Notification.vue";
import NotificationIcon from "./components/NotificationIcon.vue";
import { useToggleDisplayStore } from "./store/toggleDisplay.js";
import { useNotificationStore } from "./store/notification.js";

const displayStore = useToggleDisplayStore();
const notificationStore = useNotificationStore();
</script>
