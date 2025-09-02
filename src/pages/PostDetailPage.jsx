import { useParams } from "react-router-dom";
import { posts } from "../data.js";

function PostDetailPage() {
	const { id } = useParams();
	const post = posts.find((p) => p.id === Number(id));
	if (!post) {
		return <h2>Пост не знайдено!</h2>;
	}
	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
}

export default PostDetailPage;
