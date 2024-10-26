'use client'; // Ensure this is a client component

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Header from "./header";
import Sidebar from "./sidebar";

export default function HydrogenLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();


  const isAuthPage = pathname === "/signin";

  useEffect(() => {
    if (status === "loading") return; 
    if (!session && !isAuthPage) {
      
      router.push('/signin');
    }
  }, [session, status, router, isAuthPage]);


  if (status === "loading") {
    return <div>Loading...</div>; 
  }

  return (
    <main className="flex min-h-screen flex-grow">
      {/* Conditionally render Sidebar and adjust layout */}
      {!isAuthPage && (
        <Sidebar className="fixed hidden xl:block dark:bg-gray-50" />
      )}
      <div
        className={
          isAuthPage
            ? "flex w-full flex-col"
            : "flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]"
        }
      >
        {/* Conditionally render Header */}
        {!isAuthPage && <Header />}

        <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
          {children}
        </div>
      </div>
    </main>
  );
}
