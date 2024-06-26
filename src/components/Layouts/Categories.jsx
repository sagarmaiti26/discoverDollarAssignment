import mobiles from "../../assets/images/Categories/phone.png";
import fashion from "../../assets/images/Categories/fashion.png";
import electronics from "../../assets/images/Categories/electronics.png";
import home from "../../assets/images/Categories/home.png";
import travel from "../../assets/images/Categories/travel.png";
import appliances from "../../assets/images/Categories/appliances.png";
import furniture from "../../assets/images/Categories/furniture.png";
import beauty from "../../assets/images/Categories/beauty.png";
import grocery from "../../assets/images/Categories/grocery.png";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const catNav = [
  {
    title: "Mobiles",
    icon: mobiles,
  },
  {
    title: "Fashion",
    icon: fashion,
    submenu: [
      {
        title: "Men's Top Wear",
        submenu: [
          { title: "All" },
          { title: "Men's T-Shirt" },
          { title: "Men's Punjabi" },
        ],
      },
      {
        title: "Men's Bottom Wear",
        submenu: [
          { title: "All" },
          { title: "Men's Trouser" },
          { title: "Men's Underwear" },
        ],
      },
      { title: "Men's Foot Wear" },
      {
        title: "Women Ethnic",
        submenu: [
          { title: "Women's Gowns" },
          { title: "Women's Kurti" },
          { title: "Women's Sarees" },
        ],
      },
      { title: "Women Western" },
    ],
  },
  {
    title: "Travel",
    icon: travel,
  },
  {
    title: "Electronics",
    icon: electronics,
    submenu: [
      {
        title: "Coolers",
        submenu: [
          { title: "Air Conditioners" },
          { title: "Ceiling Fan" },
          { title: "Water Cooler" },
        ],
      },
      {
        title: "Camera",
        submenu: [
          { title: "Instant Camera" },
          { title: "Panaroid Camera" },
          { title: "DSLR" },
        ],
      },
      { title: "Hard Drives & Storages" },
      {
        title: "Gaming",
        submenu: [
          { title: "Gaming Keyboard" },
          { title: "Gaming Mouse" },
          { title: "Gaming Wifi" },
        ],
      },
      { title: "Women Western" },
    ],
  },
  {
    title: "Appliances",
    icon: appliances,
  },
  {
    title: "Home & Furniture",
    icon: home,
    submenu: [
      { title: "Sofas" },
      {
        title: "Kitchen Furniture",
        submenu: [{ title: "Utensils" }, { title: "Stove & Gas" }],
      },
      { title: "Home Decos" },
      {
        title: "Tables",
        submenu: [{ title: "Dining Tables" }, { title: "Study Table" }],
      },
      { title: "Tools & Utility" },
    ],
  },

  {
    title: "Furniture",
    icon: furniture,
  },
  {
    title: "Beauty,Toys & more",
    icon: beauty,
    submenu: [
      { title: "Kids Toys" },
      {
        title: "Men's Grooming",
        submenu: [{ title: "Trimmer" }, { title: "Face Wash" }],
      },
      { title: "Baby Care" },
      {
        title: "Sports and Fitness",
        submenu: [
          { title: "Gym Kit" },
          { title: "Running Shoes" },
          { title: "Dumbells" },
        ],
      },
      { title: "Books" },
    ],
  },
  {
    title: "Grocery",
    icon: grocery,
  },
];

const Categories = () => {
  return (
    <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
      <div className="flex items-center justify-between mt-4">
        {catNav.map((item, index) =><Link
            to={`/products?category=${item.name}`}
            className="flex flex-col gap-1 items-center p-2 group"
            key={index}
          >
            <div className="h-16 w-16">
              <img
                draggable="false"
                className="h-full w-full object-contain"
                src={item.icon}
                alt={item.title}
              />
            </div>
            <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">
              {item.title}
              {item.submenu && <ExpandMoreIcon sx={{ fontSize: "16px" }} />}
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Categories;
