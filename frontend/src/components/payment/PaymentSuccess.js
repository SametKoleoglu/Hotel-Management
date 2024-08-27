import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <>
      <h3 className="text-success my-5">
        <i className="fa fa-check-circle"></i>Thank You
      </h3>
      <h5>
        Invoice : <Link href={"#"}>HMS-001</Link>
      </h5>
      <p className="my-5">
        <Link href={"/"} className="btn btn-dark">
          Home
        </Link>
        <Link href={"/"} className="btn hms-btn-dark ms-3">
          My Dashboard
        </Link>
      </p>
    </>
  );
}
