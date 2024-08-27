import { BarChart, DashboardSidebar } from "@/components/user/";

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-6 text-center">
              <div className="card">
                <h4 className="card-header">Total Bookings</h4>
                <div className="card-body">
                  <h4>
                    <a href="#">111</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="card">
                <h4 className="card-header">Total Payments</h4>
                <div className="card-body">
                  <h4>
                    <a href="#">111</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* CHART START */}

          <div className="row my-5">
            <div className="col-12" id="paymentChart">
              <BarChart />
            </div>
          </div>

          {/* CHART END */}
        </div>
      </div>
    </section>
  );
}
