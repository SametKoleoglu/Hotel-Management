'use client'
import Link from "next/link";
import { useState,useRef } from "react";

export default function SignUpForm() {

  const resetButtonRef = useRef(null)

  // STATES
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  async function handleForm(formData) {
    const fd = {
      'first_name': formData.get("first_name"),
      'last_name': formData.get("last_name"),
      'username': formData.get("username"),
      'password': formData.get("password"),
      'email': formData.get("email"),
      'profile': {'mobile': formData.get("mobile")},
    };

    const response = await fetch("http://127.0.0.1:8000/api/v1/signup/", {
      'method': "POST",
      'body': JSON.stringify(fd),
      'headers': {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (response.ok) {
      setSuccessMsg(true);
      setErrorMsg(false);
      resetButtonRef.current.click();
    } else {
      var errorArray = [];
      if(responseData['profile'] != undefined){
        for (const [key, values] of Object.entries(responseData['profile'])) {
          for (let i = 0; i < values.length; i++) {
            errorArray.push(<p>{key} : {values[i]}</p>)
          }
        }
      }else{
        for (const [key, values] of Object.entries(responseData)) {
          for (let i = 0; i < values.length; i++) {
            errorArray.push(<p>{key} : {values[i]}</p>)
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
              {successMsg && (
                <div className="alert alert-success">
                  Thank You for joining us :/
                </div>
              )}
              {errorMsg && (<div className="alert alert-danger">{errorMsg}</div>)}
              <h3 className="mb-4">Sign Up</h3>

              <form action={handleForm}>
                <div class="row">
                  <div class="col-md-6 col-12 my-3">
                    <label for="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="first_name"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col-md-6 col-12 my-3">
                    <label for="last_name" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="last_name"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div class="col-md-6 col-12 my-3">
                    <label for="username" className="form-label">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div class="col-md-6 col-12 my-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-md-6 col-12 my-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-md-6 col-12 my-3">
                    <label for="mobile" className="form-label">
                      Mobile
                    </label>
                    <input
                      id="mobile"
                      type="number"
                      name="mobile"
                      class="form-control"
                      placeholder="Mobile"
                    />
                  </div>

                  <div className="d-flex flex-column align-items-center my-3 gap-3">
                    <button  class="btn hms-btn-dark w-75">
                      Sign Up
                    </button>
                    <input class="btn btn-warning w-25" type="reset" ref={resetButtonRef} value={"Reset"} />
                  </div>

                  <p className="mt-5">
                    Already have an account?{" "}
                    <Link
                      href="/auth/signin"
                      className="text-decoration-none text-success ms-2"
                      style={{ fontSize: "18px" }}
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
