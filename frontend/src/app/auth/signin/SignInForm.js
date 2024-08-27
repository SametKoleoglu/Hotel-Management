"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function SignInForm() {
  // STATES
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  async function handleForm(formData) {
    const fd = {
      mobile: formData.get("mobile"),
      password: formData.get("password"),
    };

    const response = await fetch("http://127.0.0.1:8000/api/v1/signin/", {
      method: "POST",
      body: JSON.stringify(fd),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log("responseData -> ",responseData);
    
    if (responseData.error == null) {
      var user = {
        mobile: fd.mobile,
        token: responseData.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setSuccessMsg(true);
      setErrorMsg(false);

      location.href = "/user/dashboard";
    } else if(responseData.error != null) {
      var errorArray = [];
      errorArray.push(<p>{responseData.error}</p>);
      if (typeof responseData.error !== 'string') {
        for (const [key, values] of Object.entries(responseData)) {
          for (let i = 0; i < values.length; i++) {
            errorArray.push(
              <p>
                {key} : {values[i]}
              </p>
            );
          }
        }
      }
      setErrorMsg(errorArray);
      setSuccessMsg(false);
    }
  }

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/images/thumbs/1.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12">
              <h3 className="mb-4">Sign In</h3>
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
              <form action={handleForm} className="mb-5 ">
                <div class="mb-3">
                  <label for="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div className="d-flex flex-column align-items-center my-4 gap-3">
                  <button class="btn hms-btn-dark w-75">Sign In</button>

                  <a
                    href="/auth/forgotpassword"
                    className="text-decoration-none text-danger ms-2"
                    style={{ fontSize: "14px" }}
                  >
                    Forgot password ?{" "}
                  </a>
                </div>
              </form>
              <p className="float-end mt-5">
                Don't have an account?{" "}
                <Link
                  className="text-decoration-none text-success"
                  style={{ fontSize: "17px" }}
                  href="/auth/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
