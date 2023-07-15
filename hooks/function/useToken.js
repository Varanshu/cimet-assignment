import { useState, useEffect } from "react";
import { useCheckExpiry, useSetExpiry } from "../../hooks";
import { LocalStorage, LocalStorageKeys } from "../../utils/LocalStorage";
export const useToken = () => {
  const [token, setToken] = useState(null);

  const fetchToken = async () => {
    try {
      const checkExpiry = useCheckExpiry(
        LocalStorage.get(LocalStorageKeys.EXPIRATION_DATE)
      );

      if (checkExpiry) {
        const data = await fetch("/api/getToken", {
          method: "POST"
        });
        const values = await data.json();
        const { token, expiration } = values;
        LocalStorage.set(LocalStorageKeys.TOKEN, JSON.stringify(token));
        useSetExpiry(expiration);
        setToken(token);
      } else {
        const value = LocalStorage.get(LocalStorageKeys.TOKEN);
        setToken(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return token;
};
