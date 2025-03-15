"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ search, openPopup }) {
    // Estado para controlar si se muestra u oculta el menú en móviles
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center text-white z-[20] bg-[#0000004b] backdrop-blur-[5px] md:bg-transparent">
                {/* Logo y menú desktop */}
                <div className="flex flex-grow basis-0 items-center gap-6">
                    <Link href="/">
                        <img
                            className="w-[140px]"
                            src="/rendaz-logo.svg"
                            alt="Logo Rendaz"
                        />
                    </Link>

                    {/* Menú Desktop (oculto en mobile) */}
                    <ul className="hidden md:flex space-x-8 text-xs">
                        {/* <li className="relative hover:text-gray-300 cursor-pointer transition-all duration-300">
                            Planes populares
                            <div className="text-[8px] absolute top-[-10px] right-[-15px] p-1 flex justify-center items-center bg-blue-500 text-white font-bold rounded-lg">
                                Nuevo
                            </div>
                        </li> */}
                        <Link
                            href={"/nosotros"}
                            className="hover:text-gray-300 cursor-pointer transition-all duration-300"
                        >
                            Nosotros
                        </Link>
                        <Link
                            href={"/contacto"}
                            className="hover:text-gray-300 cursor-pointer transition-all duration-300"
                        >
                            Contacto
                        </Link>
                        <Link
                            href={"/afiliados"}
                            className="hover:text-gray-300 cursor-pointer transition-all duration-300"
                        >
                            Afiliados
                        </Link>
                    </ul>
                </div>

                {/* Botón de búsqueda sin texto para desktop */}
                {search && (
                    <button
                        onClick={openPopup}
                        className="hidden md:flex items-center justify-center gap-4 p-3 lg:px-6 bg-white text-black rounded-full hover:border-white hover:text-white hover:scale-105 transition-all duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"
                                fill="black"
                            ></path>
                        </svg>
                        <span className="text-gray-800 text-xs hidden lg:flex">
                            ¿Qué deseas encontrar?
                        </span>
                    </button>
                )}

                {/* Botones para móviles */}
                <div className="flex md:hidden gap-2">
                    {search && (
                        <button
                            onClick={openPopup}
                            className="flex items-center gap-1 p-2 px-3 bg-white text-black rounded-full text-xs hover:scale-105 transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="18"
                                height="18"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"
                                    fill="black"
                                ></path>
                            </svg>
                        </button>
                    )}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-1 p-2 bg-white text-black rounded-full text-xs hover:scale-105 transition-all duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.75 2.75a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75zm0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75zm0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75z"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Menú lateral para móviles y tablet (se muestra en pantallas menores a lg) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#222222] text-white p-4 z-[20] transform transition-transform duration-300 lg:hidden ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="mb-8 p-2 bg-white text-black rounded-full hover:scale-105 transition-transform duration-200"
                    >
                        {/* Icono de cerrar (X) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <h2 className="p-3 text-xl font-bold">Menú</h2>
                <ul className="space-y-6 text-sm p-3">
                    {/* <li className="relative hover:text-gray-300 cursor-pointer transition-colors duration-300">
                        Planes populares
                        <div className="text-[8px] absolute top-[-10px] right-[-15px] p-1 flex justify-center items-center bg-blue-500 text-white font-bold rounded-lg">
                            Nuevo
                        </div>
                    </li> */}
                    <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">
                        <Link href={"/nosotros"}>Nosotros</Link>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">
                        <Link href={"/contacto"}>Contacto</Link>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors duration-300">
                        <Link href={"/afiliados"}>Afiliados</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
