import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PostDetailPage from "./pages/postDetailPage.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<header>
				<nav>
					<Link to="/">Головна</Link>
					<Link to="/posts">Статті</Link>
					<Link to="/about">Про мене</Link>
				</nav>
				<button onClick={toggleTheme}>
					Переключити на {theme === "light" ? "темну" : "світлу"} тему
				</button>
			</header>
			<hr />

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/posts" element={<PostsPage />} />
					<Route path="/posts/:id" element={<PostDetailPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
