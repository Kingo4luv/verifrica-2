import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import RealTimeIcon from '../../public/assets/svgs/real-time.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import HeaderSection from "../../components/products/Balance/HeaderSection";
import ProductFeatures from "../../components/products/ProductFeatures";
import HowItWorkSection from "../../components/products/HowItworkSection";

const items = [
    {
        title: "Real-time data",
        icon: RealTimeIcon,
        description: "Retrieve user's expenses and income transactions balance information from both current and available balance."
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: "Retrieve user's expenses and income transactions balance information from both current and available balance. "
    },
]

const Balance = () => {
    return(
    <div className="Balance">
      <Head>
        <title>Verifrica | Products - Balance</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <ProductFeatures items={items}/>
      <HowItWorkSection hasDisclosure={true} hasCode={true} />
      <FooterSection />
    </div>
    )
}

export default Balance;