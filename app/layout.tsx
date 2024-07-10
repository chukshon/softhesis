import type { Metadata } from "next";
import { inter, roboto } from "./fonts";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "Softhesis",
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
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
