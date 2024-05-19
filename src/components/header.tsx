import { ListDashes } from "@phosphor-icons/react/dist/ssr";

export function Header() {
    return (
        <>
            <div id="header" className="flex flex-col items-center lg:gap-20 gap-0 lg:w-auto w-full lg:flex-row">
                <div className="text-xs font-mono p-2 sm:p-4 flex gap-2 w-full lg:w-auto justify-center border-b border-gray-500 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl lg:static lg:rounded lg:border lg:bg-gray-200 lg:p-2 lg:m-2">
                    <span>
                    🧤⚽🛍️ Chuteiras, luvas e acessórios esportivos.
                    </span>
                    <span>
                        Enviamos para todo o Brasil! 🇧🇷📦
                    </span>
                </div>
                <ul className="mt-8 flex items-center text-xs text-transform: uppercase lg:m-0">
                    <ListDashes size={20} color="#212121" className="mr-[0.2rem]"/>
                    <li className="mr-4">
                        <a href="#header" className="hover:text-zinc-700">Início</a>
                    </li>
                    <li className="mr-4">
                        <a href="#products" className="hover:text-zinc-700">Produtos</a>
                    </li>
                    <li className="mr-4">
                        <a href="#brand" className="hover:text-zinc-700">Marca própria</a>
                    </li>
                    <li>
                        <a href="#footer" className="hover:text-zinc-700">Contato</a>
                    </li>
                </ul>
            </div>
            <img src="Monteiro Esportes.png" alt="Chuteira adidas Predator XR1 X FG, ideal para futebol de campo." className="mt-20 lg:mt-0 mb-20" />
        </>
    )
}