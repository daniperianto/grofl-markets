import {Metadata} from "next";
import Form from "@/app/(front)/register/Form";

export const metadata: Metadata = {
    title: "Register",
}

export default async function Register() {
    return <Form />
}