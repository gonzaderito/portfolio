import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlGithub, urlDemo } = data;

    return (
        <div
            key={id}
            className="p-6 border border-teal-50 rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
            <h3 className="mb-4 text-xl text-center">{title}</h3>
            <div className="w-full h-80 overflow-hidden rounded-2xl mb-4">
                <Image
                    src={image}
                    alt={title}
                    width={600} // Ajusta el ancho
                    height={400} // Ajusta la altura
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="flex gap-5 mt-5 justify-center">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox;
