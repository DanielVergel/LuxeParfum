export type SortOption =
  | "priceAsc"
  | "priceDesc"
  | "nameAsc"
  | "nameDesc"
  | "popularity"

export type ProductFilters = {
  gender?: string
  scent?: string        
  type?: string
  brand?: string       
  search?: string
  sort?: SortOption
  page?: number
  pageSize?: number
  isFeatured?: boolean
}

export function buildStrapiQuery(filters: ProductFilters) {

  const query: string[] = []

  // Filters

  if (filters.gender) {
    query.push(`filters[gender][$eq]=${filters.gender}`)
  }

  if (filters.type) {
    query.push(`filters[type][$eq]=${filters.type}`)
  }

  if (filters.brand) {
    query.push(`filters[brand][slug][$eq]=${filters.brand}`)
  }

  if (filters.isFeatured) {
    query.push(`filters[isFeatured][$eq]=true`)
  }

  // Scent Filter
  if (filters.scent) {

    const scents = filters.scent.split(",")

    scents.forEach((scent, index) => {
      query.push(`filters[scent][slug][$in][${index}]=${scent}`)
    })
  }

  // Search
  if (filters.search && filters.search.trim() !== "") {
    query.push(`filters[productName][$containsi]=${filters.search}`)
  }

  // Sort
  const sortMap: Record<SortOption, string> = {
    priceAsc: "price:asc",
    priceDesc: "price:desc",
    nameAsc: "productName:asc",
    nameDesc: "productName:desc",
    popularity: "isFeatured:desc"
  }

  if (filters.sort) {
    query.push(`sort=${sortMap[filters.sort]}`)
  }

  // Pagination
  const page = filters.page || 1
  const pageSize = filters.pageSize || 10

  query.push(`pagination[page]=${page}`)
  query.push(`pagination[pageSize]=${pageSize}`)

  return query.join("&")
}