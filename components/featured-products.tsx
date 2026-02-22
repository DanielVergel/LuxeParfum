"use client"

import { useGetFeaturesProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";



const FeaturedProducts = () => {
    const { result, loading} : ResponseType = useGetFeaturesProducts()
    const router = useRouter();

    return ( 
        <div className=" py-4 mx-auto sm:py-16 sm:px-24 -mt-4">
            
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel className=" flex justify-center ">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3}/>

                    )}
                    
                    {result != null && (
                        result.map((product: ProductType ) => {

                           const {id, productName, images, slug, scent, price, discountPrice} = product;
                       
                           const imageUrl = images?.[0]?.url;

                           return (
                            <CarouselItem key={id} className=" basis-[280px] sm:basis-[320px] md:basis-[360px] lg:basis-[400px]">

                                <div className="p-1">

                                    <Card className=" group py-4 border-none rounded-md shadow-none bg-neutral-50">
                                        
                                        <CardContent className="relative flex items-center justify-center px-6 py-2">
                                            {discountPrice && (
                                                <span className="absolute top-1 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-md shadow-md z-10">
                                                    OFERTA
                                                </span>
                                                )}
                                            <div className="relative w-full aspect-square uppercase">
                                                    <img
                                                    src={
                                                        imageUrl
                                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`
                                                        : "/placeholder.png"
                                                    }
                                                    alt={productName}
                                                    className="absolute inset-0 w-full h-full object-cover  "
                                                    />
                                                </div>

                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">

                                                        <div className="flex justify-center gap-x-6">
                                                            <IconButton 
                                                                onClick={() => router.push(`product/${slug}`)} 
                                                                icon={<Expand size={20}/>}
                                                                className=" text-gray-600"
                                                                />
                                                            
                                                            <IconButton 
                                                                onClick={() => console.log("add item")} 
                                                                icon={<ShoppingCart size={20}/>}
                                                                className=" text-gray-600"
                                                                />
                                                            
                                                        </div>
                                                </div>
                                                
                                        </CardContent>

                                            <div className="flex flex-col px-8">

                                                {/* <div className="flex items-center justify-between font-extralight gap-3">

                                                    <p className=" px-4 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit"> 
                                                        {scent}
                                                    </p>

                                                </div> */}

                                                <h3 className="text-lg uppercase truncate w-full  ">
                                                    {productName}
                                                    
                                                </h3>

                                                <div className=" flex  font-bold gap-2">
                                                     {discountPrice ? (
                                                        <>
                                                            <p className="text-gray-400 line-through ">
                                                                ${price}
                                                            </p>
                                                         
                                                                <p className=""> Desde </p>
                                                                <p className="text-red-600"> ${discountPrice} </p>
                                                          
                                                        </>
                                                    ) : (
                                                        <p>${price}</p>
                                                    )}
                                                </div>

                                                 <div className="flex items-center justify-end font-extralight gap-3">

                                                    <p className=" px-4 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit"> 
                                                        {scent}
                                                    </p>

                                                </div>


                                                
                                            </div>
                                    </Card>

                                </div>
                            </CarouselItem>
                           )
                        }))
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
     );
}
 
export default FeaturedProducts;