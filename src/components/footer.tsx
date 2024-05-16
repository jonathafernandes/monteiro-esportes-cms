import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <footer id="footer" className="bg-zinc-300 text-sm mt-12 p-12 flex flex-col gap-4 items-center justify-evenly w-full sm:flex-row">
            <p>&copy; Monteiro Esportes 2024. Todos os direitos reservados.</p>
            <ul className="flex items-center gap-1">
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=82988860744&text&type=phone_number&app_absent=0" target="_blank" className="transition duration-200 ease-in-out hover:text-black"><InstagramLogo size={24} weight="fill" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/monteiroesportes2021/" target="_blank" className="transition duration-200 ease-in-out hover:text-black"><WhatsappLogo size={24} weight="fill" /></a>
                </li>
                </ul>
        </footer>
    )
}