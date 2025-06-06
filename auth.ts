import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {auth, signIn, signOut, handlers} = NextAuth({
    providers : [GitHub({
        clientId : process.env.AUTH_GITHUB_ID,
        clientSecret : process.env.AUTH_GITHUB_SECRET
    })],
})