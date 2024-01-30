import React from "react";
import {auth} from "@/lib/auth";
import { SessionProvider } from "next-auth/react"
import ClientProviders from "@/components/ClientProviders";

export default async function Providers({
                                            children,
                                        }: {
    children: React.ReactNode
                                        }) {
    const session = await auth()

    return <SessionProvider session={session}>
        <ClientProviders>{children}</ClientProviders>
    </SessionProvider>
}