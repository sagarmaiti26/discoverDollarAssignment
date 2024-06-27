
import Categories from "../Layouts/Menu/Categories";
import Banner from "./Banner/Banner";
import DealSlider from "./DealSlider/DealSlider";

const Home = () => {
  return (
    <>
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"Discounts for You"} />     
        <DealSlider title={"Top Brands, Best Price"} />
        <DealSlider title={"Top Offers On"} />
      </main>
    </>
  );
};

export default Home;
