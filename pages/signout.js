import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignOutPage() {
  const router = useRouter();
  const { callbackUrl } = router.query;

  useEffect(() => {
    signOut({ callbackUrl });
  }, [callbackUrl]);

  return (
    <div>
      <p>You have been signed out.</p>
    </div>
  );
}
