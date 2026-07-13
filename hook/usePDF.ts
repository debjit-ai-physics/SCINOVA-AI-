"use client";

import { useState } from "react";

export default function usePDF() {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
}