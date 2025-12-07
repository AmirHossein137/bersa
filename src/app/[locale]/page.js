import BestSelling from "@/components/home/BestSelling";
import CategoriesVsited from "@/components/home/CategoriesVsited";
import Learning from "@/components/home/Learning";
import NewProducts from "@/components/home/NewProducts";
import Specials from "@/components/home/Specials";
import SupplierOfMicronutrients from "@/components/home/SupplierOfMicronutrients";

export default function Home() {
  return (
    <>
      <CategoriesVsited />
      <Specials />
      <SupplierOfMicronutrients />
      <BestSelling />
      <NewProducts />
      <Learning />
    </>
  );
}
