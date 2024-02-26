// plugins/survser.js

import { defineNuxtPlugin } from "#app";
import _survser from "survser-js";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Replace with actual logic to retrieve user data
    const user = {
      id: "12345",
      email: "john@doe.com",
      name: "John Doe",
    };

    // Replace with actual project ID and API key
    _survser("setProject", "<PROJECT_ID>");
    _survser("setAPIKey", "<API_KEY>");
    _survser("identifyUser", {
      id: user.id,
      email: user.email,
      name: user.name,
    });
  }
});
