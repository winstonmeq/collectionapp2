import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";




const SessionChecker = () => {

const { data: session, status } = useSession();

  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }


  if (!session) {
    return <>Please Login</>  
  }


} 

export default SessionChecker;

