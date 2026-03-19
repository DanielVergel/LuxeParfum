import { useEffect, useState } from "react"
import { ProductType } from "@/types/product"
import { buildStrapiQuery, ProductFilters } from "@/lib/buildStrapiQuery"


export function useGetProducts(filters: ProductFilters) {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [pagination, setPagination] = useState<any>(null)


  const query = buildStrapiQuery(filters)

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&${query}`

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