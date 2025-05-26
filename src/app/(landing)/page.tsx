import Blocks from '@/components/landing/blocks';
import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import Navigation from '@/components/landing/navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="mt-16 flex w-full flex-col bg-surface">
        <Hero />
        <Blocks />
        <Features />
        <Footer />
      </main>
    </>
  );
}
