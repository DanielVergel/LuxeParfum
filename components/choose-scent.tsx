"use client"
import { ResponseType } from "@/types/response";
import { useGetScent } from "@/api/getProducts";
import { Scent } from "@/types/brand";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import SkeletonScent from "./skeletonScent";

const ChooseScent = () => {
    const {result, loading} : ResponseType = useGetScent()
    console.log (result)
    const router = useRouter();

    return ( 
        
        <div className=" max-w-full py-4 px-4 mx-auto mt-10">

            <Carousel className="flex justify-center relative">

                <CarouselContent className="">

                     {loading && (
                        <SkeletonScent grid={5}/>

                    )}

                    {result != null && ( 
                     result.map((scent: Scent) => {

                         const {id, scentName, scentImage} = scent;

                         return (
                            
                            <CarouselItem 
                                key={id} 
                                className="  basis-[320px] sm:basis-[360px] md:basis-[400px] lg:basis-[440px] " >

                                    <div className="">

                                        <Card className="p-0 border-none shadow-none">

                                            <CardContent className="relative p-0 ">

                                                <div className="relative w-full h-[90px] sm:h-[130px] md:h-[170px] lg:h-[210px] ">
                                                        <img
                                                            src={
                                                                scentImage.url
                                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${scentImage.url}`
                                                                : "/placeholder.png"
                                                            }
                                                            alt={scentName}
                                                            className="absolute border rounded inset-0 w-full h-full object-cover"
                                                        />
                                                          <h3 className=" px-8 uppercase  absolute w-full text-2xl text-white bottom-5 backdrop-blur-lg "> 
                                                                {scentName}
                                                            </h3>

                                                </div>

                                            </CardContent>
            
                                        </Card>

                                    </div>

                            </CarouselItem>
                         )
                     }
                    ))}
                    
                </CarouselContent>
                <CarouselPrevious className="left-2"/>
                <CarouselNext className=" right-2"/>
            </Carousel>

        </div>
     );
    }
 
export default ChooseScent;