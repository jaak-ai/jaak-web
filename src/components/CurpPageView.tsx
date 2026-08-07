"use client";

import { useEffect } from "react";
import { gtmEvent } from "./GoogleTagManager";

export default function CurpPageView() {
  useEffect(() => {
    gtmEvent("curp_page_view", { page_path: window.location.pathname });
  }, []);
  return null;
}
