import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const ServiciosPage = () => {
  const [servicios, setServicios] = useState([]);

  const fetchServicios = async () => {
    //const response = await fetch('https://fakestoreapi.com/services')
    //const data = response.json()

    let data = [
      {
        id: 1,
        titulo: "Transporte Terrestre Confiable",
        descripcion: "Desde carga completa (FTL) hasta carga fraccionada",
        imagenFont: "fa-solid fa-truck fa-2xl",
        precio: 1000,
        comentarioPrecio: "Por kilometro.",
      },
      {
        id: 2,
        titulo: "Almacenamiento y Distribución Eficiente",
        descripcion:
          "Nuestras instalaciones de almacenamiento estratégicamente ubicadas permiten un almacenamiento a corto y largo plazo y una distribución sin problemas.",
        imagenFont: "fa-solid fa-boxes-packing fa-2xl",
        precio: 100,
        comentarioPrecio: "Por Ubicacion.",
      },
      {
        id: 3,
        titulo: "Simplificamos tus Operaciones",
        descripcion:
          "Ofrecemos soluciones logísticas personalizadas que se adaptan a tus necesidades específicas, desde transporte hasta almacenamiento y distribución.",
        imagenFont: "fa-solid fa-gears fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
      {
        id: 4,
        titulo: "Gestión de Inventarios",
        descripcion:
          "Optimizamos tus niveles de inventario, reduciendo costos y mejorando la eficiencia operativa. Logística Inversa Sostenible: Manejamos procesos de devolución y reciclaje, ayudando a gestionar devoluciones de clientes y reducir el impacto ambiental.",
        imagenFont: "fa-solid fa-list-check fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
      {
        id: 5,
        titulo: "Tecnología de Seguimiento y Visibilidad",
        descripcion:
          "Ofrecemos seguimiento en tiempo real y visibilidad total, para que siempre sepas dónde están tus productos.",
        imagenFont: "fa-solid fa-map-location-dot fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
      {
        id: 6,
        titulo: "Soluciones Logísticas Personalizadas",
        descripcion:
          "Adaptamos nuestros servicios a tus necesidades específicas y a los requisitos de tu industria.",
        imagenFont: "fa-solid fa-lightbulb fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
      {
        id: 7,
        titulo: "Cumplimiento Normativo",
        descripcion:
          "Cumplimos con todas las regulaciones y estándares de seguridad, asegurando entregas seguras y legales.",
        imagenFont: "fa-solid fa-scale-balanced fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
      {
        id: 8,
        titulo: "Atención al Cliente de Primer Nivel",
        descripcion:
          "Nuestro equipo de atención al cliente está disponible 24/7 para brindarte soporte y asistencia inmediata.",
        imagenFont: "fa-solid fa-user-clock fa-2xl",
        precio: 0,
        comentarioPrecio: "Segun evaluación.",
      },
    ];
    console.log(data);
    setServicios(data);
  };

  useEffect(() => {
    fetchServicios();
  }, []);

  return (
    <>
      <h1 className="center">Servicios</h1>
      <h2>Cotización:</h2>
      <hr></hr>
      {servicios.map((servicio) => (
        <Card
          key={servicio.id}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
          precio={servicio.precio}
          comentarioPrecio={servicio.comentarioPrecio}
          imagenFont={servicio.imagenFont}
        ></Card>
      ))}
    </>
  );
};
