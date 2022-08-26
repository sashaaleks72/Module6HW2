interface ProductDto {
    id: string;
    title: string;
    quantity: number;
    price: number;
    imgUrl: string;
    description: string;
    manufacturerCountry: string;
    capacity: number;
    warrantyInMonths: number;
}

export default ProductDto;
