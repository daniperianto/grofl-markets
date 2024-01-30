declare module "next-auth" {
    import {DefaultSession} from "@auth/core/types";

    interface Session {
        user: {
            _id?: string | null
            isAdmin?: boolean
        } & DefaultSession["user"]
    }

    export interface User extends DefaultUser {
        _id?: string
        isAdmin?: boolean
    }
}