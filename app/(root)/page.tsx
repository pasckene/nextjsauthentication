"use server"

import { auth} from "@/auth";
import { login } from "@/lib/actions/auth";
import SignInButton from "../components/sign-in-button";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "../components/sign-out-button copy";
export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    // User is authenticated
    // You can access user information from the session object
    // For example, session.user.name, session.user.email, etc.
    // You can also check if the user has a specific role or permission
    // and render different content based on that.
    // For example, if (session.user.role === "admin") { ... }
    // Render the content for authenticated users
    // You can also use the session object to display user information
    // or customize the UI based on the user's role or permissions.
    // For example, you can display the user's name or email  
    return (
      <>
        <div>
          {/* <h1>Welcome {session.user?.name}</h1>
          <h1>Welcome {session.user?.email}</h1>
           { session.user.image && (
            <Image src={session.user.image}
            className="rounded-full"
            width={48}
            height={48}
            alt={session.user.name ?? "Avatar"} />
            
          )} 
           <p>{JSON.stringify(session)}</p> */}

           <Link href="/user-info" > User Info</Link>
           <SignOutButton />
        </div>
      </>
    );
  }
  return (
    <>

     <div>
      <h1>You are not signed in</h1>
      <SignInButton />
     </div>
    
    
    </>
    
  );
}
