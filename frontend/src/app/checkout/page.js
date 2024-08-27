import Link from "next/link";

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-8 offset-3">
          <h3 className="my-5">Checkout</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Total Rooms</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Total Guests</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Check In Date</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Check Out Date</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Charges</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Total Amount</th>
                <td>3</td>
              </tr>

              <tr>
               <td colSpan={2} className="text-danger">
                    *One Govt. ID required when checkin
               </td>
              </tr>

              <tr>
               <td colSpan={2}>
                    <Link href={"#"}>Terms & Conditions</Link>
               </td>
              </tr>

              <tr>
               <td colSpan={2} className="">
                    <button className="btn btn-secondary">Cancel</button>
                    <Link href="/payment/success" className="btn hms-bg-dark ms-3 text-white">Pay Now (success)</Link>
                    <Link href={"/payment/failed"} className="btn btn-danger ms-3 text-white">Pay Now (failure)</Link>
               </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
