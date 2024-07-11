let scriptReady = false;

const baseUrl = "https://www.survser.com";

function loadSurvser() {
  scriptReady = true;
  new Promise(function (resolve, reject) {
    if (typeof document === "undefined") {
      // We're not in a browser environment, so just return
      return;
    }

    const scriptTag = document.createElement("script");
    scriptTag.src = `${baseUrl}/embed.min.js`;

    scriptTag.onload = function () {
      resolve();
    };

    scriptTag.onerror = function () {
      reject(new Error("Survser Initalization failed"));
    };

    document.head.appendChild(scriptTag);
  });
}

function _survser() {
  if (typeof window === "undefined") {
    // We're not in a browser environment, so just return
    return;
  }

  if (!scriptReady) {
    loadSurvser();
  }

  if (!window.survserQueue) {
    window.survserQueue = [];
  }

  window.survserQueue.push(arguments);
}

export default _survser;
