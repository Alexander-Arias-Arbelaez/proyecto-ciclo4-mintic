import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <p>Bienvenido a mi pagina</p>
      <Link href= '/admin/usuarios'>
          <p>Ir a admin usuarios</p>
      </Link>
    </div>
  )
}

export default Home
