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
        // console.log(email, password, res, user);

        if (res.status === 200 && user) {
          console.log(user);
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
    signOut: "/",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session.subscribed) {
        token.subscribed = session.subscribed;
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      console.log("user", token);
      session.user = token;
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
