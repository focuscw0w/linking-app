<template>
  <div class="bg-gray-100 w-screen">
    <div class="container mx-auto py-4">
      <Navigation/>
      <keep-alive>
        <component :is="displayStore.components[displayStore.currentComponent]">
        </component>
      </keep-alive>
    </div>
  </div>
  <transition name="slide-fade">
    <Notification v-if="notificationStore.isActive"/>
  </transition>
</template>

<script setup>
import Navigation from "./components/Navigation/Navigation.vue";
import Notification from "./components/Notification.vue";
import {useToggleDisplayStore} from "./store/toggleDisplay.js";
import {useNotificationStore} from "./store/notification.js"

const displayStore = useToggleDisplayStore();
const notificationStore = useNotificationStore();
</script>
