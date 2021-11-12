import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
      <div>
        <Head>
          <title>Home | Admin Usuarios</title>
        </Head>
        <div>Página de admin de usuarios</div>
        <Link href="/">
          <a className="cursor-pointer">Ir al home</a>
        </Link>
      </div>
    );
}

export default index
