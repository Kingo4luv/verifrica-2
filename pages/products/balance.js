import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import RealTimeIcon from '../../public/assets/svgs/real-time.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import HeaderSection from "../../components/products/Balance/HeaderSection";
import ProductFeatures from "../../components/products/Balance/ProductFeatures";
import HowItWork from "../../components/products/Balance/HowItWork";

const items = [
    {
        title: "Real-time data",
        icon: RealTimeIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
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
      <HowItWork />
      <FooterSection />
    </div>
    )
}

export default Balance;