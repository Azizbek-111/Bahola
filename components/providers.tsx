"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

const isMaktab = process.env.NEXT_PUBLIC_APP_MODE === "maktab";

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
