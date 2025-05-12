import NextAuth from "next-auth"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// })
import GitHub from "next-auth/providers/github"

export const {handlers,signIn,signOut,auth} = NextAuth({
  providers: [GitHub],
});