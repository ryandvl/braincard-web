"use client";
import {
  BrainIcon,
  ChevronLeftIcon,
  LinkIcon,
  MailIcon,
  MessageSquareWarningIcon,
  NotebookPenIcon,
  NotepadTextIcon,
  ScrollIcon,
  StickerIcon,
  StickyNoteIcon,
} from "lucide-react";

import { getTranslator } from "@/lib/translator";
import { Control, Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ThemeSwitcher } from "@/components/header/theme-switcher";
import { generateRandomNumber as grn } from "@/utils/random-number";

export default function Home() {
  const t = getTranslator();

  const iconBubbleClassName =
    "absolute text-zinc-300 rounded-full bg-blue-500/85 p-2";

  return (
    <main className="h-screen p-8">
      <a href="/" className="flex justify-between">
        <ChevronLeftIcon className="text-zinc-500" size={36} />
        <ThemeSwitcher />
      </a>
      <div className="absolute">
        <BrainIcon
          className={iconBubbleClassName}
          style={{ top: 500 + grn(1, 100), left: grn(1, 100) }}
          size={64}
        />
        <NotebookPenIcon
          className={iconBubbleClassName}
          style={{ top: 100 + grn(150, 250), left: grn(100, 250) }}
          size={64}
        />
        <NotepadTextIcon
          className={iconBubbleClassName}
          style={{ top: grn(300, 400), left: grn(300, 400) }}
          size={64}
        />

        <StickyNoteIcon
          className={iconBubbleClassName}
          style={{
            top: grn(300, 400),
            left: `calc(100vw - ${grn(300, 400)}px`,
          }}
          size={64}
        />
        <ScrollIcon
          className={iconBubbleClassName}
          style={{
            top: grn(300, 400),
            left: `calc(100vw - ${grn(300, 400)}px`,
          }}
          size={64}
        />
        <StickerIcon
          className={iconBubbleClassName}
          style={{
            top: grn(300, 400),
            left: `calc(100vw - ${grn(300, 400)}px`,
          }}
          size={64}
        />
      </div>
      <div className="flex flex-col h-5/6 justify-center items-center py-8 px-24 gap-6">
        <div className="flex w-[20rem] h-28 border-red-900 border rounded-md">
          <div className="p-3 flex flex-col gap-3 justify-center">
            <div className="flex gap-2">
              <MessageSquareWarningIcon className="text-yellow-400" size={28} />
              <p className="text-zinc-100">{t("login:alert.title")}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-zinc-400 text-sm">
                {t("login:alert.description")}{" "}
                <span className="text-purple-500 font-bold">
                  {t("login:alert.official_tester")}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[25rem] h-56 gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-zinc-300 font-bold text-sm">
              {t("login:inputs.email.title")}
            </p>
            <Input variant="filter">
              <MailIcon className="text-slate-400" size={28} />
              <Control placeholder="email@gmail.com" />
            </Input>
          </div>

          <div className="w-full h-16 flex justify-center items-center">
            <button className="w-72 h-full bg-blue-600 rounded-md flex gap-2 justify-center items-center hover:bg-blue-800 transition-colors">
              <LinkIcon className="text-white" size={28} />
              {t("login:inputs.send")}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
