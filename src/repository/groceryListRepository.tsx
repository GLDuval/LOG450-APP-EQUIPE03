import { getGroceryList, addGroceryListItem, modifyGroceryListItemQuantity} from '../services/firestoreService'
import { Product } from '../models/Product';

export async function getList() {
    const result = await getGroceryList()
    return result
}

export async function addItem(product: Product, quantity: number) {
    const result = await addGroceryListItem(product, quantity)
    return result
}

export async function modifyQuantity(product: Product, quantity: number) {
    const result = await modifyGroceryListItemQuantity(product, quantity)
    return result
}