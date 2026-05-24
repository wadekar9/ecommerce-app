interface Dimensions {
    readonly width: number;
    readonly height: number;
    readonly depth: number;
}

interface Meta {
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly barcode: string;
    readonly qrCode: string;
}

interface Review {
    readonly rating: number;
    readonly comment: string;
    readonly date: Date;
    readonly reviewerName: string;
    readonly reviewerEmail: string;
}

export interface IProduct {
    readonly id: number;
    readonly title: string;
    readonly price: number;
    readonly discountPercentage: number;
    readonly rating: number;
    readonly tags: string[];
    readonly reviews: Review[];
    readonly thumbnail: string;
    quantity?: number;
}

export interface IProductDetails {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly price: number;
    readonly discountPercentage: number;
    readonly rating: number;
    readonly stock: number;
    readonly tags: string[];
    readonly brand: string;
    readonly sku: string;
    readonly weight: number;
    readonly dimensions: Dimensions;
    readonly warrantyInformation: string;
    readonly shippingInformation: string;
    readonly availabilityStatus: string;
    readonly reviews: Review[];
    readonly returnPolicy: string;
    readonly minimumOrderQuantity: number;
    readonly meta: Meta;
    readonly images: string[];
    readonly thumbnail: string;
}
