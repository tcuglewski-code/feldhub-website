import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { Pricing } from '@/components/sections/Pricing';
import { Reference } from '@/components/sections/Reference';
import { Contact } from '@/components/sections/Contact';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Pricing />
      <Reference />
      <Contact />
      <Footer />
    </main>
  );
}
