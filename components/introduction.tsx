"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Photo from "@/components/photo";

const Introduction = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-8">
        <div className="relative flex justify-center items-center order-1 xl:order-none mb-8 xl:mb-0">
          {/* Contenedor de la imagen de perfil */}
          <div className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] overflow-hidden rounded-full flex justify-center items-center">
            <Image
              src="/perfil2.jpg"
              priority
              width="1000"
              height="1000"
              alt="Profile pic"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Componente Photo superpuesto sobre la imagen */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <Photo />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="mb-5 text-3xl leading-tight md:text-4xl font-semibold">
            Hola, soy Gonzalo de Rito, <br />
            <TypeAnimation
              sequence={[
                "Desarrollador Web.", 1000,
                "Desarrollador Power Apps.", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
          Desarrollador de Software con más de 2 años de experiencia especializado en crear soluciones innovadoras que optimizan procesos y potencian la productividad de las empresas. Mi pasión por la tecnología y la resolución de problemas me impulsa a entregar resultados impactantes y escalables.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
            Ver proyectos</a>
            <a href="https://wa.me/5491136627340" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
            Contacta conmigo</a>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
