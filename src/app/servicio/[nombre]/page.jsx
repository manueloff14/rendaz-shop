// ServicioPage.jsx
// Componente de servidor (no "use client")

// Array de datos con los servicios
const data = [
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
]

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
