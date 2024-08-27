import RoomTypeImages from "@/components/RoomTypeImages";
import Link from "next/link";

async function fetchDataById(room_type_id) {
  const response = await fetch(
    `http://localhost:8000/api/v1/room-types/${room_type_id}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export default async function Page({ params }) {
  const room_type_id = params.slug;
  const roomDetail = await fetchDataById(room_type_id);

  return (
    <div className="container my-5">
      <h4 className="my-5">{roomDetail.title}</h4>
      <div className="row">
        <div className="col-7">
          <RoomTypeImages images={roomDetail.room_type_images} />
          <h4 className="my-5">DETAILS</h4>
          <div className="row">
            <div className="col-3">
              <p>
                Wifi :{" "}
                {roomDetail.detail.wifi ? (
                  <i className="fa fa-check-circle text-success"></i>
                ):(
                  <i className="fa fa-times-circle text-danger"></i>
                )}
              </p>
              <p>
                Wimming Pool :{" "}
                <i className="fa fa-check-circle text-success"></i>
              </p>
              <p>
                Camera : <i className="fa fa-times-circle text-danger"></i>
              </p>
            </div>
          </div>

          <h4 className="my-5">Location</h4>
          <p>Google Maps</p>
        </div>
        <div className="col-5">
          <div className="card">
            <h4 className="card-header">Book Form</h4>
            <div className="card-body">
              <div class="mb-3">
                <label for="roomtype" class="form-label">
                  Room Type :<b> Double Bedroom</b>
                </label>
              </div>
              <div class="mb-3">
                <label for="charges" class="form-label">
                  Charges : <b> 5000/day</b>
                </label>
              </div>
              <hr />
              <div class="mb-3">
                <label for="totalguest" class="form-label">
                  <b>Total Guest</b>
                </label>
                <input type="number" id="totalguest" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="checkin" class="form-label">
                  <b>Check-In</b>
                </label>
                <input id="checkin" type="date" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="checkout" class="form-label">
                  <b>Check-Out</b>
                </label>
                <input id="checkout" type="date" class="form-control" />
              </div>

              <Link href={"/checkout"} className="btn hms-btn-dark my-2">
                <b>Confirm Booking</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
