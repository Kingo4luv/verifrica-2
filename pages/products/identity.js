import Head from "next/head";

import FooterSection from "../../components/FooterSection";
import HeaderSection from "../../components/products/Identity/HeaderSection.js";
import HowItWorks from "../../components/products/Identity/HowItWorks";
import StarImageSection from "../../components/products/Identity/StarImageSection.js";



const Identity = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Products - Identity</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <StarImageSection />
      <HowItWorks />
      <FooterSection />
    </div>
    )
}

export default Identity;