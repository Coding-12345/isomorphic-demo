// // src/components/ProtectedComponent.tsx
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

// export default function ProtectedComponent() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   if (!session) {
//     // Redirect if no session is found
//     router.push('/signin');
//     return null;
//   }

//   return (
//     <div>
//       <h1>Protected Content</h1>
//       {/* Your protected content here */}
//     </div>
//   );
// }
