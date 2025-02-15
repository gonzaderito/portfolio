import type { Metadata } from "next";

import "./globals.css";
import { Roboto } from "next/font/google"; // Importar Roboto de Google Fonts
import Navbar from "@/components/navbar";
import Header from "@/components/header";


// Importar Roboto desde Google Fonts
const roboto = Roboto({
  weight: ["400", "500", "700"], // Los pesos que quieras usar
  subsets: ["latin"], // Subconjuntos que necesites (en este caso "latin")
  variable: "--font-roboto", // Definir variable CSS para usar en clases
});




export const metadata: Metadata = {
  title: "Gonzalo de rito",
  description: "Gonzalo de rito porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
     <body className={`${roboto.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
        </div>
        <Header />
        <div className="pt-16">
            {children}
        </div>
    </body>
    </html>
  );
}
