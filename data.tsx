import { LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import { BookText, CodeSquare, HomeIcon, UserRound,  Rss,  Crop, Pencil, Computer, Book, Rocket, Speech, Link, Target } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <WhatsApp />,
        src: "https://wa.me/5491136627340"
        
    },
    {
        id: 2,
        logo: <LinkedIn/>,
        src: "https://www.linkedin.com/in/gonzalo-de-rito-a833a3177/",
    },
   
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Power apps Developer",
        subtitle: "CircoStudio",
        description: "Realizo el desarrollo , el análisis y el mantenimiento de aplicaciones utilizando las tecnologias de power platform como power apps , power automate , power BI y Sharepoint ",
        date: "Ene 2023 ",
    },
    {
        id: 2,
        title: "Manejo de redes sociales",
        subtitle: "TB contenido digital",
        description: " Creador y diseñador de contenido, Planificar y ejecutar campañas publicitarias. Creacion de Ecommerce utilizando WordPress, HTML , CSS y Javascript",
        date: "May 2021",
    }
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    }
   
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo de Paginas Web",
        description: " Diseño centrado en UI/UX para garantizar una experiencia de usuario excepcional. Tecnologías utilizadas: HTML, CSS, JavaScript, Bootstrap, SASS, WordPress, Flexbox y Grid.",
    },
    {
        icon: <Pencil />,
        title: "Soluciones Empresariales",
        description: "Creación de aplicaciones empresariales personalizadas con Power Apps y Automatización de procesos mediante Power Automate",
    },
    {
        icon: <Computer />,
        title: "Mantenimiento de aplicaciones",
        description: " Mantenimiento y optimización de aplicaciones existentes en Power apps",
    }
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Aplicación Power apps 'YPF360' Carga de novedades empresariales ",
        image: "/Captura.PNG",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Automatización de procesos corporativos con SharePoint y Power Automate",
        image: "/SharePoint-Sites-on-Power-Automate.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Web de portafolio hecha en WordPress",
        image: "/wordpress.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Aplicación Power Apps 'Proyecto AGILIS': Carga diferentes formularios destinados a una fuente de datos en Dataverse.",
        image: "/agilis.PNG",
        urlGithub: "#!",
        urlDemo: "#!",
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Juan Cyc",
        description:
            "Gonzalo es un excelente compañero, trabaja muy bien en grupo y es responsable. También se preocupa por tener buenas prácticas en su trabajo y por la calidad del mismo. Sin dudas es un gran valor para nuestro equipo.",
        imageUrl: "/juan cyc.jpg",
    }
 
];