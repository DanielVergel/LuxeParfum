import { useEffect, useState } from "react"
import { ProductType } from "@/types/product"

export type SortOption =
  | "priceAsc"
  | "priceDesc"
  | "nameAsc"
  | "nameDesc"
  | "popularity"

interface Filters {
  gender?: string;
  scent?: string;
  type?: string;
  isFeatured?: boolean;
  sort?: SortOption;
  search?: string;
  page?: number
}

export function useGetProducts(filters: Filters) {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [pagination, setPagination] = useState<any>(null)

  let query: string[] = []

  if (filters.gender) {
    query.push(`filters[gender][$eq]=${filters.gender}`)
  }

  if (filters.type) {
    query.push(`filters[type][$eq]=${filters.type}`)
  }

  if (filters.scent) {
    query.push(`filters[scent][slug][$eq]=${filters.scent}`)
  }

  if (filters.isFeatured) {
    query.push(`filters[isFeatured][$eq]=true`)
  }

  if (filters.search) {
  query.push(`filters[productName][$containsi]=${filters.search}`)
  }

  if (filters.page) {
  query.push(`pagination[page]=${filters.page}`)
  query.push(`pagination[pageSize]=10`)
  }

  const sortMap = {
  priceAsc: "price:asc",
  priceDesc: "price:desc",
  nameAsc: "productName:asc",
  nameDesc: "productName:desc",
  popularity: "isFeatured:asc"
  }

  if (filters.sort) {
    query.push(`sort=${sortMap[filters.sort]}`)
  }

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&${query.join("&")}`

  useEffect(() => {

    const fetchProducts = async () => {
      try {

        const res = await fetch(url)

        if (!res.ok) {
          throw new Error("Error al obtener productos")
        }

        const json = await res.json()
        setResult(json.data)
        setPagination(json.meta.pagination)

      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()

  }, [url])

  return { result, loading, error, pagination }
}