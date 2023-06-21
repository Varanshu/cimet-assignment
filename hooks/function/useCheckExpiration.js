import { LocalStorage, LocalStorageKeys } from "../../utils/LocalStorage"

export const useCheckExpiration = () => {
    const expirationDate = LocalStorage.get(LocalStorageKeys.EXPIRATION_DATE)
    const data = LocalStorage.get(LocalStorageKeys.COMPANIES_DATA)
    if (data && new Date(expirationDate) > new Date()) {
        return data
    } else {
        return false
    }
}