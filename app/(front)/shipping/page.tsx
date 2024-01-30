import {Metadata} from "next";
import Form from "@/app/(front)/shipping/Form";

export const metadata: Metadata = {
    title: "Shipping Address"
}

export default async function ShippingPage() {
    return (
        <Form />
    )
}