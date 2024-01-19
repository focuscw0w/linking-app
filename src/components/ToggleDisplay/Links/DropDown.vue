<template>
  <Menu as="div" class="relative inline-block text-left w-full mt-3">
    <div>
      <label class="text-xs">Platform</label>
      <MenuButton
        class="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 mt-1 text-sm font-semi-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <div class="flex gap-2">
          <img :src="getIconSrc(props.placeholder)" alt="platform icon" />
          {{ props.placeholder }}
        </div>
        <ChevronDownIcon
          class="-mr-1 h-5 w-5 text-violet-600"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            v-slot="{ active }"
          >
            <a
              class="flex gap-2 items-center"
              href="#"
              @click="userLinksStore.selectMenuItem(item, props.id)"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
            >
              <img :src="getIconSrc(item.text)" alt="icon of link" />
              {{ item.text }}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid/index.js";
import { useUserLinksStore } from "../../../store/userLinks.js";

import githubIcon from "../../../assets/icons/icon-github.svg";
import gitlabIcon from "../../../assets/icons/icon-gitlab.svg";
import linkedinIcon from "../../../assets/icons/icon-linkedin.svg";
import twitchIcon from "../../../assets/icons/icon-twitch.svg";
import twitterIcon from "../../../assets/icons/icon-twitter.svg";
import youtubeIcon from "../../../assets/icons/icon-youtube.svg";

const props = defineProps(["placeholder", "id"]);
const userLinksStore = useUserLinksStore();

const menuItems = [
  { text: "GitHub" },
  { text: "Gitlab" },
  { text: "Linkedin" },
  { text: "YouTube" },
  { text: "Twitch" },
  { text: "Twitter" },
];

const getIconSrc = (itemName) => {
  const icons = [
    { name: "GitHub", icon: githubIcon },
    { name: "Gitlab", icon: gitlabIcon },
    { name: "Linkedin", icon: linkedinIcon },
    { name: "Twitch", icon: twitchIcon },
    { name: "Twitter", icon: twitterIcon },
    { name: "YouTube", icon: youtubeIcon },
  ];

  return icons.find((obj) => obj.name === itemName).icon;
};
</script>
