import { Seller } from "./Seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    first: boolean,
    last: boolean,
    number: number,
    totalPages: number,
    totalElements: number,
    numberOfElements?: number,
    size?: number,
    empty?: boolean
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}
