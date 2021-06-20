import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import ConfirmDataIcon from '../../public/assets/svgs/confirm-data.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import PreventSearchIcon from '../../public/assets/svgs/prevent-search.svg'
import HeaderSection from "../../components/products/Authentication/HeaderSection";
import ProductFeatures from "../../components/products/ProductFeatures";
import HowItWorkSection from "../../components/products/HowItworkSection";
import UseCases from "../../components/products/Usecases";
import BankingIcon from '../../public/assets/svgs/banking.svg'

const items = [
    {
        title: "Increase conversion rates",
        icon: ConfirmDataIcon,
        description: ''
    },
    {
        title: "Prevent misdirected payments",
        icon: PreventSearchIcon,
        description: 'Verifrica authentication helps you verify every information provided to ensure, each information is accurate thereby preventing the instances of misdirected payments and invalid data.'
    },
    {
        title: "Open Banking and PSD2 integrations",
        icon: OpenBankingIcon,
        description: `Our API provides open access to financial data from financial institutions. Third parties are provided access to customer's financial data based on their approval and the benefit of leveraging this data with the aim of improving customer authentication processes with a seamless user experience.`
    },
]

const usecases = {
    subtitle: "Understand how our product works, and make the most of it.",
    items: [
        {
            title: "Banking",
            icon: BankingIcon,
            description: 'Providing users with a banking experience, fund your account and manage savings.',
        },
    ]
}

const title = `Seamless account authentication`
const description = `The /auth/get endpoint allows you to make a request to retrieve the bank account and routing numbers, as well as high-level account data and balances, when open, after a user connects their account using bank credentials.`

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
      <HowItWorkSection disclosure={true} hasCode={true} title={title} description={description} />
      <UseCases usecases={usecases}/>
      <FooterSection />
    </div>
    )
}

export default Authentication;