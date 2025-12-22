import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {

  // const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Todo application

      {/* <button onClick={() => {
        router.push("/signin")
      }}></button> */}

      <Link className="text-md border m-2 p-2" href={"/auth/signin"}>Signin to Todo app</Link>
      <Link className="text-md border m-2 p-2" href={"/signup"}>Signup to Todo app</Link>
    </div>
  );
}
