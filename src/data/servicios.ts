import type { Servicios } from "../types/services";

export const serviciosPsicologia: Servicios[] = [
    {
        id: "1",
        nombre: "Terapia Individual",
        descripcion: "Sesiones personalizadas para abordar problemas emocionales, conductuales o de salud mental.",
        duracion: "50 minutos",
        precio: 80,
        img: "/servicesImg/1.webp",
        modalidad: ["Presencial", "Online"],
        areasEnfoque: ["Ansiedad", "Depresión", "Estrés", "Trauma", "Duelo"]
    },
    {
        id: "2",
        nombre: "Terapia de Pareja",
        descripcion: "Sesiones para mejorar la comunicación y resolver conflictos en la relación de pareja.",
        duracion: "60 minutos",
        precio: 120,
        img: "/servicesImg/2.webp",
        modalidad: ["Presencial", "Online"],
        areasEnfoque: ["Comunicación", "Conflictos", "Intimidad", "Infidelidad", "Divorcio"]
    },
    {
        id: "3",
        nombre: "Terapia Familiar",
        descripcion: "Sesiones para abordar problemas y mejorar la dinámica familiar.",
        duracion: "75 minutos",
        precio: 150,
        img: "/servicesImg/3.webp",
        modalidad: ["Presencial"],
        areasEnfoque: ["Comunicación", "Conflictos", "Crianza", "Adolescencia", "Duelo"]
    },
    {
        id: "4",
        nombre: "Terapia Infantil",
        descripcion: "Sesiones especializadas para niños y adolescentes con problemas emocionales o conductuales.",
        duracion: "45 minutos",
        precio: 70,
        img: "/servicesImg/4.webp",
        modalidad: ["Presencial", "Online"],
        areasEnfoque: ["Ansiedad", "Depresión", "TDAH", "Problemas de conducta", "Habilidades sociales"]
    },
    {
        id: "5",
        nombre: "Evaluación Psicológica",
        descripcion: "Evaluación integral para diagnosticar y comprender mejor los problemas emocionales o conductuales.",
        duracion: "Variable",
        precio: 200,
        img: "/servicesImg/5.webp",
        modalidad: ["Presencial"],
        areasEnfoque: ["Personalidad", "Inteligencia", "Neuropsicología", "Psicopatología"]
    },
    {
        id: "6",
        nombre: "Talleres y Grupos",
        descripcion: "Talleres y grupos terapéuticos para abordar temas específicos y compartir experiencias.",
        duracion: "90 minutos",
        precio: 40,
        img: "/servicesImg/6.webp",
        modalidad: ["Presencial", "Online"],
        areasEnfoque: ["Habilidades sociales", "Manejo del estrés", "Autoestima", "Mindfulness"]
    }
];
