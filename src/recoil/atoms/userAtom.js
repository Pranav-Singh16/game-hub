import { atom, selector } from "recoil";

export const isDarkMode = atom({
  key: "isDarkMode",
  default: true,
});

export const gameQuerys = atom({
  key: "gameQuerys",
  default: {},
});
