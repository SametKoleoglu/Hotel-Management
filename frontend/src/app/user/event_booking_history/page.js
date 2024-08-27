import { DashboardSidebar } from "@/components/user";
import Link from "next/link";

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Detail</th>
                  <th>Invoice</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/01/2022</td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">
                      Birthday Party
                    </p>
                    <p className="m-0 fw-bold hms-color-normal">50 guests</p>
                  </td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">
                      <Link href={"#"}>Hms-Evt-123</Link>
                    </p>
                    <p className="m-0 fw-bold ">20,000</p>
                    <p className="m-0 fw-bold text-danger">Due</p>
                  </td>
                  <td>
                    <Link href={"#"} className="btn btn-sm btn-outline-danger">
                      Cancel
                    </Link>
                    <Link href={"#"} className="btn btn-sm hms-btn-dark ms-2 text-white">
                      Pay Now
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>02/01/2022</td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">
                      Birthday Party
                    </p>
                    <p className="m-0 fw-bold hms-color-normal">50 guests</p>
                  </td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">
                      <Link href={"#"}>Hms-Evt-123</Link>
                    </p>
                    <p className="m-0 fw-bold ">20,000</p>
                    <p className="m-0 fw-bold text-success">Paid</p>
                  </td>
                  <td>
                    
                    <Link href={"#"} className="btn btn-sm btn-success ms-2 text-white">
                      Support
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
