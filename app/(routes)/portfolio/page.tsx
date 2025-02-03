import ContainerPage from "@/components/container";
import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
    return ( 
        <ContainerPage>
    <TransitionPage />
    <div className="flex flex-col justify-center h-full mt-2"> {/* Contenedor principal */}
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <div className="relative z-10 grid max-w-7xl gap-6 mx-auto mt-4 md:grid-cols-2 mb-8"> {/* Ajusta max-w */}
            {dataPortfolio.map((data) => (
                <PortfolioBox key={data.id} data={data} />
            ))}
        </div>
    </div>
</ContainerPage>

     );
}
 
export default PortfolioPage;
