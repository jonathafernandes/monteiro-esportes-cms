import { MouseScroll } from '@phosphor-icons/react';
import { Header } from './components/header';
import { Products } from './components/products';
import { Brand } from './components/brand';
import { Footer } from './components/footer';

function App() {
  return (
    <main className="flex min-h-screen max-w-screen-2xl my-0 mx-auto flex-col items-center justify-between">
      <Header />
      <ul className="mb-10 flex items-start gap-4 justify-start">
        <li>
          <img src="/ADDYY.svg" alt="" className="w-9 sm:w-14 rounded" />
        </li>
        <li>
          <img src="/puma-logo-cover-958x575.png" alt="" className="w-9 sm:w-14 rounded" />
        </li>
        <li>
          <img src="logo-me.jpg" alt="" className="w-[38.2px] sm:w-[59.5px] rounded" />
        </li>
        <li>
          <img src="/NKE.svg" alt="" className="w-9 sm:w-14 rounded" />
        </li>
        <li>
          <img src="/D_NQ_NP_803528-MLB70920862224_082023-O.webp" alt="" className="w-9 sm:w-14 rounded" />
        </li>
      </ul>

      <p className="text-center mt-10 mb-24">
        Vendemos conforto e qualidade para vocês! 🥰👟
      </p>

      <MouseScroll size={32} color="#212121"/>

      <Products />
      <Brand />
      <Footer />
    </main>
  );
}

export default App;
