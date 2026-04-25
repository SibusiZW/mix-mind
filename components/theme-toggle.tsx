'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return <div><Button variant={'ghost'}><Sun className="w-2 h-2"/></Button></div>
    }

    return (
        <Button variant={'ghost'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="w-2 h-2"/> : <Moon className="w-2 h-2"/>}
        </Button>
    )
}

