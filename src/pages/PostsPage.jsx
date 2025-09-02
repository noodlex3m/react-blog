import { Link } from "react-router-dom";
import { posts } from "../data.js";

function PostsPage() {
	return (
		<div>
			<h2>Статті</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
export default PostsPage;
