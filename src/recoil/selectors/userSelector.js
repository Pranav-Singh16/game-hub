import { selector } from "recoil";

export const total = selector({
  key: "total",
  get: ({ get }) => {
    const newAtomCount = get(newWorkAtom);
    const newAtomCount1 = get(newWorkAtom1);
    const newAtomCount2 = get(newWorkAtom2);
    return newAtomCount + newAtomCount1 + newAtomCount2;
  },
});
