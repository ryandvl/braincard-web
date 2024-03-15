"use client";
import { forwardRef, useEffect, useState } from "react";

import { EllipsisIcon } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function ThemeSwitcher() {
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [cooldown, setCooldown] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersColorSchema = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setSelectedTheme(theme ?? prefersColorSchema);
  }, []);

  useEffect(() => {
    if (selectedTheme.length) {
      document.documentElement.classList.add(selectedTheme);
    }
  }, [selectedTheme]);

  const handleThemeSwitcher = () => {
    if (cooldown) return;

    setCooldown(true);

    localStorage.setItem("theme", selectedTheme);

    setTimeout(() => {
      setCooldown(false);
    }, 1000);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="w-[35px] h-[35px] rounded-md inline-flex items-center justify-center outline-none hover:bg-zinc-800 focus:bg-zinc-700 transition-colors duration-300"
          aria-label="Options"
        >
          <EllipsisIcon className="text-zinc-500" size={28} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-44 bg-zinc-800 rounded-md p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Arrow className="fill-zinc-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
