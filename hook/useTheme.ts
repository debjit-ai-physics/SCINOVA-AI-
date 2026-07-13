"use client";

import { useEffect, useState } from "react";

export default function useTheme() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {

    document.documentElement.className = theme;

  }, [theme]);

  return {

    theme,

    setTheme

  };

}