"use client"

import { useGetProducts } from "@/api/useGetProducts"
import { ProductType } from "@/types/product"
import { ResponseType } from "@/types/response"
import { useSearchParams } from "next/navigation"


export default function ShopPage() {

  const searchParams = useSearchParams()

  const gender = searchParams.get("gender") || undefined
  const scent = searchParams.get("scent") || undefined
  const type = searchParams.get("type") || undefined

  const { result, loading, error } : ResponseType = useGetProducts({
    gender,
    scent,
    type
  })

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      {result?.map((product: ProductType) => (
        <div key={product.id}>
          {product.productName}
        </div>
      ))}
    </div>
  )
}