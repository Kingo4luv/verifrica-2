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
        title: "Snapshot of a user’s finances",
        icon: SnapshotIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Transaction Insights",
        icon: PreventSearchIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
]

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
      <HowItWorkSection hasDisclosure={true} hasCode={true} />
      <BlueMobile />
      <FooterSection />
    </div>
    )
}

export default Assets;