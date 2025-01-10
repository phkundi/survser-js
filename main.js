let scriptReady = false;

if (typeof window !== "undefined") {
  window._survser = window._survser || {
    user: null,
  };
}

const baseUrl = "https://www.survser.com";

function loadSurvser() {
  scriptReady = true;
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      // We're not in a browser environment
      return resolve();
    }

    const scriptTag = document.createElement("script");
    scriptTag.src = `${baseUrl}/embed.min.js`;

    scriptTag.onload = () => {
      // Ensure the queue exists
      window.survserQueue = window.survserQueue || [];
      resolve();
    };

    scriptTag.onerror = () => {
      reject(new Error("Survser Initialization failed"));
    };

    document.head.appendChild(scriptTag);
  });
}

function _survser(...args) {
  if (typeof window === "undefined") {
    // We're not in a browser environment
    return;
  }

  // Initialize queue if it doesn't exist
  if (!window.survserQueue) {
    window.survserQueue = [];
  }

  // Add command to queue
  window.survserQueue.push(args);

  // Load script if not already loaded
  if (!scriptReady) {
    loadSurvser().catch((error) => {
      console.error("Failed to load Survser:", error);
    });
  }
}

export default _survser;
