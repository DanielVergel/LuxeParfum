"use client"

import IconButton from "@/components/icon-button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductType } from "@/types/product"

import { Expand, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter()

  const {
    productName,
    images,
    secondaryImage,
    slug,
    price,
    discountPrice,
    brand,
  } = product

  const mainImage = images?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`
    : "/placeholder.png"

  const secondImg = secondaryImage?.url
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${secondaryImage.url}`
    : null

  const formatCOP = (value: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value)

  return (
    <Card className="group border-none rounded-sm shadow-none dark:bg-neutral-900 bg-neutral-50">
      <CardContent className="relative flex items-center justify-center px-4 py-2">

        {/* Badge de oferta */}
        {discountPrice && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            OFERTA
          </span>
        )}

        {/* Imagen principal y secundaria */}
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={mainImage}
            alt={productName}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              secondImg ? "group-hover:opacity-0" : ""
            }`}
          />
          {secondImg && (
            <img
              src={secondImg}
              alt={`${productName} secondary`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          )}
        </div>

        {/* Botones hover */}
        <div className="absolute w-full px-4 bottom-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          <div className="flex justify-center gap-4">
            <IconButton
              onClick={() => router.push(`product/${slug}`)}
              icon={<Expand size={20} />}
              className="text-gray-600"
            />
            <IconButton
              onClick={() => console.log("add item")}
              icon={<ShoppingCart size={20} />}
              className="text-gray-600"
            />
          </div>
        </div>
      </CardContent>

      {/* Info del producto */}
      <div className="flex flex-col px-4 pb-4">
        <p className="uppercase truncate w-full text-xs text-gray-500">
          {brand.brandName}
        </p>

        <h3 className="text-lg uppercase truncate w-full">{productName}</h3>

        <div className="flex gap-2 font-bold">
          {discountPrice ? (
            <>
              <p className="text-gray-400 line-through">{formatCOP(price)}</p>
              <p className="text-red-600">{formatCOP(discountPrice)}</p>
            </>
          ) : (
            <p>{formatCOP(price)}</p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProductCard