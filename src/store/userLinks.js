import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useNotificationStore } from "./notification";

export const useUserLinksStore = defineStore("userLinkStore", () => {
  // STORE
  const userLinks = ref([
    {
      id: 0,
      order: 1,
      platform: "GitHub",
      placeholder: "https://www.github.com",
    },
    {
      id: 1,
      order: 2,
      platform: "YouTube",
      placeholder: "https://www.youtube.com",
    },
  ]);

  const MaxTwoItems = computed(() => {
    return userLinks.value.length <= 2;
  });

  // ACTIONS
  const addNewLink = () => {
    userLinks.value.push({
      id: Math.max(...userLinks.value.map((link) => link.id)) + 1,
      order: Math.max(...userLinks.value.map((link) => link.order)) + 1,
      platform: "Twitter",
      placeholder: "https://twitter.com/",
    });
  };

  const removeUserLink = (id) => {
    userLinks.value = userLinks.value.filter((userLink) => userLink.id !== id);
  };

  const selectMenuItem = (item, id) => {
    const matchedUserLink = userLinks.value.find(userLink => userLink.id === id);
    matchedUserLink.platform = item.platform;
    matchedUserLink.placeholder = item.placeholder;
  };

  const notificationStore = useNotificationStore();
  const saveNewLink = (message) => {
    /*
    userLinks.value.forEach((userLink) => {
      userLink.placeholder = userLink.placeholder;
    });
    */
    notificationStore.turnOnNotification(true, message);
  };

  const saveDetails = (message) => {
    // API
    notificationStore.turnOnNotification(true, message);
  }

  return {
    userLinks,
    MaxTwoItems,
    removeUserLink,
    selectMenuItem,
    saveNewLink,
    saveDetails,
    addNewLink,
  };
});
