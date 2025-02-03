
import TransitionPage from "@/components/transition-page";
import SliderServices from "@/components/slider-services";

const Services = () => {
    return ( 
        <>
    

        <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                        <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea. Además, brindo servicios de Power Apps, Power Automate y Power BI, ayudando a optimizar procesos empresariales, automatizar flujos de trabajo y generar análisis de datos efectivos, maximizando la eficiencia y productividad de las empresas.</p>
                        <a href="https://wa.me/5491136627340" target="_blank" rel="Celular">
  <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
    Contacta conmigo
  </button>
</a>
                 </div>

                    {/* SLIDER */}
                <div>
                     <SliderServices />
                </div>
            </div>
        </>

     );
}
 
export default Services;