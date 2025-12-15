// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Haut-Commissariat du Gabon au Rwanda – Portail officiel",
  description:
    "Portail du Haut-Commissariat de la République Gabonaise près la République du Rwanda : services aux Gabonais, informations pratiques et investisseurs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
