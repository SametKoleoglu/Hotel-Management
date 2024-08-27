import RoomTypeImages from "@/components/RoomTypeImages";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container my-5">
     <h3 className="my-5">Book Event</h3>
      <div className="row">
        <div className="col-7">
          <RoomTypeImages />
          
        </div>
        <div className="col-5">
          <div className="card">
            <h4 className="card-header">Book Event</h4>
            <div className="card-body">
              
              <div class="mb-3">
                <label for="eventtype" class="form-label">
                  <b>Event Type</b>
                </label>
                <select className="form-select">
                <option>Birthday Party</option>
                <option>Seminar</option>
                <option>Kitty Party</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="totalguest" class="form-label">
                  <b>Event Detail</b>
                </label>
               <textarea className="form-control"></textarea>
              </div>

              <div class="mb-3">
                <label for="totalguest" class="form-label">
                  <b>Total Guest</b>
                </label>
                <input type="number" id="totalguest" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="checkin" class="form-label">
                  <b>Event Data</b>
                </label>
                <input id="checkin" type="date" class="form-control" />
              </div>

              <div class="mb-3">
                <label for="totalcost" class="form-label">
                  <b>Total Cost</b>
                </label>

                <h4 className="text-success">$100</h4>
              </div>
              

              <Link href={"/checkout"} className="btn hms-btn-dark my-3 text-white"><b>Confirm Booking</b></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
