import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useNotificationStore } from "./notification";

export const useUserDetailsStore = defineStore("userDetailsStore", () => {
  // STORE
  const firstName = ref("Shane");
  const lastName = ref("Hunt")
  const email = ref("shanehunt@gmail.com");

  // ACTIONS

  return { firstName, lastName, email };
});
