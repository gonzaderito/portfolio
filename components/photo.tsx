"use client";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <motion.div>
        <motion.svg
          className="w-full h-full " // Usar el tamaño completo del contenedor
          fill="none" // Mantener el fondo transparente
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253" // Centrado en el SVG
            cy="253" // Centrado en el SVG
            r="280" // Ajustar el radio del círculo para que encaje bien
            stroke="#f2b698" // Color del borde
            strokeWidth="4" // Grosor del borde
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
                duration:20,
                repeat: Infinity,
                repeatType:"reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
