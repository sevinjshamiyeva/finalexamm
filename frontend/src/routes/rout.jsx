import UserRout from "../pages/UserRout";
import AddPages from "../pages/addpages";
import Basket from "../pages/basket";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist";

export const routers=[
    {
        path: "/",
        element: <UserRout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/basket",
            element: <Basket/>,
          },
          {
            path: "/wishlist",
            element: <Wishlist/>,
          },
          {
            path: "/addpages",
            element: <AddPages/>,
          },
        ],
      },
]