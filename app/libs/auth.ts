"use server"

import { auth, signIn, signOut } from "@/auth";

export async function LoginIn() {
    await signIn("github", {redirectTo : "/"})
}

export async function LoginOut() {
    await signOut({redirectTo : "/"})
}

export async function UserData() {
    const session = await auth()

    return session
}