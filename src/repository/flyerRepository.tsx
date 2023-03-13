import { getProducts, getProductsNextBatch} from '../services/firestoreService'
import { Product } from '../models/Product';

export async function getAll() {
    const result = await getProducts()
    return result
}

export async function getAllNext(lastProduct: Product) {
    const result = await getProductsNextBatch(lastProduct)
    return result
}