import { defineNuxtPlugin } from "#app";
import _survser from "survser-js";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    _survser("setProject", "65cffe99bd9ad842f35f25a7");
    _survser("setAPIKey", "c62bc297-42a1-4d6f-8039-8713e6a8c532");
  }
});
