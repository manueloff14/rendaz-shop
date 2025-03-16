"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SearchComponent({ closePopup, animatePopup, data }) {
    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Función para calcular el plan más barato de un servicio
    const getCheapestPlan = (planes) => {
        if (!planes || planes.length === 0) return null;
        return planes.reduce((cheapest, plan) =>
            plan.precioActual < cheapest.precioActual ? plan : cheapest
        );
    };

    // Filtrar los servicios según el término de búsqueda (en tiempo real)
    const filteredData = data.filter((item) =>
        item.servicio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Escuchar la tecla ESC para cerrar el popup
    useEffect(() => {
        function handleEsc(event) {
            if (event.key === "Escape") {
                closePopup();
            }
        }
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closePopup]);

    return (
        <div
            className={`
        fixed inset-0 z-[200]
        transition-opacity duration-200 ease-out
        ${
            animatePopup
                ? "bg-[#00000018] backdrop-blur-[5px] pointer-events-auto"
                : "opacity-0 pointer-events-none"
        }
      `}
            onClick={(e) => {
                // Cerrar si se hace click fuera del contenedor
                if (e.target === e.currentTarget) closePopup();
            }}
        >
            {/* Contenedor del pop-up */}
            <div
                className={`
          relative transform transition-transform duration-200 ease-out
          bg-white
          w-full h-full
          md:w-[90%] md:max-w-4xl md:h-auto md:mx-auto md:mt-10
          md:rounded-3xl md:shadow-lg xl:max-w-5xl
          ${animatePopup ? "scale-100" : "scale-95"}
          flex flex-col
        `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Encabezado sticky */}
                <div className="sticky top-0 left-0 z-10 bg-white p-4 flex items-center justify-between border-b md:rounded-t-3xl border-gray-200">
                    {/* Barra de búsqueda */}
                    <div className="flex items-center w-full max-w-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"
                                fill="black"
                            ></path>
                        </svg>
                        <input
                            className="text-black ml-2 w-full outline-none"
                            type="text"
                            placeholder="¿Qué deseas encontrar?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Indicador para cerrar con ESC (solo en pantallas md o +) */}
                    <span className="hidden md:flex items-center text-xs text-black ml-4">
                        <span>Presiona</span>
                        <span className="p-1 mx-1 bg-gray-300 rounded text-[10px]">
                            ESC
                        </span>
                        <span>para cerrar</span>
                    </span>

                    {/* Botón para cerrar (visible en móviles) */}
                    <button onClick={closePopup} className="md:hidden p-2">
                        <img
                            className="w-[20px]"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4klEQVR4nO3YzQqCQBSG4ff22kTFGAbSlbdoEdY19EMhaIjMkKbjHOF7YTbi6HkQBAWllFJKKaUGtgbOwAlYYa8NcAXKetZgN+BdrzuwxU4Z8GjNV4GCla0TLWGyDqJal18bXsYwmQfx7DNT7tmYCuPqe3cRRd8LWMC4sQgLGDcVIiXGTY1IgXGxEHNioiPmwLjAK7YgUjEwsyNiYJIhpsQkR0yBMYMYgzGH+AdjFjEEYx7RB7MYRNMx8D3jQxwwXu4ZfDFPoi9mUYgQZpGIpn39Z6b6qbH7HlVKKaWUUooEfQBBouxth8O6rAAAAABJRU5ErkJggg=="
                            alt="Cerrar popup"
                        />
                    </button>
                </div>

                {/* Contenido scrollable */}
                <div className="overflow-y-auto flex-1 p-4">
                    {/* Título de la sección */}
                    <h2 className="text-black font-bold text-xl">
                        {searchTerm.trim()
                            ? "Resultados de búsqueda"
                            : "Nuestros servicios"}
                    </h2>

                    {/* Grid de servicios filtrados */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredData.map((item, index) => {
                            const cheapestPlan = getCheapestPlan(item.planes);
                            return (
                                <>
                                    <Link
                                        key={index}
                                        className="hidden md:flex gap-2"
                                        href={"/servicio/" + item.link}
                                    >
                                        <div className="w-28 h-28 rounded-4xl overflow-hidden hover:scale-105 transition-all duration-200">
                                            <img
                                                src={item.logo}
                                                alt={item.servicio}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-lg text-black font-bold">
                                                {item.servicio}
                                            </span>
                                            <span className="text-gray-500 text-sm mb-1">
                                                ${" "}
                                                {cheapestPlan
                                                    ? cheapestPlan.precioActual.toLocaleString(
                                                          "es-CL"
                                                      )
                                                    : "N/A"}
                                            </span>
                                            <button className="flex items-center gap-2 p-2 px-3 bg-black text-white rounded-full text-xs hover:scale-110 transition-all duration-200">
                                                Comprar
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </Link>
                                    <a
                                        key={index}
                                        className="flex md:hidden gap-2"
                                        href={"/servicio/" + item.link}
                                    >
                                        <div className="w-28 h-28 rounded-4xl overflow-hidden hover:scale-105 transition-all duration-200">
                                            <img
                                                src={item.logo}
                                                alt={item.servicio}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-lg text-black font-bold">
                                                {item.servicio}
                                            </span>
                                            <span className="text-gray-500 text-sm mb-1">
                                                ${" "}
                                                {cheapestPlan
                                                    ? cheapestPlan.precioActual.toLocaleString(
                                                          "es-CL"
                                                      )
                                                    : "N/A"}
                                            </span>
                                            <button className="flex items-center gap-2 p-2 px-3 bg-black text-white rounded-full text-xs hover:scale-110 transition-all duration-200">
                                                Comprar
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </a>
                                </>
                            );
                        })}
                        {filteredData.length === 0 && (
                            <p className="col-span-full text-center text-gray-500">
                                No se encontraron servicios
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
