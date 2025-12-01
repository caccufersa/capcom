import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center pt-32">
      <h1 className="text-9xl font-bold text-slate-200">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-slate-800">Página não encontrada</h2>
      <p className="mt-2 text-lg text-slate-600 max-w-md">
        Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
