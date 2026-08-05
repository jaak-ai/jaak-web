"use client";

import { useEffect } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";

export default function ThankYouTracking() {
  useEffect(() => {
    gtmEvent("kyc_igaming_guia_page_view", { page_path: window.location.pathname, page_type: "thank_you" });
  }, []);
  return null;
}
