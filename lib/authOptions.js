import signInVerify from "@/app/action/auth/signInVerify";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { dbCollection, dbConnect } from "./mongodb";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        const user = await signInVerify(credentials);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/sign-in",
    //   signOut: '/auth/signout',
    //   error: '/auth/error',
    //   verifyRequest: '/auth/verify-request',
    //   newUser: '/auth/new-user'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {


       if(account){
      
          try {
             const {provider,providerAccountId} =  account;
             const {email:user_email,image,name} = user;
             const payload = {provider,providerAccountId,name,email:user_email,image};

              const userCollection = dbConnect(dbCollection.UserCollection);
              const isAxistUser = await userCollection.findOne({providerAccountId});

               if(!isAxistUser){
                 await dbConnect(dbCollection.UserCollection).insertOne(payload)
               }
            
          } catch (error) {
            return false 
          }
         
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

export default authOptions;
