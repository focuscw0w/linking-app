<template>
  <div
    class="w-full flex align-bottom justify-end border-t-4 border-t-gray-100 bg-white px-8 py-4 mt-1"
  >
    <button
      class="w-full sm:w-auto py-2 px-6 ease-in duration-150 border bg-violet-600 hover:bg-violet-400 text-sm text-white rounded-md"
      @click="handleSubmit()"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { useUserLinksStore } from "../../store/userLinks.js";
import { useUserDetailsStore } from "../../store/userDetails";
import { useCurrentViewStore } from "../../store/currentView";
import { useNotificationStore } from "../../store/notification";
import { storeToRefs } from "pinia";

const userLinksStore = useUserLinksStore();
const currentViewStore = useCurrentViewStore();
const { firstName, lastName, email } = storeToRefs(useUserDetailsStore());
const { turnOnNotification } = useNotificationStore();

const successDetails = {
  message: "Successfully saved!",
  description: "Your profile has been updated.",
};
const failureDetails = {
  message: "Failure!",
  description: "Your email or name is not valid.",
};
const successLinks = {
  message: "Successfully saved!",
  description: "Everyone can see your new link.",
};
const failureLinks = {
  message: "Something went wrong!",
  description: "Url is not valid.",
};

const validateDetails = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    firstName.value !== "" && lastName.value !== "" && regex.test(email.value)
  );
};

const validateLinks = (urls) => {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urls.every((url) => regex.test(url));
};

const submitLinks = () => {
  const store = storeToRefs(userLinksStore);
  const userUrls = store.userLinks.value.map(
    (link) => link.placeholder
  );
  validateLinks(userUrls)
    ? userLinksStore.saveNewLink(successLinks)
    : turnOnNotification(false, failureLinks);
};

const submitDetails = () => {
  validateDetails()
    ? turnOnNotification(true, successDetails)
    : turnOnNotification(false, failureDetails);
};

const handleSubmit = () => {
  currentViewStore.currentComponent === "Links"
    ? submitLinks()
    : submitDetails();
};
</script>
