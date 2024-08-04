import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useNotificationStore = defineStore("notificationStore", () => {
  // STORE
  const isActive = ref(false);
  const success = ref(true);
  const content = ref({});

  const iconConfig = computed(() => ({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    class: "w-6 h-6",
    stroke: success.value ? "#008000" : "#FF0000",
  }));

  const notificationMessage = computed(() =>
    success.value ? "Successfully saved!" : "Something went wrong!"
  );

  const notificationDescription = computed(() =>
    success.value
      ? "Everyone can see your new link."
      : "Resolution is higher than 1024x1024."
  );

  // ACTIONS
  const turnOnNotification = (bool, message) => {
    isActive.value = true;
    success.value = bool;
    content.value = message;
    setTimeout(() => (isActive.value = false), 2500);
  };

  return {
    isActive,
    success,
    content,
    turnOnNotification,
    iconConfig,
    notificationMessage,
    notificationDescription,
  };
});
