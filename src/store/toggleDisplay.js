import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import Links from "../components/ToggleDisplay/Links/Links.vue";
import Details from "../components/ToggleDisplay/Details.vue";

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

  // ACTIONS
  const toggleDisplay = (componentName) => {
    currentComponent.value = componentName;
  };

  return { currentComponent, components, toggleDisplay, navigationItems };
});
