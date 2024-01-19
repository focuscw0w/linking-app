import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import Links from "../components/ToggleDisplay/Links/Links.vue";
import Details from "../components/ToggleDisplay/Details/Details.vue";

<<<<<<< HEAD
export const useToggleDisplayStore = defineStore("toggleDisplay", () => {
  // STORE
  const components = shallowRef({ Links, Details });
  const currentComponent = ref("Links");
  const navigationItems = [
    {
      id: 0,
      name: "Links",
    },
    {
      id: 1,
      name: "Details",
    },
  ];
=======
export const useToggleDisplayStore = defineStore('toggleDisplayStore', () => {
    // STORE
    const components = shallowRef({Links, Details});
    const currentComponent = ref("Links");
    const navigationItems = [
        {
            id: 0,
            name: "Links",
        },
        {
            id: 1,
            name: "Details",
        }
    ];
>>>>>>> abce69e20f918087013a4ddf370dda43ad5afda6

  // ACTIONS
  const toggleDisplay = (componentName) => {
    currentComponent.value = componentName;
  };

  return { currentComponent, components, toggleDisplay, navigationItems };
});
