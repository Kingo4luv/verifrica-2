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
        description: "With an easy account and balance check, you can instantly check if users have the funds to make an effective payment and increase your account funding rate."
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: "Verifrica payment platform helps you meet open banking and PSD2 requirements which include secure access to accounts, strong customer authentication, and consent management with the aim of improving customer authentication processes."
    },
]

const title = `Make request and gain access to real-time balance data.`;
const description = `Verify user's income and expenses transaction balance by requesting the accounts/balance/get endpoint up-to-the-minute balance data can be received. Once the user's account is connected to their bank credentials`;

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
      <HowItWorkSection hasDisclosure={false} hasCode={true} title={title} description={description}/>
      <FooterSection />
    </div>
    )
}

export default Balance;