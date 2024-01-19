<<<<<<< HEAD
import { defineStore } from "pinia";
import { ref } from "vue";
=======
import {defineStore} from 'pinia';
import {ref} from "vue";
import { useNotificationStore } from './notification';
>>>>>>> abce69e20f918087013a4ddf370dda43ad5afda6

export const useUserLinksStore = defineStore("userLinkStore", () => {
  // STORE
  const userLinks = ref([
    {
      id: 0,
      order: 1,
      platform: "GitHub",
      placeholder: ref("https://www.github.com"),
      link: ref(""),
    },
    {
      id: 1,
      order: 2,
      platform: "YouTube",
      placeholder: ref("https://www.youtube.com"),
      link: ref(""),
    },
  ]);

  // ACTIONS
  const removeUserLink = (id) => {
    userLinks.value = userLinks.value.filter((userLink) => userLink.id !== id);
  };

<<<<<<< HEAD
  const selectMenuItem = (item, id) => {
    userLinks.value[id].platform = item.text;
  };

  const saveNewLink = () => {
    userLinks.value.forEach((userLink) => {
      userLink.placeholder = userLink.link;
    });
  };
=======
    const selectMenuItem = (item, id) => {
        userLinks.value[id].platform = item.platform;
        userLinks.value[id].placeholder = item.placeholder;
    }

    const notificationStore = useNotificationStore();
    const saveNewLink = () => {
        userLinks.value.forEach(userLink => {
           userLink.placeholder = userLink.placeholder
        })
        notificationStore.turnOnNotification();
    }
>>>>>>> abce69e20f918087013a4ddf370dda43ad5afda6

  return { userLinks, removeUserLink, selectMenuItem, saveNewLink };
});
