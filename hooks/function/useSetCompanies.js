import { LocalStorage, LocalStorageKeys } from "../../utils/LocalStorage"

export const useSetCompanies = (date, data) => {
    LocalStorage.set(LocalStorageKeys.EXPIRATION_DATE, JSON.stringify(date))
    LocalStorage.set(LocalStorageKeys.COMPANIES_DATA, JSON.stringify(data))
}