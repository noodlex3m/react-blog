import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PostDetailPage from "./pages/postDetailPage.jsx";

function App() {
	return (
		<div>
			<header>
				<nav>
					<Link to="/">Головна</Link>
					<Link to="/posts">Статті</Link>
					<Link to="/about">Про</Link>
				</nav>
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
