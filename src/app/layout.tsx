import type { Metadata } from "next";
import { getSiteCss } from "@/lib/static-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entretienjcg.ca"),
  title: {
    default: "Entretien JCG",
    template: "%s",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA">
      <head>
        <style dangerouslySetInnerHTML={{ __html: getSiteCss() }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
