import { signOut, useSession } from "next-auth/react"
import { getSession } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Home() {

  const { data: session, status } = useSession();

  const router = useRouter()
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  async function login() {
    router.replace('/login')
  }


  if (!session) {
    return <> <button onClick={login}>Click me to login</button></>  
  }

  return (
   <div>

{console.log(session)}
  
  Hello! {session.user.name}

<br></br>
   
   <button onClick={_=>signOut()}>Sign Out</button>

   </div>
  )
}
