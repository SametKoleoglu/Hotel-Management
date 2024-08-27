import { DashboardSidebar } from "@/components/user";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>

        <div className="col-md-8 col-12">
          <div className="card">
            <h4 className="card-header"> Change Password</h4>
            <div className="card-body">
              <div class="row">
                <div class="col-md-5 col-12 my-3">
                  <label for="newpassword" className="form-label">
                    New Password
                  </label>
                  <input
                    id="newpassword"
                    type="password"
                    class="form-control"
                    placeholder="********"
                  />
                </div>
                <div class="col-md-5 col-12 my-3">
                  <label for="lastname" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    class="form-control"
                    placeholder="********"
                  />
                </div>

                <div class="d-flex gap-3 mt-4">
                  <button type="submit" class="btn hms-btn-dark">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
