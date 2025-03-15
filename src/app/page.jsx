"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
    const [popupMounted, setPopupMounted] = useState(false);
    const [animatePopup, setAnimatePopup] = useState(false);

    const data = [
        {
            link: "apple-tv",
            servicio: "Apple TV+",
            logo: "https://logodownload.org/wp-content/uploads/2023/05/apple-tv-logo.png",
            precio: "9.900/mes",
        },
        {
            link: "netflix",
            servicio: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png",
            precio: "14.900/mes",
        },
        {
            link: "disney-plus",
            servicio: "Disney+",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Disney_plus_icon.png",
            precio: "9.900/mes",
        },
        {
            link: "chatgpt",
            servicio: "ChatGPT",
            logo: "https://static.vecteezy.com/system/resources/previews/024/558/807/non_2x/openai-chatgpt-logo-icon-free-png.png",
            precio: "9.900/mes",
        },
        {
            link: "amazon-prime",
            servicio: "Amazon Prime",
            logo: "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/10/12194108/Amazon-Prime.png?fit=512%2C512&ssl=1",
            precio: "9.900/mes",
        },
        {
            link: "spotify",
            servicio: "Spotify",
            logo: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/05/spotify-logo-e1667595748678.png",
            precio: "2.900/mes",
        },
        {
            link: "hbo-max",
            servicio: "HBO Max",
            logo: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/product/hbo%20max/max-app-logo-r.png",
            precio: "9.900/mes",
        },
    ];

    // Abre el popup montándolo y luego activa la animación
    const openPopup = () => {
        setPopupMounted(true);
    };

    // Cierra el popup desactivando la animación y luego desmontándolo
    const closePopup = () => {
        setAnimatePopup(false);
        setTimeout(() => setPopupMounted(false), 300); // 300ms coincide con la duración de la transición
    };

    // Cuando se monta el popup, activa la animación
    useEffect(() => {
        if (popupMounted) {
            setAnimatePopup(true);
        }
    }, [popupMounted]);

    return (
        <>
            <div>
                {/* Header y contenido previo */}
                <Header />

                {/* Imagen de fondo */}
                <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-end z-[-200]">
                    <div className="relative w-full h-full">
                        <img
                            src="https://media1.giphy.com/media/1J9UNZB2xcNyyMJYra/200w.gif?cid=6c09b9528r0wd5pviliwclwz0ohvsbobsxc1k4p8l77dhj2j&ep=v1_gifs_search&rid=200w.gif&ct=g"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-[#00000091] backdrop-blur-[1px]"></div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="z-[-100] pb-15 md:absolute bottom-0 left-0 w-full flex justify-center items-center">
                    {/* 
          Para móvil => w-full
          Para tablet (md) => w-[40%]
          También agregamos px-4 en móvil para evitar que el texto se pegue a los bordes
        */}
                    <div className="mt-40 w-full md:w-[40%] flex flex-col justify-center items-center gap-6 px-4">
                        <div className="text-center flex flex-col gap-2">
                            <div className="p-2 w-20 h-20 rounded-3xl overflow-hidden bg-white mx-auto shadow-lg shadow-gray-500 mb-5">
                                <img
                                    src="./rendaz-logotipo.svg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            {/* Ajustamos un poco los tamaños del texto para móvil vs. tablet */}
                            <h1 className="text-4xl md:text-5xl text-white">
                                Es facil encontrar lo que buscas
                            </h1>
                            <p className="text-white text-lg font-extralight">
                                Descubre lo economicas que son nuestras ofertas.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 w-full mx-auto">
                            {/* Botón que abre el popup */}
                            <button
                                onClick={openPopup}
                                className="cursor-text flex items-center gap-4 p-4 border-2 border-gray-500 bg-[#ffffff11] backdrop-blur-[20px] text-black rounded-2xl hover:border-white hover:text-white transition-all duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"
                                        fill="white"
                                    ></path>
                                </svg>
                                <span className="text-gray-300">
                                    ¿Qué deseas encontrar?
                                </span>
                            </button>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-bold text-white">
                                            Los más comprados
                                        </h2>
                                        <span className="text-xs text-gray-400">
                                            2025
                                        </span>
                                    </div>
                                    <button
                                        className="cursor-pointer flex items-center gap-1 bg-white font-bold p-2 px-4 text-sm rounded-full text-black hover:scale-110 transition-all duration-200"
                                        onClick={openPopup}
                                    >
                                        Ver todos
                                        <img
                                            className="w-4 h-4"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAW0lEQVR4nO3VsQmAYAyE0TeAriZC3MzWSWzVpbQRwV4EU6j/N0AOLrkLhQcYMKKSRIsNU6ZIYMWCuohcEcWuO3TnCR85eZ9AnMueM7IRZfi3bGmy67rPfjj+zQ4gaSRu+IHCGwAAAABJRU5ErkJggg=="
                                            alt="forward"
                                        />
                                    </button>
                                </div>
                                <ul className="flex flex-wrap justify-between gap-6 mt-4">
                                    {data.map((item, index) => (
                                        <Link
                                            href={`/servicio/${item.link}`}
                                            key={index}
                                        >
                                            <li
                                                key={index}
                                                className="flex flex-col justify-center items-center gap-2 hover:scale-110 transition-all duration-200 cursor-pointer"
                                            >
                                                <div className="w-16 h-16 rounded-2xl overflow-hidden">
                                                    <img
                                                        src={item.logo}
                                                        alt={`Logo ${item.servicio}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="text-xs flex flex-col gap-2 text-center">
                                                    <span className="font-bold text-white">
                                                        {item.servicio}
                                                    </span>
                                                    <button className="bg-white text-black p-1 px-2 rounded-2xl font-bold">
                                                        {item.precio ||
                                                            "Ver más"}
                                                    </button>
                                                </div>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popup con animación similar a la de los modales */}
            {popupMounted && (
                <SearchComponent
                    animatePopup={animatePopup}
                    closePopup={closePopup}
                    data={data}
                />
            )}
        </>
    );
}
