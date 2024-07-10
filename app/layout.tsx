import type { Metadata } from "next";
import { inter, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Softhesis submission",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
