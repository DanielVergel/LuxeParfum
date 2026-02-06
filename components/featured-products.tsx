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
        <div className=" max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && (
                        <SkeletonSchema grid={3}/>

                    )}
                    
                    {result != null && (
                        result.map((product: ProductType ) => {

                           const {id, productName, images, slug, scent} = product;
                       
                           const imageUrl = images?.[0]?.url;

                           return (
                            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none">
                                        <CardContent className="relative flex items-center justify-center px-6 py-2">

                                            <div className="relative w-full aspect-square">
                                                    <img
                                                    src={
                                                        imageUrl
                                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`
                                                        : "/placeholder.png"
                                                    }
                                                    alt={productName}
                                                    className="absolute inset-0 w-full h-full object-cover"
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

                                            <div className="flex justify-between gap-4 px-8">

                                                <h3 className="text-lg font-bold  line-clamp-2 min-h-[4rem]">
                                                    {productName}
                                                </h3>

                                                <div className="flex items-center justify-between font-extralight gap-3">

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