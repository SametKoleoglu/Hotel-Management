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
                  <th>Booking Date</th>
                  <th>Detail</th>
                  <th>Invoice</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2022</td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">2 rooms</p>
                    <p className="m-0 fw-bold hms-color-normal">
                      02/01/2022 - 06/01/2022
                    </p>
                    <p className="m-0 fw-bold hms-color-normal">2 guests</p>
                  </td>
                  <td>
                    <p className="m-0 fw-bold hms-color-normal">
                      <Link href={"#"}>
                      Hms-123
                      </Link>
                    </p>
                    <p className="m-0 fw-bold ">
                      20,000
                    </p>
                    <p className="m-0 fw-bold text-danger">
                      Due
                    </p>
                  </td>
                  <td>
                    <Link href={"#"} className="btn btn-sm btn-outline-danger">Cancel</Link>
                    <Link href={"#"} className="btn btn-sm btn-outline-dark">Guest Detail</Link>
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
