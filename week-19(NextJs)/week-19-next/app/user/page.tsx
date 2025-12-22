import axios from "axios";

export default async function User() {

  const response = await axios.get("http://localhost:3000/api/v1/user/details");
  const data = response.data;

  await new Promise(r => setTimeout(r, 5000));

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex justify-center border p-8 rounded flex-col">
        <div>Name: {data.name}</div>
        <div>Data: {data.email}</div>
      </div>
    </div>
  );
}
