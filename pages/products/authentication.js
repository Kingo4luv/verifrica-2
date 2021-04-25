import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import ConfirmDataIcon from '../../public/assets/svgs/confirm-data.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import PreventSearchIcon from '../../public/assets/svgs/prevent-search.svg'
import HeaderSection from "../../components/products/Authentication/HeaderSection";
import ProductFeatures from "../../components/products/Authentication/ProductFeatures";
import UseCases from "../../components/products/Authentication/Usecases";
import HowItWorkSection from "../../components/products/HowItworkSection";

const items = [
    {
        title: "Increase conversion rates",
        icon: ConfirmDataIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Prevent misdirected payments",
        icon: PreventSearchIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Open Banking and PSD2 integrations",
        icon: OpenBankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
]

const Authentication = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Products - Authentication</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <ProductFeatures items={items} />
      <HowItWorkSection disclosure={true} hasCode={true} />
      <UseCases/>
      <FooterSection />
    </div>
    )
}

export default Authentication;