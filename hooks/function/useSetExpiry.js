import { LocalStorage, LocalStorageKeys } from "../../utils/LocalStorage";

export const useSetExpiry = (date) => {
  LocalStorage.set(LocalStorageKeys.EXPIRATION_DATE, JSON.stringify(date));
};
