import { Button } from "@/components/ui/button"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation";
import ToggleTheme from "./toggle-theme";

const ItemsMenuMobile = () => {    

  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer" asChild> 
            <Menu/>
      </SheetTrigger>
      <SheetContent>

        <SheetHeader className="grid grid-cols-3 items-center dark:bg-neutral-700  bg-neutral-200 py-4">

          <div className="flex justify-start">
            <ToggleTheme />
          </div>

          <SheetTitle className="text-center text-2xl">
            Luxe <span className="font-bold"> Parfum </span>
          </SheetTitle>

          <div />

        </SheetHeader>

        <div className="grid flex-1 auto-rows-min px-4 ">
          
          <div 
          className=" hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer  px-3  py-3 mt-2"
           onClick={() => router.push("/male")}>
            HOMBRE</div>
          <div 

          className="hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer  px-3 py-3 mt-2"
          onClick={() => router.push("/female")}>
            MUJER</div>

          <div 
          className="hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer  px-3 py-3 mt-2"
          onClick={() => router.push("/accesories")}>
            ACCESORIOS</div>

          <div 
          className="hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer   px-3 py-3 mt-2"
          onClick={() => router.push("/sale")}>
            SALE</div>

           <div 
          className="hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer   px-3 py-3 mt-2"
          onClick={() => router.push("/shop")}>
            CARRITO</div>
          
          <div 
          className="hover:bg-neutral-100 dark:hover:bg-neutral-700  transition-all duration-200 cursor-pointer   px-3 py-3 mt-2"
          onClick={() => router.push("/sale")}>
            FAVORITO</div>

        </div>

        <SheetFooter className="px-4 text-sm text-neutral-500">
            <p>© 2026 Perfumes Store</p>
            <p>Envíos a toda Colombia 🇨🇴</p>
        </SheetFooter>
        
      </SheetContent>
    </Sheet>
  )
}

export default ItemsMenuMobile;
