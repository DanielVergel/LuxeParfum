import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (  

        <div className="mt-4 text-center">
           
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/Banner-Perfumes.jpg')] bg-center mt-5 "/> 
            
            <div></div>
            <p className="mt-14 "> Las fragancias mas famosas y usadas</p>
            <h4 className=" mt-2 text-5xl font-extrabold uppercase"> LUXEPARFUM </h4>
            <p className=" my-2 text-lg "> Las mejores replicas </p>
            <Link href="#" className={buttonVariants()}> Comprar </Link>

        </div>
    );
}
 
export default BannerProduct;