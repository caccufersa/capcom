// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do Google Analytics

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  // Carrega o script do Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Inicializa o dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
  });

  // Torna gtag disponível globalmente
  (window as any).gtag = gtag;
};

// Track page view
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom event
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Declare window.dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}
