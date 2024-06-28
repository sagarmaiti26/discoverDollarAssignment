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
    label: "Mobiles",
    url: "mobiles",
    icon: mobiles,
  },
  {
    label: "Fashion",
    url: "fashion",
    icon: fashion,
    submenu: [
      {
        label: "Top Wear",
        url: "menstopwear",
        submenu: [
          { label: "All", url: "all" },
          { label: "Men's T-Shirt", url: "menstshirt" },
          { label: "Men's Punjabi", url: "menspunjabi" },
        ],
      },
      {
        label: "Bottom Wear",
        url: "mensbottomwear",
        submenu: [
          { label: "All", url: "all" },
          { label: "Men's Trouser", url: "menstrouser" },
          { label: "Men's Underwear", url: "mensunderwear" },
        ],
      },
      { label: "Men's Foot Wear", url: "mensfootwear" },
      {
        label: "Women Ethnic",
        url: "womenethnic",
        submenu: [
          { label: "Women's Gowns", url: "womensgowns" },
          { label: "Women's Kurti", url: "womenskurti" },
          { label: "Women's Sarees", url: "womenssarees" },
        ],
      },
      { label: "Women Western", url: "womenwestern" },
    ],
  },
  {
    label: "Travel",
    url: "travel",
    icon: travel,
  },
  {
    label: "Electronics",
    url: "electronics",
    icon: electronics,
    submenu: [
      {
        label: "Coolers",
        url: "coolers",
        submenu: [
          { label: "Air Conditioners", url: "airconditioners" },
          { label: "Ceiling Fan", url: "ceilingfan" },
          { label: "Water Cooler", url: "watercooler" },
        ],
      },
      {
        label: "Camera",
        url: "camera",
        submenu: [
          { label: "Instant Camera", url: "instantcamera" },
          { label: "Panaroid Camera", url: "panaroidcamera" },
          { label: "DSLR", url: "dslr" },
        ],
      },
      { label: "Hard Drives & Storages", url: "harddrivesstorages" },
      {
        label: "Gaming",
        url: "gaming",
        submenu: [
          { label: "Gaming Keyboard", url: "gamingkeyboard" },
          { label: "Gaming Mouse", url: "gamingmouse" },
          { label: "Gaming Wifi", url: "gamingwifi" },
        ],
      },
      { label: "Women Western", url: "womenwestern" },
    ],
  },
  {
    label: "Appliances",
    url: "appliances",
    icon: appliances,
  },
  {
    label: "Home & Furniture",
    url: "homefurniture",
    icon: home,
    submenu: [
      { label: "Sofas", url: "sofas" },
      {
        label: "Kitchen Furniture",
        url: "kitchenfurniture",
        submenu: [
          { label: "Utensils", url: "utensils" },
          { label: "Stove & Gas", url: "stovegas" },
        ],
      },
      { label: "Home Decors", url: "homedecos" },
      {
        label: "Tables",
        url: "tables",
        submenu: [
          { label: "Dining Tables", url: "diningtables" },
          { label: "Study Table", url: "studytable" },
        ],
      },
      { label: "Tools & Utility", url: "toolsutility" },
    ],
  },
  {
    label: "Furniture",
    url: "furniture",
    icon: furniture,
  },
  {
    label: "Beauty & Toys",
    url: "beautytoysmore",
    icon: beauty,
    submenu: [
      { label: "Kids Toys", url: "kidstoys" },
      {
        label: "Men's Grooming",
        url: "mensgrooming",
        submenu: [
          { label: "Trimmer", url: "trimmer" },
          { label: "Face Wash", url: "facewash" },
        ],
      },
      { label: "Baby Care", url: "babycare" },
      {
        label: "Sports and Fitness",
        url: "sportsfitness",
        submenu: [
          { label: "Gym Kit", url: "gymkit" },
          { label: "Running Shoes", url: "runningshoes" },
          { label: "Dumbells", url: "dumbells" },
        ],
      },
      { label: "Books", url: "books" },
    ],
  },
  {
    label: "Grocery",
    url: "grocery",
    icon: grocery,
  },
];
