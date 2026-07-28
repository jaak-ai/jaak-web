"use client";

import { useEffect } from "react";
import { gtmEvent } from "./GoogleTagManager";

export default function RiskListsPageView() {
  useEffect(() => {
    gtmEvent("listas_riesgo_page_view", { page_path: window.location.pathname });
  }, []);
  return null;
}
