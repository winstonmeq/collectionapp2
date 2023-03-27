import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../conn/dbconnect";
import User from "../../../models/User"

export default NextAuth({

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req, res) {
        const { email, password } = credentials;
        await dbConnect();
        const userData = await User.findOne({ email }).exec();
        if (!userData) {
          throw new Error("Invalid Email & Password");
        }
        const isValidPassword = userData.password === password;
        if (userData && isValidPassword) {
          return { email: userData.email };
        } else {
          throw new Error("Invalid Email & Password");
        }
      }
    })
  ],

  callbacks: {
    async session({ session }) {
      const email = session.user.email
      const dbUser = await User.findOne({ email }).exec();
      session.user = { id: dbUser._id, name: dbUser.lname, email: dbUser.email };
      return session;
    },

    async redirect({ url, baseUrl }) {
      return `${baseUrl}/redirect?callbackUrl=${encodeURIComponent(url)}`;
    }
  },

  pages: {
    signOut: "/signout"
  },

  baseUrl: "http://192.168.0.8/login"
});
