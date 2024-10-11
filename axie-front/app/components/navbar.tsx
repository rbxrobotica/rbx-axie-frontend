// app/components/navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Página Inicial</Link>
        </li>
        <li>
          <Link href="/busca-singular">Busca Singular</Link>
        </li>
        <li>
          <Link href="/busca-em-lote">Busca em Lote</Link>
        </li>
      </ul>
    </nav>
  );
}