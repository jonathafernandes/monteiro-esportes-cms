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
      
      <ul className="mx-0 my-20 sm:m-20 flex gap-4">
        <li>
          <img src="MONTEIES.jpg" alt="Monteiro Esportes" className="w-13 h-11 sm:w-15 sm:h-20 rounded" />
        </li>
        <li>
          <img src="ADDYY.jpg" alt="Addidas" className="w-13 h-11 sm:w-15 sm:h-20 rounded" />
        </li>
        <li>
          <img src="PMA.jpg" alt="Puma" className="w-13 h-11 sm:w-15 sm:h-20 rounded" />
        </li>
        <li>
          <img src="NKE.jpg" alt="Nike" className="w-13 h-11 sm:w-15 sm:h-20 rounded" />
        </li>
        <li>
          <img src="MZUN.webp" alt="Mizuno" className="w-13 h-11 sm:w-15 sm:h-20 rounded" />
        </li>
      </ul>

      <Products />
      <Brand />
      <Footer />
    </main>
  );
}

export default App;
