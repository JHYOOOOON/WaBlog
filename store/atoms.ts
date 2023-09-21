import { atom } from "recoil";

export const darkMode = atom<boolean>({
	key: "atom/darkMode",
	default: false,
});
