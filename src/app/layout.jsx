import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Compra Cuentas Verificadas de Plataformas Digitales al Mejor Precio | Rendaz",
    description:
        "Adquiere cuentas verificadas de plataformas digitales de forma segura y al mejor precio en Rendaz. Ofrecemos soporte postventa y oportunidades de afiliación para revendedores e inversionistas.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
