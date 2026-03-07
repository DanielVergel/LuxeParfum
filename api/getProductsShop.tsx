import { useEffect, useState } from "react"

interface Filters {
  gender?: string
  scent?: string
  type?: string
}

export function useGetProductsShop(filters: Filters) {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const { gender, scent, type } = filters

  let queryFilters: string[] = []

  if (gender) {
    queryFilters.push(`filters[gender][$eq]=${gender}`)
  }

  if (type) {
    queryFilters.push(`filters[type][$eq]=${type}`)
  }

  if (scent) {
    queryFilters.push(`filters[scent][slug][$eq]=${scent}`)
  }

  const query = queryFilters.join("&")

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*${query ? `&${query}` : ""}`

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()

        setResult(json.data)
        setLoading(false)

      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [url])

  return { loading, result, error }
}