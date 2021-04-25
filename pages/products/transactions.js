import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import RingSection from "../../components/products/Transaction/RingSection";
import UseCases from "../../components/products/Transaction/Usecases";
import HeaderSection from "../../components/products/Transaction/HeaderSection";
import HowItWorkSection from "../../components/products/HowItworkSection";


const Transaction = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Products - Transaction</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <RingSection />
      <HowItWorkSection hasDisclosure={true} hasCode={false} />
      <UseCases />
      <FooterSection />
    </div>
    )
}

export default Transaction;