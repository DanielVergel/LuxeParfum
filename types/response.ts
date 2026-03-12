type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type ResponseType = {
    result: any,
    loading: boolean;
    error: string
    pagination?: Pagination  
}