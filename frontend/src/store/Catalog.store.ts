import { makeAutoObservable } from "mobx";
import ProductDto from "../dtos/ProductDto";

export class Catalog {
    productList: ProductDto[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    delProductById(id: string) {
        const index = this.productList.findIndex(
            (product) => product.id === id
        );

        if (index !== -1) this.productList.splice(index, 1);
    }

    addProduct(product: ProductDto) {
        this.productList.push(product);
    }

    changeProduct(product: ProductDto) {
        const index = this.productList.findIndex((p) => p.id === product.id);

        if (index !== -1) this.productList[index] = product;
    }
}
