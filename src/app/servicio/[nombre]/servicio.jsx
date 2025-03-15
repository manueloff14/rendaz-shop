"use client";

import Header from "@/app/components/Header";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SearchComponent from "@/app/components/SearchComponent";
import Link from "next/link";

export default function Servicio({ data }) {
    const { nombre } = useParams();
    const [popupMounted, setPopupMounted] = useState(false);
    const [animatePopup, setAnimatePopup] = useState(false);

    // Función que abre WhatsApp con mensaje predefinido
    function handleWhatsAppClick(servicio, plan) {
        const phoneNumber = "+573507187007";
        const message = `Hola, me gustaría saber cuáles son los métodos de pago para comprar el plan ${plan} de ${servicio}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
    }

    const servicioData = data.find((item) => item.link === nombre);

    if (!servicioData) {
        return <div className="pt-32 text-center">Servicio no encontrado</div>;
    }

    const openPopup = () => {
        setPopupMounted(true);
    };

    const closePopup = () => {
        setAnimatePopup(false);
        setTimeout(() => setPopupMounted(false), 300);
    };

    useEffect(() => {
        if (popupMounted) {
            setAnimatePopup(true);
        }
    }, [popupMounted]);

    return (
        <>
            <div>
                <Header search={true} openPopup={openPopup} />
                <div className="py-30">
                    <div className="flex flex-col items-center mb-20 text-center">
                        {/* Logo responsive */}
                        <div className="w-40 h-40 md:w-[200px] md:h-[200px] rounded-[3rem] overflow-hidden">
                            {servicioData.logo ? (
                                <img
                                    src={servicioData.logo}
                                    alt={`Logo ${servicioData.servicio}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500">
                                        Sin logo
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Nombre del servicio */}
                        <h1 className="my-4 text-2xl font-bold mb-10">
                            {servicioData.servicio ?? "Servicio sin nombre"}
                        </h1>

                        <div>
                            <h2 className="text-4xl font-bold mb-2">
                                Selecciona tu plan
                            </h2>
                            <h3 className="text-gray-400">
                                Desbloquea infinitas posibilidades
                            </h3>
                        </div>
                    </div>

                    <div className="px-6 md:px-1">
                        {/* Tarjetas de planes */}
                        <ul className="flex flex-wrap items-center justify-center gap-6">
                            {servicioData.planes &&
                            servicioData.planes.length > 0 ? (
                                servicioData.planes.map((plan, index) => (
                                    <li
                                        key={index}
                                        className={`p-8 md:p-10 flex flex-col justify-between gap-4 rounded-[2.5rem]
                                bg-gradient-to-bl from-[#1f1f1f] to-[#0e0e0e]
                                w-full md:max-w-[350px] 
                                ${
                                    plan.nombre === "Premium"
                                        ? "lg:max-w-[400px] lg:min-h-[500px] lg:shadow-xl lg:shadow-[#131313] lg:border lg:border-[#1b1b1b]"
                                        : ""
                                }
                                `}
                                    >
                                        <div className="flex items-start justify-between">
                                            <span
                                                className={`text-3xl font-bold mb-1 ${
                                                    plan.nombre === "Premium"
                                                        ? "text-[#2b7fff]"
                                                        : "text-gray-100"
                                                }`}
                                            >
                                                {plan.nombre}
                                            </span>

                                            {plan.esRecomendado && (
                                                <span className="px-3 py-2 bg-[#4d77ff8c] text-white rounded-full text-xs">
                                                    Recomendado
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-col items-start justify-start">
                                            <span className="text-sm text-gray-300">
                                                {plan.precioAnterior
                                                    ? plan.precioAnterior.toLocaleString(
                                                          "es-CL"
                                                      )
                                                    : "N/A"}
                                            </span>
                                            <div className="mt-1 flex items-start gap-1">
                                                <span
                                                    className={`text-3xl font-bold ${
                                                        plan.nombre ===
                                                        "Premium"
                                                            ? "text-[#2b7fff]"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    $
                                                </span>

                                                <h3 className="text-4xl font-extrabold text-white">
                                                    {plan.precioActual.toLocaleString(
                                                        "es-CL"
                                                    )}
                                                </h3>
                                                <span
                                                    className={`ml-2 text-xl font-bold ${
                                                        plan.nombre ===
                                                        "Premium"
                                                            ? "text-[#2b7fff]"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    - {plan.descuento}%
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            className={`my-3 p-3 text-sm font-bold rounded-full transition-all duration-200 ${
                                                plan.nombre === "Premium"
                                                    ? "bg-[#2b7fff] hover:bg-[#2b80ffa2]"
                                                    : "bg-[#80808018] hover:bg-[#80808031]"
                                            }`}
                                            onClick={() =>
                                                handleWhatsAppClick(
                                                    servicioData.servicio,
                                                    plan.nombre
                                                )
                                            }
                                        >
                                            ¡Lo QUIERO!
                                        </button>

                                        <ul className="flex flex-col gap-3">
                                            {plan.beneficios.map(
                                                (beneficio, i) => (
                                                    <li
                                                        key={i}
                                                        className="pb-3 flex items-center gap-2 text-sm text-gray-300 border-b border-gray-600 last:border-0"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="0px"
                                                            y="0px"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 
                                 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 
                                 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z"
                                                                fill={`${
                                                                    plan.nombre ===
                                                                    "Premium"
                                                                        ? "#2b7fff"
                                                                        : "white"
                                                                }`}
                                                            ></path>
                                                        </svg>
                                                        {beneficio}
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                        {plan.advertencias &&
                                            plan.advertencias.length > 0 && (
                                                <ul className="text-[9px] text-white mt-1 text-center">
                                                    {plan.advertencias.map(
                                                        (advertencia, i) => (
                                                            <li key={i}>
                                                                {advertencia}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                    </li>
                                ))
                            ) : (
                                <p>
                                    No hay planes disponibles para este
                                    servicio.
                                </p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <h2 className="text-2xl font-bold text-center text-white mb-10">
                    Otros Servicios
                </h2>
                <div className="flex flex-wrap justify-center gap-6 px-6">
                    {data
                        .filter((servicio) => servicio.link !== nombre)
                        .slice(0, 8)
                        .map((servicio, index) => (
                            <Link
                                key={index}
                                href={`/servicio/${servicio.link}`}
                                className="p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow"
                            >
                                {/* Logo responsive */}
                                <div className="w-[110px] h-[110px] md:w-[200px] md:h-[200px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden">
                                    {servicio.logo ? (
                                        <img
                                            src={servicio.logo}
                                            alt={`Logo ${servicio.servicio}`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">
                                                Sin logo
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <span className="text-white font-semibold mt-2">
                                    {servicio.servicio}
                                </span>
                            </Link>
                        ))}
                </div>
            </div>

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
