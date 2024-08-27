"use client";
import { headerData } from "@/constants/data";
import { Pacifico, Fredoka } from "next/font/google";
const pacifico = Pacifico({ subsets: ["vietnamese"], weight: "400" });
const fredoka = Fredoka({ subsets: ["latin-ext"], weight: "600" });

import Link from "next/link";

export default function Header() {
  var user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <nav className="navbar navbar-expand-lg hms-bg-normal" data-bs-theme="dark">
      <div className="container">
        <Link
          className={`navbar-brand ${pacifico.className} fs-1 hms-color-light`}
          href="/"
        >
          Hotel Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${fredoka.className}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {headerData.map((item) =>
            
              !user ? (
                <li key={item.id} className="nav-item mx-2">
                  <Link
                    className={`${
                      item.id === 7
                        ? "btn ms-2 text-white hms-bg-dark px-3 fw-bold"
                        : item.id === 6
                        ? "btn ms-2 text-white bg-success fw-bold"
                        : "nav-link text-white fw-bold"
                    }`}
                    aria-current="page"
                    href={
                      item.name === "Home"
                        ? "/"
                        : item.name === "Sign In"
                        ? "/auth/signin"
                        : `/${item.name.toLowerCase().trim().replace(" ", "")}`
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li key={item.id} className="nav-item mx-2">
                  <Link
                    className={`${
                      item.id === 7
                        ? "btn ms-2 text-white hms-bg-dark px-3 fw-bold"
                        : item.id === 6
                        ? "btn ms-2 text-white bg-danger fw-bold"
                        : "nav-link text-white fw-bold"
                    }`}
                    aria-current="page"
                    href={
                      item.name === "Home"
                        ? "/"
                        : item.name === "Sign In"
                        ? "/auth/signout"
                        : `/${item.name.toLowerCase().trim().replace(" ", "")}`
                    }
                  >
                    {item.name == "Sign In" ? "Sign Out" : item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
