"use client";
import { ClipboardXIcon, GithubIcon } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { HorizontalSeparator } from "../separators";

export function Header() {
  return (
    <div className="flex w-full h-20 justify-between items-center">
      <div className="flex gap-2">
        <ClipboardXIcon size={36} />
        <p className="text-3xl font-bold transition-opacity">LearnFCS</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <GithubIcon size={28} className="text-zinc-500" />
        <HorizontalSeparator />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
