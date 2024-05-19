import { MouseScroll } from '@phosphor-icons/react';
import { Header } from './components/header';
import { Products } from './components/products';
import { Brand } from './components/brand';
import { Footer } from './components/footer';

function App() {
  return (
    <main className="flex min-h-screen max-w-screen-2xl my-0 mx-auto flex-col items-center justify-between">
      <Header />

      <MouseScroll size={32} color="#212121"/>
      
      <ul className="m-20 flex items-start gap-4 justify-start">
        <li>
          <img src="ADDYY.svg" alt="Addidas" className="w-12 sm:w-20 max-w-fit rounded" />
        </li>
        <li>
          <img src="PMA.png" alt="Puma" className="w-12 sm:w-20 max-w-fit rounded" />
        </li>
        <li>
          <img src="MONTEIES.jpg" alt="Monteiro Esportes" className="w-[51.5px] sm:w-[84.9px] max-w-fit rounded" />
        </li>
        <li>
          <img src="NKE.svg" alt="Nike" className="w-12 sm:w-20 max-w-fit rounded" />
        </li>
        <li>
          <img src="MZUN.webp" alt="Mizuno" className="w-12 sm:w-20 max-w-fit rounded" />
        </li>
      </ul>

      <Products />
      <Brand />
      <Footer />
    </main>
  );
}

export default App;
