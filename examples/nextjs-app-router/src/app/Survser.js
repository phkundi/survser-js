"use client";

import { useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import _survser from "survser-js";

export default function Survser() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Ensure Survser is only initialized in the browser
    if (typeof window !== "undefined") {
      // We recommend saving your project ID and API key as environment variables
      _survser("setProject", "<PROJECT_ID>");
      _survser("setAPIKey", "<API_KEY>");
      // Identify the user (optional)
      _survser("identifyUser", {
        id: user?.id,
        email: user?.email,
        name: user?.name,
      });
    }
  }, []);

  return null;
}
