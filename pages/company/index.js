import Head from 'next/head';
import TeamSection from '../../components/company/team';
import ClientSection from '../../components/ClientSection';
import FooterSection from '../../components/FooterSection';
import CompanyHeaderSection from '../../components/company/HeaderSection';
import Culture from '../../components/company/Culture';
import CareerSection from '../../components/company/Career';
import WhiteBlueSection from '../../components/WhiteBlueSection';

const whiteBlue = {
  white: {
    title: "Our Vision",
    details: "At Verifrica our goal is to build a transparent financial data platform to decentralize financial services. We design amazing user interfaces, developer-friendly technology, and smart resources that empower everyone to make amazing products and solve problems.",
    image: '/assets/svgs/telescope.svg',
    color: '#FFFFFF'
  },
  blue: {
      title: "Our Business",
      details: "We began by developing APIs that link customers, mainstream financial institutions, and developers. ",
      image: '/assets/svgs/group.svg',
      color: '#68EEA0'
  }
}

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
      <WhiteBlueSection  whiteBlue={whiteBlue}/>
      <Culture/>
      <TeamSection />
      <ClientSection />
      <CareerSection/>
      <FooterSection />
    </div>
  )
}