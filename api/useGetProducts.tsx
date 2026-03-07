import { useEffect, useState } from "react"
import { ProductType } from "@/types/product"

interface Filters {
  gender?: string
  scent?: string
  type?: string
  isFeatured?: boolean
}

export function useGetProducts(filters: Filters) {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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

      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()

  }, [url])

  return { result, loading, error }
}