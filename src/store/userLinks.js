import {defineStore} from 'pinia';
import {ref} from "vue";

export const useUserLinksStore = defineStore('userLinkStore', () => {
    // STORE
    const userLinks = ref([
        {
            id: 0,
            order: 1,
            platform: "GitHub",
            link: "https://www.github.com"
        },
        {
            id: 1,
            order: 2,
            platform: "YouTube",
            link: "https://www.youtube.com"
        },
    ]);

    // ACTIONS
    const removeUserLink = (id) => {
        userLinks.value = userLinks.value.filter(userLink => userLink.id !== id);
    }

    const selectMenuItem = (item, id) => {
        userLinks.value[id].platform = item.text;
    }

    return {userLinks, removeUserLink, selectMenuItem}
})