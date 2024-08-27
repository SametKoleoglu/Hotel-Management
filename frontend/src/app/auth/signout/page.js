"use client";

export default function Signout() {
  localStorage.removeItem("user");
  setTimeout(() => {
    location.href = "/";
  }, 1000);

  return (
    <section className="container my-5 text-center" style={{ height: "50vh" }}>
      <p>Signout....</p>
    </section>
  );
}
