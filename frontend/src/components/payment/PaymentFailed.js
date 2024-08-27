import Link from "next/link";

export default function PaymentFailed() {
  return (
    <>
      <h3 className="text-danger my-5">
        <i className="fa fa-check-circle"></i> OOOPPPSSS !!!! Something went
        wrong
      </h3>
      <h5 className="text-danger">Error Code : error description</h5>
      <p className="my-5">
        <Link href={"/"} className="btn btn-dark">
          Home
        </Link>
        <Link href={"#"} className="btn hms-btn-dark ms-3">
          Me Dashboard
        </Link>
      </p>
    </>
  );
}
