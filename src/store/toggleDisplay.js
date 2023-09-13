import {defineStore} from 'pinia'
import {ref, shallowRef} from "vue";
import Links from "../components/ToggleDisplay/Links.vue";
import Details from "../components/ToggleDisplay/Details.vue";

export const useToggleDisplayStore = defineStore('toggleDisplay', () => {
    // STORE
    const components = shallowRef({Links, Details});
    const currentComponent = ref('Links');

    // ACTION
    const toggleDisplay = (componentName) => {
        currentComponent.value = componentName;
    };

    return {currentComponent, components, toggleDisplay}
})