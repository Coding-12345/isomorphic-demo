import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@admin.com" && credentials.password === "admin") {
          return { id: "1", name: "admin" }; // Valid user
        }
        throw new Error("Invalid credentials"); // Authentication failed
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/auth/error", // Path to custom error page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to home page after successful login
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
