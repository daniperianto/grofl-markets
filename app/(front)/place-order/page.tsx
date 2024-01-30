import {Metadata} from "next";
import Form from "@/app/(front)/place-order/Form";

export const metadata: Metadata = {
    title: "Place Order",
}

export default async function PlaceOrderPage() {
    return (
        <Form />
    )
}