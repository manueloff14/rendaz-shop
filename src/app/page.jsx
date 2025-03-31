"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import Header from "./components/Header";
import Link from "next/link";

const data_planes = [
    {
        link: "netflix",
        servicio: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 11000,
                precioActual: 7500,
                descuento: 70.83,
                beneficios: [
                    "Acceso al catálogo en HD",
                    "1 dispositivo simultáneo",
                    "Contenido variado para toda la familia",
                ],
                advertencias: [
                    "Cuenta compartida con otros usuarios",
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                    "No incluye 4K",
                ],
            },
            {
                nombre: "Premium",
                precioAnterior: 18000,
                precioActual: 13000,
                descuento: 8.33,
                beneficios: [
                    "Acceso en HD",
                    "1 perfil exclusivo para 1 persona",
                    "Sin interrupciones ni compartir cuentas",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                    "No incluye 4K",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 43000,
                precioActual: 30000,
                descuento: 8.88,
                beneficios: [
                    "Acceso completo en 4K",
                    "Hasta 4 perfiles",
                    "4 pantallas simultáneas",
                ],
                advertencias: [
                    "Solo para uso familiar",
                    "No se permite uso comercial",
                ],
            },
        ],
    },
    {
        link: "disney-plus",
        servicio: "Disney+",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Disney_plus_icon.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 8000,
                precioActual: 6500,
                descuento: 56.25,
                beneficios: [
                    "Acceso a contenido en HD",
                    "1 dispositivo simultáneo",
                    "Catálogo Disney, Pixar, Marvel y Star Wars",
                ],
                advertencias: [
                    "Cuenta compartida con otros usuarios",
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                    "No incluye 4K",
                ],
            },
            {
                nombre: "Premium",
                precioAnterior: 15000,
                precioActual: 8000,
                descuento: 6.25,
                beneficios: [
                    "Acceso en HD",
                    "1 perfil exclusivo para 1 persona",
                    "Catálogo Disney, Pixar, Marvel y Star Wars",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 28000,
                precioActual: 20000,
                descuento: 11.11,
                beneficios: [
                    "Acceso completo en HD",
                    "Hasta 4 perfiles",
                    "4 pantallas simultáneas",
                ],
                advertencias: ["Solo para uso familiar"],
            },
        ],
    },
    {
        link: "amazon-prime",
        servicio: "Amazon Prime",
        logo: "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/10/12194108/Amazon-Prime.png?fit=512%2C512&ssl=1",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 6000,
                precioActual: 6500,
                descuento: 61.11,
                beneficios: [
                    "Prime Video en HD",
                    "1 dispositivo simultáneo",
                    "Acceso a envíos gratuitos de Amazon",
                ],
                advertencias: [
                    "Cuenta compartida con otros usuarios",
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Premium",
                precioAnterior: 10500,
                precioActual: 9000,
                descuento: 11.11,
                beneficios: [
                    "Acceso exclusivo en HD",
                    "1 perfil individual",
                    "Prime Video + envíos Prime",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 24000,
                precioActual: 20000,
                descuento: 10,
                beneficios: [
                    "Acceso completo en 4K",
                    "Hasta 4 perfiles",
                    "4 pantallas simultáneas",
                ],
                advertencias: ["Solo para uso familiar"],
            },
        ],
    },
    {
        link: "hbo-max",
        servicio: "HBO Max",
        logo: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/product/hbo%20max/max-app-logo-r.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 8500,
                precioActual: 6500,
                descuento: 58.82,
                beneficios: [
                    "Acceso a HBO Max en HD",
                    "1 dispositivo simultáneo",
                    "Contenido exclusivo HBO",
                ],
                advertencias: [
                    "Cuenta compartida con otros usuarios",
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Premium",
                precioAnterior: 12500,
                precioActual: 9500,
                descuento: 11.76,
                beneficios: [
                    "Acceso exclusivo en 4K",
                    "1 perfil individual",
                    "Series y películas exclusivas",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 22000,
                precioActual: 18000,
                descuento: 11.11,
                beneficios: [
                    "Acceso completo en 4K",
                    "Hasta 3 perfiles",
                    "3 pantallas simultáneas",
                ],
                advertencias: ["Solo para uso familiar"],
            },
        ],
    },
    {
        link: "paramount-plus",
        servicio: "Paramount+",
        logo: "https://sm.ign.com/t/ign_me/cover/p/paramount-/paramount-plus_nhmc.300.jpg",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 8500,
                precioActual: 6500,
                descuento: 58.82,
                beneficios: [
                    "Acceso en HD",
                    "1 dispositivo simultáneo",
                    "Series y películas exclusivas",
                ],
                advertencias: ["Cuenta compartida con otros usuarios"],
            },
            {
                nombre: "Premium",
                precioAnterior: 9500,
                precioActual: 8500,
                descuento: 11.76,
                beneficios: [
                    "Acceso exclusivo en 4K",
                    "1 perfil individual",
                    "Series y películas exclusivas",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 20000,
                precioActual: 16500,
                descuento: 6.66,
                beneficios: [
                    "Acceso completo en 4K",
                    "Hasta 3 perfiles",
                    "3 pantallas simultáneas",
                ],
                advertencias: ["Solo para uso familiar"],
            },
        ],
    },
    {
        link: "crunchyroll",
        servicio: "Crunchyroll",
        logo: "https://cdn.quicksell.co/-M5mfJ9Y8f2UdhwcIe3E/products/-NVjlQC0yRVBz3v4kFjX.jpg",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 8000,
                precioActual: 6500,
                descuento: 56.25,
                beneficios: [
                    "Acceso a contenido anime en HD",
                    "1 dispositivo simultáneo",
                ],
                advertencias: ["Cuenta compartida con otros usuarios"],
            },
            {
                nombre: "Premium",
                precioAnterior: 9500,
                precioActual: 8700,
                descuento: 11.76,
                beneficios: [
                    "Acceso exclusivo en 4K",
                    "1 perfil individual",
                    "Series y películas exclusivas",
                ],
                advertencias: [
                    "Debes especificar el dispositivo de uso (Cel, TV o PC)",
                ],
            },
            {
                nombre: "Team",
                precioAnterior: 16000,
                precioActual: 14500,
                descuento: 7.14,
                beneficios: [
                    "Acceso completo en 4K",
                    "Hasta 3 perfiles simultáneos",
                ],
                advertencias: ["Solo para uso familiar"],
            },
        ],
    },
    {
        link: "chatgpt",
        servicio: "ChatGPT",
        logo: "https://static.vecteezy.com/system/resources/previews/024/558/807/non_2x/openai-chatgpt-logo-icon-free-png.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 35000,
                precioActual: 25000,
                descuento: 6.25,
                beneficios: ["Acceso a ChatGPT 4", "Consultas básicas"],
                advertencias: [
                    "Cuenta compartida con otros usuarios",
                    "Límite de consultas en horas pico",
                ],
            },
            {
                nombre: "Premium",
                precioAnterior: 65000,
                precioActual: 45000,
                descuento: 6.25,
                beneficios: [
                    "Acceso ilimitado a ChatGPT 4",
                    "Incluye funciones beta",
                    "1 perfil exclusivo para 1 persona",
                ],
                advertencias: ["Uso personal exclusivamente"],
            },
            {
                nombre: "Plus",
                precioAnterior: 90000,
                precioActual: 60000,
                descuento: 5.17,
                beneficios: [
                    "Cuenta completa para un solo usuario",
                    "Herramientas avanzadas de análisis",
                ],
                advertencias: ["Solo para una persona"],
            },
        ],
    },
    {
        link: "spotify",
        servicio: "Spotify",
        logo: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/05/spotify-logo-e1667595748678.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 16900,
                precioActual: 2900,
                descuento: 6.25,
                beneficios: [
                    "Audio en alta calidad",
                    "Disponible en todos los dispositivos",
                    "Modo sin conexión",
                ],
                advertencias: ["Cuenta compartida con otros usuarios"],
            },
            {
                nombre: "Premium",
                precioAnterior: 16900,
                precioActual: 9000,
                descuento: 6.25,
                beneficios: [
                    "Cuenta personal",
                    "Audio en alta calidad",
                    "Reproducción en modo aleatorio",
                    "Disponible en todos los dispositivos",
                    "Modo sin conexión",
                ],
            },
        ],
    },
];

export default function Home() {
    const [popupMounted, setPopupMounted] = useState(false);
    const [animatePopup, setAnimatePopup] = useState(false);

    // Función auxiliar para obtener el plan más económico
    const getCheapestPlan = (planes) =>
        planes.reduce((prev, curr) =>
            prev.precioActual < curr.precioActual ? prev : curr
        );

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
                    <div className="mt-40 w-full md:w-[42%] flex flex-col justify-center items-center gap-6 px-4">
                        <div className="text-center flex flex-col gap-2">
                            <div className="p-2 w-20 h-20 rounded-3xl overflow-hidden bg-white mx-auto shadow-lg shadow-gray-500 mb-5">
                                <img
                                    src="./rendaz-logotipo.svg"
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                            <h1 className="text-4xl md:text-5xl text-white">
                                Es fácil encontrar lo que buscas
                            </h1>
                            <p className="text-white text-lg font-extralight">
                                Descubre lo económicas que son nuestras ofertas
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
                                    {data_planes
                                        .slice(0, 7)
                                        .map((item, index) => {
                                            const cheapestPlan =
                                                getCheapestPlan(item.planes);
                                            return (
                                                <Link
                                                    href={`/servicio/${item.link}`}
                                                    key={index}
                                                >
                                                    <li className="flex flex-col justify-center items-center gap-2 hover:scale-110 transition-all duration-200 cursor-pointer">
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
                                                                $ {Math.min(
                                                                    ...item.planes.map(
                                                                        (
                                                                            plan
                                                                        ) =>
                                                                            plan.precioActual
                                                                    )
                                                                ).toLocaleString(
                                                                    "es-CL"
                                                                ) + "/mes"}
                                                            </button>
                                                        </div>
                                                    </li>
                                                </Link>
                                            );
                                        })}
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
                    data={data_planes}
                />
            )}
        </>
    );
}
