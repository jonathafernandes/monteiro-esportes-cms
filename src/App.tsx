import { useEffect, useState } from 'react';
import './App.css';
import { client } from './services/prismic';

async function fetchProducts() {
  try {
    const response = await client.getAllByType("produtos");
    return response;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {products.map(product => (
        <div key={product.id}>
          <h4>{product.data.nome[0].text}</h4>
          <p>{product.data.preco[0].text}</p>
          <img src={product.data.imagem.url} alt="Imagem do produto" />
        </div>
      ))}
    </div>
  );
}

export default App;
