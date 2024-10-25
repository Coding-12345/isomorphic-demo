'use client';

import { usePathname } from "next/navigation";
import Header from "./header";
import Sidebar from "./sidebar";

export default function HydrogenLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current route is '/signin'
  const isAuthPage = pathname === "/signin";

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
