export type ProductType = {

    id: number;
        productName: string;
        authenticity: "prepared" | "original";
        volume_ml: number;
        brand: {
            brandName: string;
            slug: string;
            id: number;
            brandImage: {
                url: string;
                name: string;
            }
        }
       
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
    
}