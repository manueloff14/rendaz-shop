"use client";

import Header from "@/app/components/Header";

export default function NosotrosPage() {
    const steps = [
        {
            title: "Compra al mayor",
            text: "Adquirimos grandes volúmenes de cuentas verificadas de diversas plataformas digitales.",
            svg: (
                <img
                    className="p-1 w-[24px] h-[24px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR4nO3WsQpBURjA8VsmKwNG5Q1MJoOFlFmKJ7BY5QHkJZTJG9ydYrPZhZXBoAh/XX1ic45z7pH4z1/n11nOdzzvJwPGPFoA1U/AQScg4wS/BwxuNHQ8lwEVgaeu4SiwB85AwjXuy60bruEm4TR6BadDglcqt56HAPdV4F4IcE0FzltGL0BSBY4AG4vw7CX6hA8twl0duG4RLujAMVkYpu2DF1EZFnxiAfa1UIHbFuDWO3AK2BmgWyCuDQueC9YkcNQAD/LByL6F/m5AGVgHGwYomc4pJwfdW5rOfQVckkOXQNF07p/nqit4etkTHpfOQQAAAABJRU5ErkJggg=="
                    alt="shopping-cart--v1"
                />
            ),
        },
        {
            title: "Verificación",
            text: "Comprobamos la autenticidad y seguridad de cada cuenta.",
            svg: (
                <img
                    className="p-1 w-[24px] h-[24px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVR4nN2Vy0oDMRSGiyI+hlAqXqCz8TXKuJmVD1R3LnWv3fkSvkRtOxtRvKCBghdc9pPAGQjDyUyScdP+MDDkJN+fnCQnvd5GC9gBCmACzIAf4AuYAjdAbvukwk+BknYtgFEMeAs4J14XwHaIQQrc6gPoh6RlRRo8qzLQtKFlInwojD3gDtjVDIqOM+8Dj9J+phlMOsAHwJMTu9UM5grkCjBKu3Hg+8BzLf6gGdgL5OpS2rOaiQs/AF6UCfyGGCyBE4kdAW+1tPjgVp+hKTIOMHP+j8XQp3nMJi+rlUi/Q+CVZl3HHlMjKxgC77SrSLloxnOi6iq9FbZDqahkx+Yq/B+KndW4Ee6U63HkSlYyRi90HqM8sPiVrWmJeDK/5buXJ9PG0p7MtdEf9JPveV3kt7UAAAAASUVORK5CYII="
                    alt="checked--v1"
                />
            ),
        },
        {
            title: "Reventa",
            text: "Revendemos cuentas a precios competitivos, garantizando calidad y confiabilidad.",
            svg: (
                <img
                    className="p-1 w-[24px] h-[24px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO3Wu2uVMRyH8dcLuBR7aL1UQQfBy+YgVBBUtFSU6u5f4GTVQTs4ODsLFfRsHdyKi5OL1NJBcG/BrQqCg0JxsuBHolFDyLmlVBz6wAsnyS/fJyeQN2/TbNE0DVqYxkjthmA0ZrQGmXTLL+5l/ZfQxgq+xmcZTzGZ1c7EjOlBxCNBij2xfRyv9WYBx+KcvTGjbtdwHl/0z2ecq5L9Jv7TQaSp/GhTC16pZ6FWOlkI+46TuI5n+NZDPlEjbheClrKaI3jeRfykRrxSCHoQx7bjUPy9DQ87iJf7ES1hMWmvFYIuJuM3cDWRvyzUr3XK/0PoDGe1h/hwMr4Tb3A6tid6iBfT/I7EN1LOrqzmAj5gGLurtjoHs4Wg0ULdWzzGgUL9bDMoGC8EnSnU3cE6HhXqxwcWBzCfBbWbDJxSZr6pBWP4lL1A7sdtDWf4BPYXpGHOWLU4EI5Q3MoSZwvi9fTY1VziM+Fqi+1woed8xA5cy/p/3r/YFzP6vxZxO4bcTfrmMkE4RgfxIumb2+iHQAs309ViCO90JowNZR8TIWO4b3GXBU11EU9tWLBFSqd9bjYbvC94V/+F+EomX8XlTRc3fxfQ3/36v/EDL1LfkfrOHPQAAAAASUVORK5CYII="
                    alt="greentech"
                />
            ),
        },
        {
            title: "Soporte",
            text: "Brindamos atención postventa para garantizar la satisfacción del cliente.",
            svg: (
                <img
                    className="p-1 w-[24px] h-[24px]"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVR4nO3VzysEUQDA8UFL2QtF8Xes5Cgpf4UDBxe5cZULF/8A7R+g+AOIk4Mo6yQ368aBJOXgoo+mZmut2clm3nDY73Hm1efNj/deFHX767CIW9QwWhS65WvVItA53/tAJTR8Ir0z9ISEX7VvPiT8nAHfoxwKvpDdZCh4LQO9QSkUPI63NvBMELQRNlLQWhQ6lHHXAj9iuAh8Au8t+CkGisBXUl75XtCNpBF2U/DtKHTow0EKvhPfaxlbwhQG88L7cZiCH2EoGTON6+T6A5bQm9effpyCP+FK+4OlkteT7+us+EitYiSPbx5/3067/PWTJxNYTlnnWdVzgZs2mfoP4YXc4Kafbj3jYInbzBVtmcAYVnGe7OsvyXKbDYZ2+9d9Ai3OJRbdmOZKAAAAAElFTkSuQmCC"
                    alt="phone--v1"
                />
            ),
        },
    ];

    const faqs = [
        {
            question: "¿Qué tipo de cuentas venden?",
            answer: "Ofrecemos cuentas verificadas de diversas plataformas digitales, listas para su uso inmediato. Consulta con nuestro equipo para conocer la disponibilidad actual.",
        },
        {
            question: "¿Las cuentas que venden son legales y seguras?",
            answer: "Todas nuestras cuentas son verificadas previamente para garantizar su autenticidad y seguridad. Nos aseguramos de que cumplan con los estándares de calidad antes de revenderlas.",
        },
        {
            question: "¿Qué formas de pago aceptan?",
            answer: "Aceptamos múltiples métodos de pago seguros, incluyendo transferencias bancarias, criptomonedas y plataformas de pago reconocidas. Contáctanos para más detalles.",
        },
        {
            question: "¿Ofrecen algún tipo de garantía después de la compra?",
            answer: "Sí, brindamos soporte postventa para resolver cualquier inconveniente. Queremos asegurarnos de que tu experiencia sea satisfactoria.",
        },
        {
            question:
                "¿En cuánto tiempo entregan las cuentas después de la compra?",
            answer: "La entrega es inmediata o dentro de pocas horas, dependiendo de la disponibilidad y el volumen de la compra. Nuestro equipo te mantendrá informado durante todo el proceso.",
        },
        {
            question: "¿Puedo revender las cuentas que compro con ustedes?",
            answer: "Por supuesto. Muchos de nuestros clientes adquieren cuentas al por mayor para revenderlas en sus propios mercados o redes.",
        },
        {
            question: "¿Ofrecen descuentos por compras al mayor?",
            answer: "Sí. Si compras grandes volúmenes de cuentas, podemos ofrecerte precios preferenciales. Escríbenos para armarte una propuesta personalizada.",
        },
        {
            question: "¿Cómo puedo contactar al soporte?",
            answer: "Puedes comunicarte con nuestro equipo de soporte a través del chat en la página, correo electrónico o nuestro canal de WhatsApp. Siempre estamos listos para ayudarte.",
        },
    ];

    return (
        <>
            <Header search={true} openPopup={() => {}} />
            <div className="container mx-auto px-4">
                {/* Encabezado / Presentación */}
                <div className="flex flex-col items-center gap-10 pt-36">
                    <img
                        className="w-[100px] bg-white p-4 rounded-[2rem]"
                        src="/rendaz-logotipo.svg"
                        alt="Logotipo"
                    />
                    <div className="text-center space-y-2">
                        <h2 className="text-4xl font-bold text-white">
                            ¿Quiénes somos?
                        </h2>
                        <p className="text-sm text-gray-200">
                            Somos revendedores de cuentas de plataformas
                            digitales.
                        </p>
                    </div>
                </div>

                {/* Tarjetas de “pasos” */}
                <ul className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className="flex flex-col items-start gap-4 rounded-3xl border border-[#2e2e2e] bg-[#141414] p-6"
                        >
                            {/* Ícono */}
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#303030] text-gray-100">
                                {step.svg}
                            </div>
                            {/* Contenido */}
                            <div>
                                <h3 className="text-base font-semibold text-[white]">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-300">
                                    {step.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Preguntas Frecuentes */}
                <div className="mt-32 mb-20">
                    <h2 className="text-3xl font-bold text-white text-center mb-10">
                        Preguntas Frecuentes
                    </h2>
                    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-[#2e2e2e] bg-[#141414] p-6"
                            >
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
