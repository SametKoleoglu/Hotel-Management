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
            <h4 className="card-header"> Update Profile</h4>
            <div className="card-body">
              <div class="row">
                <div class="col-md-2 col-12">
                  <img
                    src="/images/thumbs/1.jpg"
                    className="img-fluid"
                    width={200}
                  />
                </div>

                <div class="col-md-5 col-12 my-3">
                  <label for="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-md-5 col-12 my-3">
                  <label for="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-md-4 col-12 my-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                  />
                </div>
                <div class="col-md-4 col-12 mt-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>

                <div class="col-md-4 col-12 mt-3">
                  <label for="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    type="number"
                    class="form-control"
                    placeholder="Mobile"
                  />
                </div>

                <div class="d-flex gap-3 mt-4">
                  <button type="submit" class="btn btn-secondary">
                    Reset
                  </button>
                  <button type="submit" class="btn hms-btn-dark">
                    Update
                  </button>
                </div>
              </div>
              <p className="mt-5">
                If u want to change your password,{" "}
                <Link href={"/user/change_password"} className="text-success">
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
