import Head from 'next/head';
import HeaderComponent from '../components/landing/header';

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Verifrica | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderComponent />
    </div>
  )
}
