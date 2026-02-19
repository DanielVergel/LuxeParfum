"use client"

import { useGetCategories } from "@/api/getProducts";

const ChooseCategory = () => {
    const {result, loading} = useGetCategories()

    console.log(result)
    
    return ( 
        <p>Choose Category</p>
     );
}
 
export default ChooseCategory;