"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [errorMsg, setErrorMsg] = useState(false);

  async function handleForm(formData) {
    const fd = {
      mobile: formData.get("mobile"),
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/mobile-validate/",
      {
        method: "POST",
        body: JSON.stringify(fd),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    if (responseData.error == null) {
      setErrorMsg(false);

      localStorage.setItem("forgotmobile", JSON.stringify(fd.mobile));

      location.href = "/auth/otp-verify";
    } else {
      setErrorMsg(responseData.error);
    }
  }

  return (
    <div className="container my-5">
      <div className="col-10 offset-1">
        <div className="row">
          <div className="col-md-6 col-12">
            <img src="/images/thumbs/1.jpg" className="img-fluid" />
          </div>

          <div className="col-md-6 col-12">
            <h3 className="mb-3">Forgot Password</h3>
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            <form action={handleForm}>
              <div className="row">
                <div className="col-md-8 col-12 mb-3">
                  <label for="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    type="number"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-12 mb-3">
                  <button className="btn btn-primary">Submit</button>
                </div>
                <p>
                  If you aren't registered yet,{" "}
                  <Link href="/auth/signup">Sign Up Here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
