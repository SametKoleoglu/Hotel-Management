import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="container my-5">
      <h3 className="text-center my-5">SERVICES</h3>
      <div className="row text-center">
        <div className="col-4">
          <div class="card">
            <Link href="/room-types">
              <img
                src="images/thumbs/1.jpg"
                class="card-img-top"
                alt="Room Types"
              />
            </Link>

            <div class="card-body hms-bg-dark text-white">
              <h5 class="card-title">
                <Link href="/room-types" className="text-white">
                  Room Types
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
            <div class="card-body bg-dark text-white">
              <h5 class="card-title">Events</h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
            <div class="card-body bg-dark text-white">
              <h5 class="card-title">Online Booking</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
