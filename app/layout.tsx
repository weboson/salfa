import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
// redux
import StoreProvider from "./StoreProvider";

// Гугл шрифты вызываются, как функции с аргументами, как настройки
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Магазин продуктов",
  description: "Тестовое задание для 'Экосистема Альфа'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <TheHeader />
          <main className="container">{children}</main>
          <TheFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
