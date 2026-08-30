import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

// Mulish é a tipografia do site no ar (bankersacademy.com.br).
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bankersacademy.com.br"),
  title: {
    default: "Bankers Academy",
    template: "%s | Bankers Academy",
  },
  description:
    "Formação prática em Investment Banking. Conheça o Investment Banking Boot Camp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={mulish.variable}>
      <body>{children}</body>
    </html>
  );
}
