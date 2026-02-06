export type ProductType = {

    id: number;
        productName: string;
        authenticity: "prepared" | "original";
        volume_ml: number;
        scent: string;
        gender: "male" | "female" | "unisex";
        slug: string;
        description: string;
        active: boolean;
        isFeatured: boolean;
        price: number;

        images: {
            id: number;
            documentId: string;
            name: string;
            url: string;
            };

        brand: {
            id: number;
            brandName: string;
            slug: string;
            };
    
}