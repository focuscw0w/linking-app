import { defineStore } from "pinia";
import { ref } from "vue";

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

  const selectMenuItem = (item, id) => {
    userLinks.value[id].platform = item.text;
  };

  const saveNewLink = () => {
    userLinks.value.forEach((userLink) => {
      userLink.placeholder = userLink.link;
    });
  };

  return { userLinks, removeUserLink, selectMenuItem, saveNewLink };
});
