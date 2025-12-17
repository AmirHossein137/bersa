import BestSelling from "@/components/home/BestSelling";
import CategoriesVsited from "@/components/home/CategoriesVsited";
import Learning from "@/components/home/Learning";
import NewProducts from "@/components/home/NewProducts";
import SliderOne from "@/components/home/SliderOne";
import SliderTwo from "@/components/home/SliderTwo";
import Specials from "@/components/home/Specials";
import SupplierOfMicronutrients from "@/components/home/SupplierOfMicronutrients";

export default function Home() {
  return (
    <>
      <SliderOne />
      <CategoriesVsited />
      <Specials />
      <SupplierOfMicronutrients />
      <BestSelling />
      <SliderTwo />
      <NewProducts />
      <Learning />
    </>
  );
}
