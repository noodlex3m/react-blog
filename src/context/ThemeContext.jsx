/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.classList.toggle("dark", theme === "dark");
	}, [theme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) setTheme(savedTheme);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
