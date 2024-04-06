import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pdifo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="w-full h-screen bg-grid-black/[0.1] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-orange-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          {children}
        </div>
      </body>
    </html>
  );
}