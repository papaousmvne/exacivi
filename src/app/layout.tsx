import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExaCivi - Préparation à l'examen civique (CSP, CR, Naturalisation)",
  description:
    "ExaCivi aide les candidats à la CSP, à la carte de résident et à la naturalisation à préparer l'examen civique français : questions officielles, examens blancs et suivi de progression.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative",
          "bg-sidebar",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable,
          interHeading.variable,
          "text-foreground",
          "antialiased",
        )}
      >
        <ThemeProvider>
          <div className="isolate relative flex min-h-svh flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
