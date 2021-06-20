import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import HowItWorkSection from "../../components/products/HowItworkSection";
import HeaderSection from "../../components/products/Identity/HeaderSection.js";
import StarImageSection from "../../components/products/Identity/StarImageSection.js";

const title = `Identity data straight from the source`;
const description = `The /identity/get endpoint helps you to access account holder information such as names, emails, phone numbers, and addresses directly from the financial institution's database.`

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
      <HowItWorkSection disclosure={false} hasCode={true} title={title} description={description}/>
      <FooterSection />
    </div>
    )
}

export default Identity;