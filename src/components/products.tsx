import { useEffect, useState } from 'react';
import { client } from '../services/prismic';
import { ImageBroken, Minus, SealWarning, WhatsappLogo } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

interface Product {
    id: string;
    data: {
        nome: [{ text: string }];
        preco: [{ text: string }];
        imagem: { url: string };
        tamanho: string;
    };
}

async function fetchProducts() {
    try {
        const response = await client.getAllByType("produtos");
        return response;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return [];
    }
}

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const productsData = await fetchProducts();
            const transformedProducts = productsData.map((product) => ({
                id: product.id,
                data: {
                    nome: product.data.nome,
                    preco: product.data.preco,
                    imagem: product.data.imagem,
                    tamanho: product.data.tamanho,
                },
            }));
            setProducts(transformedProducts);
            setLoading(false);
        }

        fetchData();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.data.nome[0].text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id="products" className="w-full flex flex-col">
            <h3 className="text-2xl mt-24 font-bold sm:text-start text-center sm:ml-10">Produtos</h3>
            <Minus size={32} className="sm:ml-10 my-0 mx-auto" />
            <div className="flex flex-wrap mt-12 mb-32 sm:ml-10 gap-4 font-mono sm:justify-start justify-center">
                <input
                    type="text"
                    placeholder="Pesquisar produtos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-11/12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
                />
                {loading && <p>Carregando produtos...</p>}
                {searchTerm && filteredProducts.length === 0 && (
                    <div className="w-full text-center mb-4">
                        <div className='flex gap-1 items-center'>
                            <SealWarning size={20} weight="regular" />
                            <h2 className='text-lg'>Nenhum produto encontrado com esse nome. Tente com outro termo ou veja outros:</h2>
                        </div>
                    </div>
                )}
                {(searchTerm && filteredProducts.length > 0 ? filteredProducts : products).map(product => (
                    <Dialog.Root key={product.id}>
                    <div className='flex flex-col'>
                        <Dialog.Trigger className="w-[80vw] h-full sm:w-56 flex flex-col p-4 rounded-md bg-gray-100 shadow-md ring-1 ring-gray-200 transition-transform transform hover:-translate-y-2">
                            {!product.data.imagem.url && <div className='flex gap-1 items-center mb-auto'>
                                <ImageBroken size={22} />
                                <span className='text-xs'>Imagem não disponível</span>
                            </div>}
                            {product.data.imagem.url && (
                                <img
                                    src={product.data.imagem.url}
                                    alt={product.data.nome[0].text}
                                    className='w-full h-auto object-cover cursor-zoom-in'
                                />
                            )}
                            <h4 className="text-sm mt-2 text-transform: uppercase text-start">{product.data.nome[0].text}</h4>
                            <div className='flex items-center gap-1 text-zinc-800 text-xs text-transform: uppercase'>
                                <span>Tamanho</span>
                                <span className='bg-zinc-300 rounded-full p-1'>{product.data.tamanho}</span>
                                </div>
                            <p className="text-lg font-bold">R$ {product.data.preco[0].text}</p>
                            <p className="text-xs">Até 8x sem juros</p>
                        </Dialog.Trigger>
                        <button className="bg-[#25d366] border border-[#128c7e] mt-2 p-1 transition duration-300 hover:bg-[#1ebd59] text-xs">
                            <a href="https://api.whatsapp.com/send/?phone=82988860744&text&type=phone_number&app_absent=0" target="_blank" className="flex items-center gap-1 justify-center">
                                <span>Compre pelo WhatsApp</span>
                                <WhatsappLogo size={18} weight="fill" />
                            </a>
                        </button>
                    </div>

                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                        <Dialog.Content className="p-0 sm:p-4 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[440px] w-[97%] sm:w-full bg-white rounded-md outline-none">
                            {!product.data.imagem.url && <div className='flex gap-1 items-center mb-16'>
                                <span className='text-xs'>Imagem não disponível</span>
                            </div>}
                            <img src={product.data.imagem.url} alt={product.data.nome[0].text} className="w-full h-auto object-cover rounded-md" />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                ))}
            </div>
        </div>
    );
}
