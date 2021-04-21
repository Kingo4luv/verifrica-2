import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import CareerHeaderSection from '../../components/career/Header';
import CareerTeamSection from '../../components/career/Team';
import CareerBenefitSection from '../../components/career/Benefit';
import CareerPostionSection from '../../components/career/Postions';
export default function Company() {
  return (
    <div className="Company">
      <Head>
        <title>Verifrica | Career</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CareerHeaderSection />
      <CareerTeamSection />
      <CareerBenefitSection />
      <CareerPostionSection />
      <FooterSection />
    </div>
  )
}