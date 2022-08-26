import ProductDto from "../dtos/ProductDto";

const apiUrl = "https://localhost:44374/api";

export const getProducts = async (): Promise<ProductDto[]> => {
    const result: Response = await fetch(`${apiUrl}/teapots`);
    const response = await result.json();

    const products: ProductDto[] = response;

    return products;
};

export const getProductById = async (
    id: string | undefined
): Promise<ProductDto> => {
    const result: Response = await fetch(`${apiUrl}/teapots/${id}`);
    const response: ProductDto = await result.json();

    const product: ProductDto = response;

    return product;
};

export const delProductById = async (id: string | undefined): Promise<any> => {
    const requestOptions = {
        method: "DELETE",
    };

    await fetch(`${apiUrl}/teapots/${id}`, requestOptions);
};

export const addNewProduct = async (product: ProductDto): Promise<any> => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };

    await fetch(`${apiUrl}/teapots`, requestOptions);
};

export const changeProduct = async (
    id: string | undefined,
    product: ProductDto | undefined
): Promise<any> => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    };

    await fetch(`${apiUrl}/teapots/${id}`, requestOptions);
};
