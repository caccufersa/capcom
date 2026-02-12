import { useEffect, useState } from 'react';

const GALLERY_YEARS = [2025, 2026];

const galleryImages = Object.entries(
  import.meta.glob<{ default: string }>("../../assets/galeria/*.jpg", { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const PHOTOS_BY_YEAR: Record<number, string[]> = {
  2025: galleryImages,
};

export function Gallery() {
  const [activeYear, setActiveYear] = useState(2025);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const photos = PHOTOS_BY_YEAR[activeYear] ?? [];
  const selectedPhotoSrc = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  useEffect(() => {
    setSelectedPhotoIndex(null);
  }, [activeYear]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedPhotoIndex(null);
      }
    }
    if (selectedPhotoIndex === null) return;
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <header className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tighter leading-[0.9]">
  Galeria de <br />
  <span className="font-serif italic font-light text-6xl md:text-8xl text-blue-400 ml-8 -mt-4 block">
    momentos.
  </span>
</h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto px-2">
          Vamos publicar os álbuns oficiais aqui mesmo. Estamos só finalizando os retoques das fotos.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-xl mx-auto">
        {GALLERY_YEARS.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-5 sm:px-6 py-2 rounded-full text-sm border transition ${
              activeYear === year
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <section className="max-w-7xl mx-auto">
        {photos.length ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6">
              {photos.map((src, index) => (
                <button
                  type="button"
                  key={src}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative block overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  <img
                    src={src}
                    alt={`Registro do Capcom ${activeYear} - foto ${index + 1}`}
                    className="h-40 sm:h-64 w-full object-cover transition duration-500 group-hover:scale-101"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full bg-white/90 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-slate-700 shadow">
                    #{index + 1}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-slate-500">
              {photos.length} fotos · Atualizado em 27 nov 2025
            </p>
          </>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            Nenhuma foto disponível para {activeYear} ainda.
          </div>
        )}
      </section>

      {selectedPhotoSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedPhotoIndex(null)} />
          <div className="relative w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-white p-3 sm:p-6 shadow-2xl">
            <button
              aria-label="Fechar visualização"
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute right-4 top-4 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:text-slate-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-950/5">
              <img
                src={selectedPhotoSrc}
                alt={`Registro do Capcom ${activeYear} - foto ${selectedPhotoIndex! + 1}`}
                className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain"
              />
            </div>
            <div className="mt-3 sm:mt-4 flex flex-col items-center justify-between gap-2 text-xs sm:text-sm text-slate-500 sm:flex-row">
              <span>Foto {selectedPhotoIndex! + 1} · {activeYear}</span>
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(null)}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
