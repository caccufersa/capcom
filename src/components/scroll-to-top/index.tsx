import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se a URL tem âncora (#cronograma), deixa o navegador rolar até a seção
    if (hash) return;

    // "instant" ignora o scroll-behavior: smooth do index.css
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}