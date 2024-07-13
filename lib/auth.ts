import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./db"

const adminId = ['6681baf3edaf2e8a771432a2']
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Resend],
  adapter: MongoDBAdapter(clientPromise),
  pages:{
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
  callbacks:{
      session: async ({session, token, user}) => {
        if (adminId.includes(session?.user?.id)){return session}else {return false}
      }
    }
})