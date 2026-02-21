import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseScent from "@/components/choose-scent";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner/>
      <FeaturedProducts/>
      <BannerDiscount />
      <BannerProduct/>
      <ChooseScent />
    </main>
  );
}
