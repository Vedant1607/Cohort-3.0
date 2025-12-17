import axios from "axios";

async function getBlogs() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res.data;
}

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div>
      Learn Recoil / redux from the best platform in the world
      <br />
      <br />
      <div>
        {blogs.map(blog => <Todo title={blog.title} completed={blog.completed} />)}
      </div>
    </div>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}
function Todo({ title, completed }: ITodo) {
  return (
    <div>
      <div>{title} {completed ? "Done" : "Not Done"}</div>
    </div>
  );
}
