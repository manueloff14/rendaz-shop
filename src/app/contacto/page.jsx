"use client";

import Header from "@/app/components/Header";

export default function ContactoPage() {
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

                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold text-white">
                            Contáctanos
                        </h2>
                        <p className="text-sm text-gray-200 max-w-md mx-auto">
                            ¿Tienes alguna duda o quieres hacer un pedido?
                            Comunícate directamente a nuestro WhatsApp oficial y
                            con gusto te atenderemos.
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
                        Escríbenos al WhatsApp
                    </a>

                    <p className="text-sm text-gray-400">
                        Número: +57 350 718 7007
                    </p>
                </div>
            </div>
        </>
    );
}
