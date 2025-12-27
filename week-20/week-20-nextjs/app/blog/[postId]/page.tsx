import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    postId: string;
  }>;
}) {
  const { postId } = await params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = response.data;

  return (
    <div>
      Blog Page {postId}
      <div>
        <div>Title: {data.title}</div>
        <div>Body: {data.body}</div>
      </div>
    </div>
  );
}
