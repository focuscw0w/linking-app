import {defineStore} from 'pinia';
import {ref} from "vue";

export const useNotificationStore = defineStore('notificationStore', () => {
    // STORE
    const isActive = ref(false);

    // ACTIONS
    const turnOnNotification = () => {
        isActive.value = true;
        setTimeout(() => isActive.value = false, 2500);
    }

    return {isActive, turnOnNotification}
})