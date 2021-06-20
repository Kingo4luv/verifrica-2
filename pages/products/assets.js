import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import SnapshotIcon from '../../public/assets/svgs/snapshot.svg'
import PreventSearchIcon from '../../public/assets/svgs/prevent-search.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import HeaderSection from "../../components/products/Assets/HeaderSection";
import ProductFeatures from "../../components/products/ProductFeatures";
import BlueMobile from "../../components/products/Assets/BlueMobileSection";
import HowItWorkSection from "../../components/products/HowItworkSection";


const items = [
    {
        title: "Details of a user's finances",
        icon: SnapshotIcon,
        description: `Retrieve summary of user's previous transactions, current account balances, and identity information.`
    },
    {
        title: "Transaction Insights",
        icon: PreventSearchIcon,
        description: `Inspect customer's transaction data, such as type, location, and customer name— the information is standardized across institutions enabling you to give out loan with confidence`
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: 'Verifrica payment platform helps you meet open banking and PSD2 requirements which include secure access to accounts, strong customer authentication, and consent management with the aim of improving customer authentication processes.'
    },
]

const title = `Make request and gain access to users asset report`;
const description = `Send a POST request to the Assets endpoint to call users financial data and identity.`;

const Assets = () => {
    return(
    <div className="Balance">
      <Head>
        <title>Verifrica | Products - Assets</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <ProductFeatures items={items}/>
      <HowItWorkSection hasDisclosure={false} hasCode={true} title={title} description={description} />
      <BlueMobile />
      <FooterSection />
    </div>
    )
}

export default Assets;