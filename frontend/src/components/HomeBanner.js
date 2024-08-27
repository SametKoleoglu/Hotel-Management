"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function HomeBanner() {
  const [bannerList, setBannerList] = useState([]);

  async function fetchData() {
    const banners = await fetch("http://localhost:8000/api/v1/banners/");
    const response = await banners.json();
    setBannerList(response.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {bannerList.map((banner, index) => (
        <div key={index}>
          <img src={banner.image} alt={banner.title} />
        </div>
      ))}
    </Carousel>
  );
}
