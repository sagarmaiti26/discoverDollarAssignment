import mobiles from "../assets/images/Categories/phone.png";
import fashion from "../assets/images/Categories/fashion.png";
import electronics from "../assets/images/Categories/electronics.png";
import home from "../assets/images/Categories/home.png";
import travel from "../assets/images/Categories/travel.png";
import appliances from "../assets/images/Categories/appliances.png";
import furniture from "../assets/images/Categories/furniture.png";
import beauty from "../assets/images/Categories/beauty.png";
import grocery from "../assets/images/Categories/grocery.png";
export const MenuItem = [
  {
    title: "Mobiles",
    url: "mobiles",
    icon: mobiles,
  },
  {
    title: "Fashion",
    url: "fashion",
    icon: fashion,
    submenu: [
      {
        title: "Top Wear",
        url: "menstopwear",
        submenu: [
          { title: "All", url: "all" },
          { title: "Men's T-Shirt", url: "menstshirt" },
          { title: "Men's Punjabi", url: "menspunjabi" },
        ],
      },
      {
        title: "Bottom Wear",
        url: "mensbottomwear",
        submenu: [
          { title: "All", url: "all" },
          { title: "Men's Trouser", url: "menstrouser" },
          { title: "Men's Underwear", url: "mensunderwear" },
        ],
      },
      { title: "Men's Foot Wear", url: "mensfootwear" },
      {
        title: "Women Ethnic",
        url: "womenethnic",
        submenu: [
          { title: "Women's Gowns", url: "womensgowns" },
          { title: "Women's Kurti", url: "womenskurti" },
          { title: "Women's Sarees", url: "womenssarees" },
        ],
      },
      { title: "Women Western", url: "womenwestern" },
    ],
  },
  {
    title: "Travel",
    url: "travel",
    icon: travel,
  },
  {
    title: "Electronics",
    url: "electronics",
    icon: electronics,
    submenu: [
      {
        title: "Coolers",
        url: "coolers",
        submenu: [
          { title: "Air Conditioners", url: "airconditioners" },
          { title: "Ceiling Fan", url: "ceilingfan" },
          { title: "Water Cooler", url: "watercooler" },
        ],
      },
      {
        title: "Camera",
        url: "camera",
        submenu: [
          { title: "Instant Camera", url: "instantcamera" },
          { title: "Panaroid Camera", url: "panaroidcamera" },
          { title: "DSLR", url: "dslr" },
        ],
      },
      { title: "Hard Drives & Storages", url: "harddrivesstorages" },
      {
        title: "Gaming",
        url: "gaming",
        submenu: [
          { title: "Gaming Keyboard", url: "gamingkeyboard" },
          { title: "Gaming Mouse", url: "gamingmouse" },
          { title: "Gaming Wifi", url: "gamingwifi" },
        ],
      },
      { title: "Women Western", url: "womenwestern" },
    ],
  },
  {
    title: "Appliances",
    url: "appliances",
    icon: appliances,
  },
  {
    title: "Home & Furniture",
    url: "homefurniture",
    icon: home,
    submenu: [
      { title: "Sofas", url: "sofas" },
      {
        title: "Kitchen Furniture",
        url: "kitchenfurniture",
        submenu: [
          { title: "Utensils", url: "utensils" },
          { title: "Stove & Gas", url: "stovegas" },
        ],
      },
      { title: "Home Decos", url: "homedecos" },
      {
        title: "Tables",
        url: "tables",
        submenu: [
          { title: "Dining Tables", url: "diningtables" },
          { title: "Study Table", url: "studytable" },
        ],
      },
      { title: "Tools & Utility", url: "toolsutility" },
    ],
  },
  {
    title: "Furniture",
    url: "furniture",
    icon: furniture,
  },
  {
    title: "Beauty,Toys & more",
    url: "beautytoysmore",
    icon: beauty,
    submenu: [
      { title: "Kids Toys", url: "kidstoys" },
      {
        title: "Men's Grooming",
        url: "mensgrooming",
        submenu: [
          { title: "Trimmer", url: "trimmer" },
          { title: "Face Wash", url: "facewash" },
        ],
      },
      { title: "Baby Care", url: "babycare" },
      {
        title: "Sports and Fitness",
        url: "sportsfitness",
        submenu: [
          { title: "Gym Kit", url: "gymkit" },
          { title: "Running Shoes", url: "runningshoes" },
          { title: "Dumbells", url: "dumbells" },
        ],
      },
      { title: "Books", url: "books" },
    ],
  },
  {
    title: "Grocery",
    url: "grocery",
    icon: grocery,
  },
];
