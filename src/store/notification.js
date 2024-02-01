import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationStore = defineStore("notificationStore", () => {
  // STORE
  const isActive = ref(false);
  const success = ref(true);
  const content = ref({});

  const iconXmlns = "http://www.w3.org/2000/svg";
  const iconFill = "none";
  const iconClass = "w-6 h-6";
  const iconStroke = success ? "#008000" : "#FF0000";
  const notificationMessage = success
    ? "Successfully saved!"
    : "Something went wrong!";
  const notificationDescription = success
    ? "Everyone can see your new link."
    : "Resolution is higher than 1024x1024.";

  // ACTIONS
  const turnOnNotification = (bool, message) => {
    isActive.value = true;
    success.value = bool
    console.log(content)
    content.value = message;
    setTimeout(() => (isActive.value = false), 2500);
  };

  return {
    isActive,
    success,
    content,
    turnOnNotification,
    iconXmlns,
    iconFill,
    iconClass,
    iconStroke,
    notificationMessage,
    notificationDescription,
  };
});
