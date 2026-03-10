"use client"

import { useGetProducts } from "@/api/useGetProducts"
import { Checkbox } from "@/components/ui/checkbox"
import { ProductType } from "@/types/product"
import { ResponseType } from "@/types/response"
import { useSearchParams } from "next/navigation"
import { CheckboxGroup } from "./components/checkbox"


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

  if (loading) return <p>...</p>

  return (
    <div className="flex gap-8 px-4">

    <div className="w-56 shrink-0 rounded-md bg-neutral-100">
      <div className="px-2 mt-2 mb-2"><CheckboxGroup /></div>
    </div>

    <div className="flex-1">
      {result?.map((product: ProductType) => (
        <div key={product.id}>
          {product.productName}
        </div>
      ))}
    </div>

  </div>
)
}