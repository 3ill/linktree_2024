import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX
} from "@tabler/icons-react";

export const SocialLinks = [
  {
    id: 1,
    name: "Github",
    link: "",
    image: React.createElement(IconBrandGithub, {className: 'text-white'}),
  },
  {
    id: 2,
    name: "Linkedin",
    link: "",
    image: React.createElement(IconBrandLinkedin, {className: 'text-white'}),
  },
  {
    id: 3,
    name: "X",
    link: "",
    image: React.createElement(IconBrandX, {className: 'text-white'}),
  },
  {
    id: 4,
    name: "Instagram",
    link: "",
    image: React.createElement(IconBrandInstagram, {className: 'text-white'}),
  },
  {
    id: 5,
    name: "Telegram",
    link: "",
    image: React.createElement(IconBrandTelegram, {className: 'text-white'}),
  }
] as const;