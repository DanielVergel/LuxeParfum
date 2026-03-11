"use client"

import { SortOption, useGetProducts } from "@/api/useGetProducts"
import { Checkbox } from "@/components/ui/checkbox"
import { ProductType } from "@/types/product"
import { ResponseType } from "@/types/response"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckboxGroup } from "./components/checkbox"
import ProductCard from "./components/productCard"
import { useState } from "react"
import ProductSort from "./components/ProductSort"


export default function ShopPage() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSortChange = (value: SortOption) => {
  const params = new URLSearchParams(searchParams.toString())

  params.set("sort", value)

  router.push(`/shop?${params.toString()}`)
}

  const gender = searchParams.get("gender") || undefined
  const scent = searchParams.get("scent") || undefined
  const type = searchParams.get("type") || undefined
  const sort = searchParams.get("sort") as SortOption | undefined

  const { result, loading, error } : ResponseType = useGetProducts({
    gender,
    scent,
    type,
    sort
  })


  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 py-6 items-start">
      
      {/* Sidebar de filtros */}
      <aside className="w-full md:w-60 shrink-0 rounded-md bg-neutral-50 p-4">
        <CheckboxGroup />
      </aside>

      <ProductSort onSortChange={handleSortChange} />

      {/* Grid de productos */}
      <main className="flex-1">
        {loading && <p>cargando ...</p> }
        {error && <p className="text-red-600">Error al cargar productos</p>}
        {!loading && !error && (!result || result.length === 0) && (
          <p>No se encontraron productos.</p>
        )}

        {!loading && result && result.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {result.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

    </div>
  )
}