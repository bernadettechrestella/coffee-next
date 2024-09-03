import { API_BASE_URL } from '../constants'

export const getProductList = async () => {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }
    return response.json()
}

export const getProductById = async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    if (!response.ok) {
        throw new Error('Failed to fetch product')
    }
    return response.json()
}
