"use strict";

let scriptReady = false;

function loadSurvser() {
  scriptReady = true;
  new Promise(function (resolve, reject) {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://js.refiner.io/v001/client.js";

    scriptTag.onload = function () {
      resolve();
    };

    scriptTag.onerror = function () {
      reject(new Error("Survser Initalization failed"));
    };

    document.head.appendChild(scriptTag);
  });
}

window.survserQueue = window.survserQueue || [];
window._survser = function () {
  if (!scriptReady) {
    loadRefinerClient();
  }
  survserQueue.push(arguments);
};

module.exports = window._survser;
