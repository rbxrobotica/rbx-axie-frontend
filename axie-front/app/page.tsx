import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex  

 flex-col items-center justify-center  

 h-screen">
      <h1 className="text-3xl font-bold underline">Bem-vindo ao Axie Brasil!</h1>
      <div className="mt-4 flex space-x-4">
        <Link href="/busca-singular">
          <Button>Busca Singular</Button>
        </Link>
        <Link href="/busca-em-lote">
          <Button>Busca em Lote</Button>
        </Link>
      </div>
    </div>
  );
}