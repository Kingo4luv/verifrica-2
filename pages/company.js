import Head from 'next/head';
import TeamSection from '../components/company/team';
import Nav from '../components/landing/nav';
import ClientSection from '../components/ClientSection';
import FooterSection from '../components/FooterSection';
import Link from 'next/link';
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import CompanyHeaderSection from '../components/company/HeaderSection';
import BusinessVisionSection from '../components/company/BusinessVisonSecion';
import Culture from '../components/company/Culture';
import CareerSection from '../components/company/Career';
export default function Company() {
  return (
    <div className="Company">
      <Head>
        <title>Verifrica | Company</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CompanyHeaderSection/>
      <BusinessVisionSection/>
      <Culture/>
      <TeamSection />
      <ClientSection />
      <CareerSection/>
      <FooterSection />
    </div>
  )
}