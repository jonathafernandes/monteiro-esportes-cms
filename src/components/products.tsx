import { useEffect, useState } from 'react';
import { client } from '../services/prismic';
import { Minus, WhatsappLogo } from '@phosphor-icons/react';

interface Product {
    id: string;
    data: {
        nome: [{ text: string }];
        preco: [{ text: string }];
        imagem: { url: string };
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

    useEffect(() => {
        async function fetchData() {
        const productsData = await fetchProducts();
        const transformedProducts = productsData.map((product) => ({
            id: product.id,
            data: {
            nome: product.data.nome,
            preco: product.data.preco,
            imagem: product.data.imagem,
            },
        }));
        setProducts(transformedProducts);
        }

        fetchData();
    }, []);

    return (
        <div id="products"className="flex flex-col m:0 sm:ml-10">
            <h3 className="text-2xl mt-24 font-bold sm:text-start text-center">Produtos</h3>
            <Minus size={32} className="sm:m-0 my-0 mx-auto" />
            <div className="flex flex-wrap mt-12 mb-32 gap-4 font-mono sm:justify-start justify-center">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col p-4 rounded-md bg-gray-100 shadow-md ring-1 ring-gray-200 transition-transform transform hover:-translate-y-2">                  
                        <img
                            src={product.data.imagem.url}
                            alt={product.data.nome[0].text}
                            width={200}
                            height={200}
                        />
                        <h4 className="text-base font-semibold mt-2 text-transform: uppercase">{product.data.nome[0].text}</h4>
                        <p className="text-ls font-light">R$ {product.data.preco[0].text}</p>
                        <p className="text-xs">Até 8x sem juros</p>
                        <button className="bg-[#25d366] border border-[#128c7e] mt-2 p-1 transition duration-300 hover:bg-[#1ebd59] text-xs">
                            <a href="https://api.whatsapp.com/send/?phone=82988860744&text&type=phone_number&app_absent=0" target="_blank" className="flex items-center gap-1 justify-center">
                                <span>
                                Compre pelo WhatsApp
                                </span>
                                <WhatsappLogo size={18} weight="fill" />
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
