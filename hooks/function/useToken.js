import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useCheckExpiry, useSetExpiry } from "../../hooks";
import { LocalStorage, LocalStorageKeys } from "../../utils/LocalStorage";

export const useToken = () => {
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

        Cookies.set("token", token, expiration);
        useSetExpiry(expiration);
        setToken(token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);
};
