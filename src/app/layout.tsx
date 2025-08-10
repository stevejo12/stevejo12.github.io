import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steve Vinsensius Jo's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
