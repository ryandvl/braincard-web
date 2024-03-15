import {
  ChevronLeftIcon,
  LinkIcon,
  MessageSquareWarningIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen p-8">
      <a href="/">
        <ChevronLeftIcon className="text-zinc-500" size={36} />
      </a>
      <div className="flex flex-col h-5/6 justify-center items-center py-8 px-24 gap-6">
        <div className="flex w-[20rem] h-28 border-red-900 border rounded-md">
          <div className="p-3 flex flex-col gap-3 justify-center">
            <div className="flex gap-2">
              <MessageSquareWarningIcon className="text-yellow-400" size={28} />
              <p className="text-zinc-100">Este projeto é privado</p>
            </div>
            <div className="flex flex-col">
              <p className="text-zinc-400 text-sm">
                Você só irá receber um e-mail se for um dos
              </p>
              <div className="flex justify-center items-center">
                <p className="text-purple-500 font-bold">Testadores Oficiais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[25rem] h-56 gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-zinc-300 font-bold text-sm">Digite seu e-mail</p>
            <div className="rounded-md bg-slate-800 p-2.5">
              <p className="text-zinc-300 text-base">email@gmail.com</p>
            </div>
          </div>

          <div className="w-full h-16 flex justify-center items-center">
            <button className="w-72 h-full bg-blue-600 rounded-md flex gap-2 justify-center items-center">
              <LinkIcon className="text-white" size={28} />
              Enviar Link Mágico
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
