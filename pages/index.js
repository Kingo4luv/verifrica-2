import Head from 'next/head';
import HeaderComponent from '../components/landing/header';
import ClientSection from '../components/ClientSection';
import ServicesSection from '../components/landing/ServicesSection';
import BlueSection from '../components/landing/BlueSection';
import StarImage from '../components/landing/StarImage';
import ExperienceSection from '../components/landing/ExperienceSection';
import ForDevelopersSection from '../components/landing/ForDevelopersSection';
import FooterSection from '../components/FooterSection';


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
      <ClientSection />
      <ServicesSection />
      <BlueSection />
      <StarImage />
      <ExperienceSection />
      <ForDevelopersSection />
      <FooterSection />
    </div>
  )
}
