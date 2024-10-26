// import { useEffect } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const withAuth = (WrappedComponent: React.ComponentType) => {
//   const AuthHOC = (props: any) => {
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     useEffect(() => {
//       if (status === "loading") return; // Wait for session to load
//       if (!session) {
//         // If no session, redirect to signin page
//         router.push("/signin");
//       }
//     }, [session, status, router]);

//     if (status === "loading" || !session) {
//       return null; // Optionally show a loading state
//     }

//     return <WrappedComponent {...props} />;
//   };

//   return AuthHOC;
// };

// export default withAuth;
