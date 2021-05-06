import Head from 'next/head';
import FooterSection from '../../../components/FooterSection';
import { CollectionsContent } from '../../../components/help-desk/collections/Content';
import { SupportHero } from '../../../components/help-desk/Hero';
import Nav from '../../../components/nav';
export default function Collections() {
  return (
    <div className="Collections">
      <Head>
        <title>Verifrica | Colections</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="black" />
      <SupportHero title={false} />
      <CollectionsContent />
      <FooterSection />
    </div>
  )
}