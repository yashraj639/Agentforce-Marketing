"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggleButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  const SWITCH = () => {
    setTheme(current === "light" ? "dark" : "light");
  };

  return (
    <button
      className="flex items-center justify-center relative size-4"
      onClick={SWITCH}
    >
      <SunIcon
        size={14}
        className="rotate-0 absolute inset-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0"
      />
      <MoonIcon
        size={14}
        className="rotate-90 absolute inset-0 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export default ModeToggleButton;
