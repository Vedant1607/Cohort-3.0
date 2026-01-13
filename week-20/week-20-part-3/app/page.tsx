// "use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return (
    // <SessionProvider>
    //   <OtherHome />
    // </SessionProvider>

    <div>
      {JSON.stringify(session)}
    </div>
  );
}

function OtherHome() {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>Sign out</button>
      )}
      {session.status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
