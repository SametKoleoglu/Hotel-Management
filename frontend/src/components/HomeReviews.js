export default function HomeReviews() {
  return (
    <section className="container my-5">
      <h3
        className="text-center my-5"
      >
        <span className="text-warning fw-bold " style={{ marginLeft: 110 }}>REVIEWS</span>{" "}
        <a href="/reviews" className="float-end btn btn-success">
          {" "}
          View ALL
        </a>
      </h3>
      <div className="row justify-content-center gap-5 my-5">
        <div className="col-5">
          <div class="card px-4 py-3">
            <h4>Author</h4>
            <p>Content</p>
            <span className="text-warning">
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
            </span>
          </div>
        </div>
        <div className="col-5">
          <div class="card px-4 py-3">
            <h4>Author</h4>
            <p>Content</p>
            <span className="text-warning">
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center gap-5">
        <div className="col-5">
          <div class="card px-4 py-3">
            <h4>Author</h4>
            <p>Content</p>
            <span className="text-warning">
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
            </span>
          </div>
        </div>
        <div className="col-5">
          <div class="card px-4 py-3">
            <h4>Author</h4>
            <p>Content</p>
            <span className="text-warning">
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
              <i className="fa fa-star fa-2x"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
