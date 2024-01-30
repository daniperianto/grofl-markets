import {Metadata} from "next";
import Form from "@/app/(front)/payment/Form";

export const metadata: Metadata = {
    title: "Payment Method",
}

export default async function PaymentPage() {
    return (
        <Form />
    )
}