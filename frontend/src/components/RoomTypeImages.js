"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function RoomTypeImages({ images }) {
  return (
    <Carousel showThumbs={false}>
      {images &&
        images.map((image,index) => (
          <div key={index}>
            <img src={image.image} />
          </div>
        ))}
    </Carousel>
  );
}
