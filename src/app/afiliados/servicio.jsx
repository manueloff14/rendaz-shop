"use client";

import Header from "@/app/components/Header";

export default function ServiceAfiliados() {
    return (
        <>
            <Header search={false} openPopup={() => {}} />
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-10 pt-36 pb-20">
                    <img
                        className="w-[100px] bg-white p-4 rounded-[2rem]"
                        src="/rendaz-logotipo.svg"
                        alt="Logotipo"
                    />

                    <div className="text-center space-y-4 max-w-2xl">
                        <h2 className="text-4xl font-bold text-white">
                            Programa de Afiliados
                        </h2>
                        <p className="text-sm text-gray-200">
                            Únete a nuestro programa de afiliados y comienza a
                            generar ingresos con Rendaz. Hay dos maneras de
                            participar:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
                        {/* Opción 1 */}
                        <div className="flex flex-col items-start gap-4 rounded-3xl border border-[#2e2e2e] bg-[#141414] p-6">
                            <h3 className="text-xl font-semibold text-white">
                                Revende nuestras cuentas
                            </h3>
                            <p className="text-sm text-gray-300">
                                Compra cuentas verificadas a precio mayorista y
                                véndelas directamente en tu comunidad, redes
                                sociales o contactos. Controla tus márgenes y
                                escala tu negocio digital.
                            </p>
                        </div>

                        {/* Opción 2 */}
                        <div className="flex flex-col items-start gap-4 rounded-3xl border border-[#2e2e2e] bg-[#141414] p-6">
                            <h3 className="text-xl font-semibold text-white">
                                Invierte en la plataforma
                            </h3>
                            <p className="text-sm text-gray-300">
                                Haz crecer tu dinero invirtiendo directamente en
                                Rendaz. Nosotros nos encargamos de la compra y
                                venta de cuentas, y tú obtienes beneficios por
                                tu inversión.
                            </p>
                        </div>
                    </div>

                    <div className="text-center space-y-4 max-w-2xl mt-12">
                        <h4 className="text-2xl font-semibold text-white">
                            ¿Tienes dudas?
                        </h4>
                        <p className="text-sm text-gray-200">
                            Escríbenos por WhatsApp y te explicamos cómo empezar
                            como afiliado, los requisitos y los beneficios.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/573507187007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp Logo"
                            className="w-6 h-6"
                        />
                        Habla con nosotros en WhatsApp
                    </a>

                    <p className="text-sm text-gray-400">
                        Número oficial: +57 350 718 7007
                    </p>
                </div>
            </div>
        </>
    );
}
