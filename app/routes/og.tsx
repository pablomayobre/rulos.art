import { Logo } from "~/components/logo";

export default function OpenGraphImage() {
  return (
    <main className="relative h-[630px] w-[1200px] overflow-hidden bg-background-pattern">
      <div className="m-[5%] flex h-[80%] w-[80%] -rotate-1 flex-col rounded-2xl border border-solid border-white/50 bg-white/50 px-8 py-6 drop-shadow-xl backdrop-blur-lg backdrop-saturate-150">
        <div className="flex items-center gap-4">
          <Logo className="h-14 w-14" />
          <span className="text-3xl font-light">
            Ilustración, Diseño y Papelería
          </span>
        </div>
        <h1 className="mb-4 flex h-full max-w-40 grow items-center align-middle text-9xl font-bold">
          Rulos Artísticos
        </h1>

        <span className="text-xl font-light">@rulos.artisticos</span>
      </div>
      <img
        src="/assets/commissions-open.png"
        className="absolute bottom-[-11rem] right-0 w-[45%]"
      />
    </main>
  );
}
