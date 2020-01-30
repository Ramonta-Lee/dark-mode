import { useLocalStorage } from "./useLocalStorage";
import React, { useEffect } from "react";

export const useDark = () => {
  const [value, setValue] = useLocalStorage("dark-mode");
  console.log(document.body);

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      return document.body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
