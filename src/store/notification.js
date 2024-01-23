import {defineStore} from 'pinia';
import {ref} from "vue";

export const useNotificationStore = defineStore('notificationStore', () => {
    // STORE
    const isActive = ref(false);
    const success = ref(true);

    // ACTIONS
    const turnOnNotification = (bool) => {
        isActive.value = true;
        success.value = bool;
        setTimeout(() => isActive.value = false, 2500);
    }

    return {isActive, success, turnOnNotification}
})