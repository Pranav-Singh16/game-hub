import { atom, selector } from "recoil";
import axios from "axios";
import apiClients from "../../services/apiClients";

export const newAtom = atom({
  key: "newAtom",
  default: 0,
});

export const isDarkMode = atom({
  key: "isDarkMode",
  default: false,
});

// export const games = selector({
//   key: "games",
//   get: async () => {
//     try {
//       const res = await apiClients.get("/xgames");
//       return res.data.results;
//     } catch (err) {
//       throw new Error(
//         err.response?.data?.message || err.message || "Failed to fetch games"
//       );
//     }
//   },
// });

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
