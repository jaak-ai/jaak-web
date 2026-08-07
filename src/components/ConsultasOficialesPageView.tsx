"use client";

import { useEffect } from "react";
import { gtmEvent } from "./GoogleTagManager";

export default function ConsultasOficialesPageView() {
  useEffect(() => {
    gtmEvent("consultas_oficiales_page_view", { page_path: window.location.pathname });
  }, []);
  return null;
}
