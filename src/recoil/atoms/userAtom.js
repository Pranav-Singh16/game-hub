import { atom, selector } from "recoil";
import axios from "axios";

export const newAtom = atom({
  key: "newAtom",
  default: 0,
});

export const isDarkMode = atom({
  key: "isDarkMode",
  default: false,
});

// Selector for async data
export const newWorkSelector = selector({
  key: "newWorkSelector",
  get: async () => {
    const res = await axios.get("https://xyz.com");
    return res.data;
  },
});

// export const newWorkAtom = atom({
//   key: "newWorkAtom",
//   default: selector({
//     key: "newWorkAtomSelector",
//     get: async () => {
//       const res = await axios.get("https://xyz.com");
//       return res.data;
//     },
//   }),
// });
