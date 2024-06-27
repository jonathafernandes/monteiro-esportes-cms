import { Minus } from "@phosphor-icons/react";
import { CheckCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";

export function Brand() {
    return (
        <>
            <div id="brand" className="bg-zinc-800 sm:rounded text-zinc-50 w-full flex items-center gap-4 sm:gap-0 flex-col sm:items-start sm:w-auto sm:flex-row rounded-none p-8">
                <div>
                    <h3 className="mb-5 text-2xl font-bold">Destaque</h3>
                    <div className="flex flex-col gap-1 font-semibold text-transform: uppercase mb-2">
                        <h5>Marca própria</h5>
                        <Minus size={32} />
                    </div>
                    <p className="text-sm max-w-sm">
                        As LUVAS ME, nosso novo lançamento, vem para lhe dar conforto nas suas mãos, segurança nas suas defesas e mais durabilidade!
                    </p>
                    <ul className="text-sm mt-2 sm:mt-8 font-normal">
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
                    <img src="BRAND_44246.jpeg" alt="Jogador de futebol com uniforme segurando uma bola." className="h-[500px] max-w-max border-2 border-zinc-50 rounded mr-1 transition-transform transform hover:-translate-y-2" />
                    <img src="BRAND_36766.jpeg" alt="Jogador de futebol em uniforme vermelho e azul chuta uma bola de futebol." className="h-[500px] max-w-max border-2 border-zinc-50 rounded hidden lg:block mr-1 transition-transform transform hover:-translate-y-2" />
                    <img src="BRAND_442465.jpeg" alt="Atleta de futebol ajoelhado no chão fazendo gesto de comemoração." className="h-[500px] max-w-max border-2 border-zinc-50 rounded hidden xl:block transition-transform transform hover:-translate-y-2" />
                </div>
            </div>
            <br />
            <br />
            <p className="font-mono m-4">
                Trabalhamos com o melhor látex do mercado. Venha conferir e surpreenda-se! 🧤🥅🔥
            </p>
            <br />
        </>
    )
}