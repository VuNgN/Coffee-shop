import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import HomeIcon from "@material-ui/icons/Home";
import style from "./style";

const useStyle = style();
export default [
  {
    name: "Home",
    icon: <HomeIcon />,
    index: 1,
    path: "/"
  },
  {
    name: "Product",
    icon: <FreeBreakfastIcon />,
    index: 2,
    path: "/product"
  }
];
