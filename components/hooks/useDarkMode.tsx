import { useRecoilState } from "recoil";

import { withDarkMode } from "store";

const DARK_MODE = "darkMode";

export function useDarkMode() {
	const [darkMode, setDarkMode] = useRecoilState(withDarkMode);

	const darkModeToggle = () => {
		if (darkMode) {
			document.documentElement.classList.remove(DARK_MODE);
			setDarkMode(false);
			localStorage.removeItem(DARK_MODE);
		} else {
			document.documentElement.classList.add(DARK_MODE);
			setDarkMode(true);
			localStorage.setItem(DARK_MODE, "true");
		}
	};

	const checkDarkMode = () => {
		if (localStorage.getItem(DARK_MODE)) {
			document.documentElement.classList.add(DARK_MODE);
			setDarkMode(true);
		}
	};

	return {
		darkModeToggle,
		checkDarkMode,
		isDarkMode: darkMode,
	};
}
