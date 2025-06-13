import { atom, selector } from "recoil";

export const isDarkMode = atom({
  key: "isDarkMode",
  default: true,
});

export const selectedGenres = atom({
  key: "selectedGenres",
  default: null,
});
