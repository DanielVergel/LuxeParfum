import { useEffect, useState } from "react"

export function useGetBrand() {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/brands?populate=*`

    const [resultBrand, setResultBrand] = useState(null)
    const [loadingBrand, setLoadingBrand] = useState(true)
    const [errorBrand, setErrorBrand] = useState("")

    useEffect (() => {

        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResultBrand(json.data)
                setLoadingBrand(false)
            } 
            catch (error: any) {
                setErrorBrand(error)
                setLoadingBrand(false)

            }
        }) ()

    }, [url])

    return {loadingBrand, resultBrand, errorBrand} 
}