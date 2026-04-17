import { FC } from "react";

export const HomeHero: FC = () => {
  return (
    <section className="relative pb-8 sm:pb-16">
      <div className="relative max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Receitas criativas para mentes curiosas
        </p>
        <h1 className="max-w-2xl text-4xl/tight font-black text-balance sm:text-6xl/tight">
          Pantry 42, o melhor da cozinha espacial.
        </h1>
        <p className="mt-5 max-w-2xl text-base/7 text-slate-300 sm:text-lg/8">
          Um espaço para descobrir receitas, combinações inesperadas e ideias
          com clima de exploração gastronômica, sempre com sabor, personalidade
          e um toque intergaláctico.
        </p>
      </div>
    </section>
  );
};
