import { HomeBanner, HomeGallery, HomeReviews, HomeServices } from "@/components";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeServices />
      <HomeGallery />
      <HomeReviews />
    </main>
  );
}
