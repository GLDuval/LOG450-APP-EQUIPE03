import { getGroceries, getGroceriesPositions} from '../services/firestoreService'

export async function getAll() {
    const result = await getGroceries()
    return result
}

export async function getAllPositions() {
   const result = getGroceriesPositions()
   return result
}