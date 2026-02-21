"use client"
import { ResponseType } from "@/types/response";

import { useGetScent } from "@/api/getProducts";
import Link from "next/link";
import { Scent } from "@/types/brand";

const ChooseScent = () => {
    const {result, loading} : ResponseType = useGetScent()

    return ( 
        <div className=" max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8"> Elige tu marca favorita</h3>

            <div className=" grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {!loading && result != undefined && 
                     result.map((scent: Scent) => (
                        
                        <Link
                        key={scent.id}
                        href={`/brands/${scent.slug}`}
                        className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"

                        >
                            <img 
                                src={
                                    scent.scentImage?.url
                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${scent.scentImage.url}`
                                        : "/placeholder.png"
                                    }
                                alt={scent.scentName} 
                                className=" max-w-[270px] transition duration-300 ease-in-out round-lg hover:scale-110"
                            />
                            
                        </Link>
                    )
                )}

            </div>

        </div>
     );
}
 
export default ChooseScent;