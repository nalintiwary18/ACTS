import React from "react";
import {poppins} from "@/lib/fonts"
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
