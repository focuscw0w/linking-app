<template>
  <NotificationContent>
    <template #icon>
      <svg
        :xmlns="iconConfig.xmlns"
        :fill="iconConfig.fill"
        viewBox="0 0 24 24"
        :class="iconConfig.class"
      >
        <path
          :stroke="iconConfig.stroke"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="success"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <g v-else>
          <path
            stroke="#FF0000"
            stroke-width="1.5"
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          />
          <path
            stroke="#FF0000"
            stroke-width="1.5"
            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </template>
    <template #message-content>
      <div>
        <p>{{ notificationMessage }}</p>
        <p class="page-description">{{ notificationDescription }}</p>
      </div>
    </template>
  </NotificationContent>
</template>

<script setup>
import { useNotificationStore } from "../../store/notification";
import NotificationContent from "./NotificationTemplate.vue";

const notificationStore = useNotificationStore();

const {
  success,
  content,
  iconConfig,
  notificationMessage,
  notificationDescription,
} = notificationStore;
</script>
