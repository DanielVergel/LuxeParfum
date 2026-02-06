"use client"

import { useGetFeaturesProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";


const FeaturedProducts = () => {
    const { result, loading} : ResponseType = useGetFeaturesProducts()

    console.log(result)

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
                            return <p key={product.id}> Product {product.productName} </p>
                        }))
                    }

                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default FeaturedProducts;