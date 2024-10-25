import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const auth: AuthOptions = {
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize(credentials) {
        if (credentials?.email === "admin@gmail.com" && credentials.password === "admin") {
          // redirect('http://localhost:3002');
          return { id: "1", name: "admin" };
        }

        return null;
      },
    }),
  ],
};

export default auth;
