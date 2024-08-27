"use client";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function HomeGallery() {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="container my-5">
      <FsLightbox
        toggler={toggler}
        sources={[
          "images/thumbs/1.jpg",
          "images/thumbs/1.jpg",
          "images/thumbs/1.jpg",
        ]}
      />
      <h3 className="text-center my-5">
        GALLERY
        <button
          onClick={() => setToggler(!toggler)}
          className="btn float-end fs-5 text-white hms-bg-dark"
        >
          View ALL
        </button>
      </h3>
      <div className="row text-center">
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img
              src="images/thumbs/1.jpg"
              class="card-img-top"
              alt="Room Types"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
