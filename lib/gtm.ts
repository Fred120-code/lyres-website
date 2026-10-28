
// Typage du dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Fonction générique pour pousser des événements
export const pushToDataLayer = (data: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

// Événement de page vue
export const trackPageView = (url: string) => {
  pushToDataLayer({
    event: "page_view",
    page: url,
  });
};

// Événement personnalisé
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
) => {
  pushToDataLayer({
    event: eventName,
    ...params,
  });
};
