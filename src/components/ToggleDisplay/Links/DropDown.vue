<template>
  <Menu as="div" class="relative inline-block text-left w-full mt-3">
    <div>
      <label class="text-xs">Platform</label>
      <MenuButton
        class="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 mt-1 text-sm font-semi-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <div class="flex gap-2">
          <img :src="getIconSrc(props.platform)" alt="platform icon" />
          {{ props.platform }}
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
              <img :src="getIconSrc(item.platform)" alt="icon of link" />
              {{ item.platform }}
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
import { useDropdownStore } from "../../../store/dropdown.js";
const userLinksStore = useUserLinksStore();
const dropdownStore = useDropdownStore();
const props = defineProps(["platform", "id"]);
const { menuItems, getIconSrc } = dropdownStore;
</script>
