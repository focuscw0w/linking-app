import {defineStore} from 'pinia';
import {ref} from "vue";

import githubIcon from "../assets/icons/icon-github.svg";
import gitlabIcon from "../assets/icons/icon-gitlab.svg";
import linkedinIcon from "../assets/icons/icon-linkedin.svg";
import twitchIcon from "../assets/icons/icon-twitch.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import youtubeIcon from "../assets/icons/icon-youtube.svg";

export const useDropdownStore = defineStore('dropdownStore', () => {
    // STORE
    const menuItems = [
        { platform: "GitHub", placeholder: "https://github.com/" },
        { platform: "Gitlab", placeholder: "https://about.gitlab.com/" },
        { platform: "Linkedin", placeholder: "https://www.linkedin.com/" },
        { platform: "YouTube", placeholder: "https://www.youtube.com/" },
        { platform: "Twitch", placeholder: "https://www.twitch.tv/" },
        { platform: "Twitter", placeholder: "https://twitter.com/" },
      ];

      const icons = [
        { name: "GitHub", icon: githubIcon },
        { name: "Gitlab", icon: gitlabIcon },
        { name: "Linkedin", icon: linkedinIcon },
        { name: "Twitch", icon: twitchIcon },
        { name: "Twitter", icon: twitterIcon },
        { name: "YouTube", icon: youtubeIcon },
      ];

    // ACTIONS

    const getIconSrc = (itemName) => {
        return icons.find((icon) => icon.name === itemName).icon;
      };

    return { menuItems, getIconSrc }
})