import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api'}),
    endpoints: (builer) => ({
        fetchProducts: builer.query<Product[], void>({
            query: () => ({url: 'products'})
        }),
        fetchProductDetails: builer.query<Product, number>({
            query: (productId) => `products/${productId}`
        })
    })
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;