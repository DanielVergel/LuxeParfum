"use client"

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {

    const router = useRouter();

    return ( 
        <div className="flex items-center justify-between p-4 mx-auto  ">
            
           <div className="items-center justify-between">
                <div className=" hidden xl:flex">
                    <MenuList/>
                </div>

                <div className=" flex xl:hidden">
                    <ItemsMenuMobile/>
                </div>
            </div>

             <p className="absolute left-1/2 -translate-x-1/2 text-2xl cursor-pointer text-black " onClick={() => router.push("/")}> 
               
                Luxe <span className="font-bold"> Parfum </span>
            </p>

            <div className="flex items-center justify-between gap-2 sm:gap-7">

                    <ShoppingCart 
                    strokeWidth="1" 
                    className="cursor-pointer hidden xl:block" 
                    onClick={() => router.push("/cart")}/>

                    <Heart 
                    strokeWidth="1" 
                    className="cursor-pointer hidden xl:block" 
                    onClick={() => router.push("/loved-products")}/>

                    <User 
                    strokeWidth="1" 
                    className="cursor-pointer" />

                    <ToggleTheme 
                    className=" hidden xl:flex"
                    />
            </div>

        </div>
     );
}
 
export default Navbar;