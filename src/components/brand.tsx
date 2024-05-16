import { CheckCircle, Copyright, PlusCircle } from "@phosphor-icons/react/dist/ssr";

export function Brand() {
    return (
        <>
            <div id="brand" className="bg-zinc-950 text-zinc-50 w-full flex gap-4 sm:gap-0 flex-col sm:items-start sm:w-auto sm:flex-row py-8 px-16 sm:px-8 rounded-none sm:rounded">
                <div>
                    <h3 className="mb-5 text-2xl font-bold">Destaque</h3>
                    <div className="flex items-center gap-1 font-semibold text-transform: uppercase mb-2">
                        <h5>Marca própria</h5>
                        <Copyright size={18} />
                    </div>
                    <p className="text-xs font-mono max-w-sm">
                        🗣️ As LUVAS ME, nosso novo lançamento, vem para lhe dar conforto nas suas mãos, segurança nas suas defesas e mais durabilidade!
                    </p>
                    <ul className="text-xs mt-4 font-normal">
                        <li className="flex gap-1 items-center ">
                            <CheckCircle size={20} weight="fill" />
                            <span>
                                Contact látex Alemão 4mm
                            </span>
                        </li>
                        <li className="flex gap-1 items-center">
                            <CheckCircle size={20} weight="fill" />
                            <span>
                                Silicones interno
                            </span>
                        </li>           
                        <li className="flex gap-1 items-center">
                            <CheckCircle size={20} weight="fill" />
                            <span>
                                Cinta com volta dupla
                            </span>
                        </li>   
                        <li className="flex gap-1 items-center">
                            <CheckCircle size={20} weight="fill" />
                            <span>
                                Alta performance
                            </span>
                        </li>            
                        <li className="flex gap-1 items-center">
                            <PlusCircle size={20} weight="fill" />
                            <span>
                                Grip
                            </span>
                        </li>                  
                        <li className="flex gap-1 items-center">
                            <PlusCircle size={20} weight="fill" />
                            <span>
                                Durabilidade e resistência
                            </span>
                        </li>                                    
                        <li className="flex gap-1 items-center">
                            <PlusCircle size={20} weight="fill" />
                            <span>
                                Qualidade e estilo
                            </span>
                        </li>   
                    </ul>
                </div>
                <div className="flex">
                    <img src="/public/BRAND_36766.jpeg" alt="Detalhe da luva de goleiro com a logo da Monteiro Esportes estampada." className="w-72 border-2 border-zinc-50 rounded mr-1 transition-transform transform hover:-translate-y-2" />
                    <img src="/public/BRAND_44246.jpeg" alt="Jogador de futebol com uniforme segurando uma bola." className="w-72 border-2 border-zinc-50 rounded mr-1 hidden lg:block transition-transform transform hover:-translate-y-2" />
                    <img src="/public/BRAND_442465.jpeg" alt="Atleta de futebol em traje verde e preto aponta para cima." className="w-72 border-2 border-zinc-50 rounded hidden xl:block transition-transform transform hover:-translate-y-2" />
                </div>
            </div>
            <br />
            <br />
            <p className="font-mono mx-4">
                Trabalhamos com o melhor látex do mercado! Venha conferir e surpreenda-se! 🧤🥅🔥
            </p>
            <br />
        </>
    )
}