
// import { Link } from "react-router-dom";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem } from "../../../utils/menuItems";
import MenuItems from "./MenuItems";

const Categories = () => {
  return (
    <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow ">
      <div className="flex items-center justify-between mt-4 menus">
        {MenuItem.map((menu, index) =>{
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        }
        )}
      </div>
    </section>
  );
};

export default Categories;
