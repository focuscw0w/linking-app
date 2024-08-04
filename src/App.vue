<template>
  <div class="bg-gray-100">
    <div class="md:container mx-4 md:mx-auto py-4 min-h-screen">
      <Navigation />
      <div class="flex md:flex-row flex-col gap-6">
        <Preview class="basis-1/3 md:flex hidden" />
        <div class="grow">
          <keep-alive>
            <component
              :is="currentViewStore.components[currentViewStore.currentComponent]"
            />
          </keep-alive>
          <Footer class="self-end" />
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-fade">
    <Notification v-if="notificationStore.isActive" />
  </transition>
</template>

<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import Preview from "./components/ToggleDisplay/Preview/Preview.vue";
import Footer from "./components/ToggleDisplay/Footer.vue";
import Notification from "./components/Notification/Notification.vue";
import { useCurrentViewStore } from "./store/currentView.js";
import { useNotificationStore } from "./store/notification.js";

const currentViewStore = useCurrentViewStore();
const notificationStore = useNotificationStore();
</script>
