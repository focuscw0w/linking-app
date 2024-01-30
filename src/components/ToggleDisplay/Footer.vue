<template>
  <div
    class="w-full flex align-bottom justify-end border-t-4 border-t-gray-100 bg-white px-8 py-4 mt-1"
  >
    <button
      class="py-2 px-6 ease-in duration-150 border bg-violet-600 hover:bg-violet-400 text-sm text-white rounded-md"
      @click="handleSubmit()"
    >
      Save
      {{ firstName }}
    </button>
  </div>
</template>

<script setup>
import { useUserLinksStore } from "../../store/userLinks.js";
import { useUserDetailsStore } from "../../store/userDetails";
import { useCurrentViewStore } from "../../store/currentView";
import { storeToRefs } from "pinia";
const userLinksStore = useUserLinksStore();
const currentViewStore = useCurrentViewStore();
const { firstName, lastName, email } = storeToRefs(useUserDetailsStore());

const validate = (firstName = null, lastName = null, email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (firstName.value === "" || lastName.value === "" || email.value === "") return false;
  if (!regex.test(email.value)) return false;

  return true;
};

const submitLinks = () => {
  console.log("links");
  userLinksStore.saveNewLink();
};

const submitDetails = () => {
  validate(firstName, lastName, email) === true
    ? userLinksStore.saveNewLink()
    : console.log("bad");
};

const handleSubmit = () => {
  currentViewStore.currentComponent === "Links"
    ? submitLinks()
    : submitDetails();
};
</script>
