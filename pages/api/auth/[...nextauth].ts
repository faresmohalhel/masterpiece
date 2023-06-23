import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const res = await axios.post("http://localhost:3000/api/login", {
          email,
          password,
        });
        const user = res.data.user;
        console.log(email, password, res, user);

        if (res.status === 200 && user) {
          return user;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/Login",
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token, user }) {
  //     session.user = token;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
