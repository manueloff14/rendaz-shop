// ServicioPage.jsx
// Componente de servidor (no "use client")

// Array de datos con los servicios
const data = [
    {
        link: "apple-tv",
        servicio: "Apple TV+",
        logo: "https://logodownload.org/wp-content/uploads/2023/05/apple-tv-logo.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: [
                    "Acceso al catálogo en HD",
                    "1 dispositivo simultáneo",
                    "Compatible con iOS y macOS",
                ],
                advertencias: [
                    "No incluye calidad 4K",
                    "No disponible en Android TV",
                ],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Acceso al catálogo en 4K",
                    "2 dispositivos simultáneos",
                    "Descargas sin conexión",
                ],
                advertencias: [
                    "Algunos contenidos no están disponibles fuera de la región",
                ],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Acceso al catálogo en 4K",
                    "4 dispositivos simultáneos",
                    "Perfil individual para cada miembro",
                ],
                advertencias: [
                    "No se permite uso comercial",
                    "Verifica compatibilidad con Smart TV",
                ],
                esRecomendado: false,
                esMejorPlan: true,
            },
        ],
    },
    {
        link: "netflix",
        servicio: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png",
        planes: [
            {
                nombre: "Básico",
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: ["Catálogo en HD", "1 pantalla", "Sin publicidad"],
                advertencias: ["No incluye 4K", "Catálogo varía según región"],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Catálogo en 4K",
                    "2 pantallas simultáneas",
                    "Descargas en múltiples dispositivos",
                ],
                advertencias: ["Algunos títulos se retiran mensualmente"],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Catálogo en 4K",
                    "4 pantallas simultáneas",
                    "Perfiles para cada miembro de la familia",
                ],
                advertencias: [
                    "Uso compartido solo entre familiares",
                    "Precio variable en ciertos países",
                ],
                esRecomendado: false,
                esMejorPlan: true,
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
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: [
                    "Acceso a contenido en HD",
                    "1 perfil",
                    "Catálogo de Disney, Pixar, Marvel, Star Wars",
                ],
                advertencias: [
                    "No incluye contenido 4K",
                    "Algunas películas se retiran temporalmente",
                ],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Contenido en 4K",
                    "2 perfiles simultáneos",
                    "Descarga ilimitada en dispositivos móviles",
                ],
                advertencias: [
                    "Algunos estrenos tienen costo adicional (Premier Access)",
                ],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Contenido en 4K",
                    "4 perfiles simultáneos",
                    "Control parental avanzado",
                ],
                advertencias: [
                    "No se permite uso comercial",
                    "Las suscripciones anuales no incluyen Premier Access",
                ],
                esRecomendado: false,
                esMejorPlan: true,
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
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: [
                    "Uso personal de IA",
                    "Límite de 100 preguntas diarias",
                    "Respuesta en texto",
                ],
                advertencias: [
                    "Sin soporte prioritario",
                    "No apto para uso profesional",
                ],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Consultas ilimitadas",
                    "Acceso a funciones beta",
                    "Soporte prioritario 24/7",
                ],
                advertencias: [
                    "Puede experimentar tiempos de espera en horas pico",
                ],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar (Team)",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Cuentas para hasta 4 usuarios",
                    "Uso colaborativo en tiempo real",
                    "Herramientas avanzadas de análisis",
                ],
                advertencias: [
                    "Solo para equipos pequeños",
                    "Soporte vía correo electrónico",
                ],
                esRecomendado: false,
                esMejorPlan: true,
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
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: [
                    "Prime Video en HD",
                    "Envíos gratuitos en Amazon",
                    "1 cuenta",
                ],
                advertencias: [
                    "No incluye contenido 4K",
                    "Limitado a 1 dispositivo simultáneo",
                ],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Prime Video en 4K",
                    "Envíos gratuitos en Amazon",
                    "2 dispositivos simultáneos",
                ],
                advertencias: [
                    "Algunas películas y series no están disponibles en 4K",
                ],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Prime Video en 4K",
                    "Envíos gratuitos en Amazon",
                    "Hasta 4 perfiles en la cuenta",
                ],
                advertencias: [
                    "Verifica disponibilidad de envíos en tu zona",
                    "No se permite reventa de productos",
                ],
                esRecomendado: false,
                esMejorPlan: true,
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
                descuento: 50.85,
                beneficios: [
                    "Cuenta Spotify Premium",
                    "Audio en alta calidad",
                    "Reproducción en modo aleatorio",
                    "Disponible en todos los dispositivos",
                    "Modo sin conexión",
                ],
                advertencias: ["Cuenta compartida con otros usuarios"],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 16900,
                precioActual: 7500,
                descuento: 40.4,
                beneficios: [
                    "Cuenta Spotify Premium",
                    "Audio en alta calidad",
                    "Reproducción en modo aleatorio",
                    "Disponible en todos los dispositivos",
                    "Modo sin conexión",
                    "Sin anuncios",
                ],
                esRecomendado: true,
                esMejorPlan: false,
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
                precioAnterior: 12900,
                precioActual: 9900,
                descuento: 23.26,
                beneficios: [
                    "Contenido en HD",
                    "1 pantalla",
                    "Acceso a series exclusivas de HBO",
                ],
                advertencias: [
                    "No incluye 4K",
                    "Algunas series pueden ser removidas",
                ],
                esRecomendado: false,
                esMejorPlan: false,
            },
            {
                nombre: "Premium",
                precioAnterior: 15900,
                precioActual: 12900,
                descuento: 18.87,
                beneficios: [
                    "Contenido en 4K (en títulos seleccionados)",
                    "2 pantallas simultáneas",
                    "Descargas en la app móvil",
                ],
                advertencias: ["No todos los dispositivos soportan 4K"],
                esRecomendado: true,
                esMejorPlan: false,
            },
            {
                nombre: "Familiar",
                precioAnterior: 19900,
                precioActual: 14900,
                descuento: 25.13,
                beneficios: [
                    "Contenido en 4K",
                    "4 pantallas simultáneas",
                    "Perfiles infantiles con control parental",
                ],
                advertencias: [
                    "Uso comercial no permitido",
                    "Algunas películas tienen ventanas de disponibilidad limitadas",
                ],
                esRecomendado: false,
                esMejorPlan: true,
            },
        ],
    },
];

// Función que genera la metadata utilizando el servicio (no el link)
export async function generateMetadata({ params }) {
    const { nombre } = params;
    // Buscar el servicio en el array por el campo "link"
    const service = data.find((item) => item.link === nombre);
    // Si se encuentra, usar el nombre del servicio; si no, usar el valor "nombre" recibido
    const serviceName = service ? service.servicio : nombre;
    return {
        title: `Compra ${serviceName} al Mejor Precio | Rendaz`,
        description: `Adquiere cuentas verificadas de ${serviceName} de forma segura y al mejor precio en Rendaz.`,
    };
}

import Servicio from "./servicio";

export default function ServicioPage() {
    return (
        <div>
            <Servicio data={data} />
        </div>
    );
}
