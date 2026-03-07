export type ProductType = {

    id: number;
        productName: string;
        authenticity: "prepared" | "original";
        volume_ml: number;
       
        gender: "male" | "female" | "unisex";
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        price: number;
        discountPrice: number;

         scent: {
            scentName: string;
         }

        images?: {
            id: number;
            documentId: string;
            name: string;
            url: string;
            }[] | null;
        
            secondaryImage: {
                url: string;
            }


        brand: {
            id: number;
            brandName: string;
            slug: string;
            };
    
}