import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prophecy | On-Chain AI Oracle",
  description: "AI price predictions running on Solana via Cauldron ML inference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
