"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();

    // To avoid hydration mismatch, don't render until mounted
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 opacity-0 pointer-events-none" />
        );
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            className="w-10 h-10 rounded-full bg-white dark:bg-[#151D19] text-black dark:text-[#F1F4F2] border border-gray-200 dark:border-[rgba(180,255,215,0.2)] transition-all flex items-center justify-center shadow-md hover:scale-105 active:scale-95"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {currentTheme === 'dark' ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
}
