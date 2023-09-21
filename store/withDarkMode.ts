import { selector } from "recoil";

import { darkMode } from "./atoms";

export const withDarkMode = selector<boolean>({
	key: "selector/withDarkMode",
	get: ({ get }) => get(darkMode),
	set: ({ set }, newValue) => set(darkMode, newValue),
});
