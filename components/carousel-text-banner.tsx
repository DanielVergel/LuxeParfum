"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
  { 
    id: 1,
    title:"Perfumes de alta calidad y duracion",
    description: "Perfumes originales y preparados para el uso diario",
    link:"#!"

  },
   { 
    id: 2,
    title:" Perfumes Originales",
    description: " De los mas pedidos y populares ",
    link:"#!"

  },
   { 
    id: 3,
    title:" Perfumes Preparados",
    description: " Esencias exactas a las originales y de muy larga duracion",
    link:"#!"

  },
   { 
    id: 4,
    title:" Accesorios",
    description: "Consigue tambien accesorios para complementar tu compra",
    link:"#!"

  },
]

const CarouselTextBanner = () => {

    const router = useRouter()

    return ( 

    <div className="bg-gray-200 dark:bg-primary ">
      <Carousel 
        className=" w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
        
        >
        <CarouselContent>
          {dataCarouselTop.map(({id, title, description, link}) => 
              <CarouselItem 
              key={id} 
              onClick={() => router.push(link)}
              className="cursor-pointer"
              >

                <div className="-mt-3 -mb-3">
                    <Card className="shadow-none border-none bg-transparent">
                      <CardContent className="flex flex-col justify-center items-center ">
                          <p className=" sm:text-lg text-wrap dark:text-secondary">
                            {title}
                          </p>
                          <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                            {description}
                          </p>
                      </CardContent>
                    </Card>
                </div>

              </CarouselItem>
          )}

        </CarouselContent>
         
        </Carousel>
    </div> 

    );
}
 
export default CarouselTextBanner;