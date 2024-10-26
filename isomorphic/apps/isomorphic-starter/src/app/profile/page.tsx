// src/app/profile/page.tsx

"use client"; // This directive makes it a Client Component

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Note: use 'next/navigation' for app directory

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session)

  useEffect(() => {
    if (status === "loading") {
      return; // Optionally show a loading indicator
    }

    // Redirect if not authenticated
    if (!session) {
      router.push("/signin");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Loading state while checking session
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name || "User"}!</p>
          <p>Email: {session.user?.email}</p>
          {/* Additional profile details */}
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}
