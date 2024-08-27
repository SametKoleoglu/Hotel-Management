import { PaymentFailed, PaymentSuccess } from "@/components/payment";
import Link from "next/link";

export default function Page({ params }) {
  const slug = params.slug;
  return (
    <section className="container my-5 text-center">
      {slug === "success" ? <PaymentSuccess /> : <PaymentFailed />}
    </section>
  );
}
