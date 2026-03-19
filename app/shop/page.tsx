"use client"

import { useGetProducts } from "@/api/useGetProducts"
import { ProductType } from "@/types/product"
import { ResponseType } from "@/types/response"
import { useRouter, useSearchParams } from "next/navigation"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import CheckboxGroup from "./components/checkbox"
import ProductCard from "./components/productCard"
import ProductSort from "./components/ProductSort"
import { SortOption } from "@/lib/buildStrapiQuery"


export default function ShopPage() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSortChange = (value: SortOption) => {
  const params = new URLSearchParams(searchParams.toString())

  params.set("sort", value)
  router.push(`/shop?${params.toString()}`)
}

 const handleSearch = (value: string) => {

    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }

    router.push(`/shop?${params.toString()}`)
  }

  const handlePageChange = (newPage: number) => {
  const params = new URLSearchParams(searchParams.toString())

    params.set("page", String(newPage))
    router.push(`/shop?${params.toString()}`)
  }

  const handleScentChange = (scent: string) => {

  const params = new URLSearchParams(searchParams.toString())

  const currentScents = params.get("scent")

  let scentsArray = currentScents ? currentScents.split(",") : []

  if (scentsArray.includes(scent)) {
   
    scentsArray = scentsArray.filter(s => s !== scent)
  } else {
    
    scentsArray.push(scent)
  }

  if (scentsArray.length > 0) {
    params.set("scent", scentsArray.join(","))
  } else {
    params.delete("scent")
  }

  params.set("page", "1")

  router.push(`/shop?${params.toString()}`)
}


  const gender = searchParams.get("gender") || undefined
  const scent = searchParams.get("scent") || undefined
  const type = searchParams.get("type") || undefined
  const sort = searchParams.get("sort") as SortOption | undefined
  const search = searchParams.get("search") ||  undefined
  const page = Number(searchParams.get("page")) || 1

  const { result, loading, error, pagination } : ResponseType = useGetProducts({
    gender,
    scent,
    type,
    sort,
    search,
    page
  })


  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 py-6 items-start">

  {/* Sidebar de filtros */}
  <aside>
    <div className="w-full md:w-60 shrink-0 rounded-md bg-neutral-50 dark:bg-neutral-900 p-4 hidden md:flex">
      <CheckboxGroup onScentChange={handleScentChange} />
    </div>
    <div className="">
      
    </div>
  </aside>

  <main className="flex-1">

    {/* Barra superior */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar perfumes..."
        defaultValue={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full sm:max-w-xs border rounded-md px-3 py-2 text-sm "
      />

      {/* Banner Genero */}

      {/* Orden */}
      <ProductSort onSortChange={handleSortChange} />

    </div>

    {/* Grid de productos */}
    {loading && <p>cargando ...</p>}
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

    {/* Botones de Paginacion*/}
    {pagination && (
      <Pagination className="mt-10">
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious
               className="cursor-pointer"
               onClick={() => page > 1 && handlePageChange(page - 1)}
            />
          </PaginationItem>

          {Array.from({ length: pagination.pageCount }).map((_, i) => {
            const pageNumber = i + 1

            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={pageNumber === page}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem >
            <PaginationNext
              className="cursor-pointer"
              onClick={() => page < pagination.pageCount && handlePageChange(page + 1)}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    )}

  </main>

</div>
  )
}