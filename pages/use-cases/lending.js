import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import VerifyAssetIcon from '../../public/assets/svgs/verify-asset.svg'
import IdentityIcon from '../../public/assets/svgs/identity.svg'
import GearIcon from '../../public/assets/svgs/gear.svg'
import RealTimeIcon from '../../public/assets/svgs/real-time.svg'
import AuthenticationIcon from '../../public/assets/svgs/authentication.svg'
import TaxIcon from '../../public/assets/svgs/tax.svg'
import BankingIcon from '../../public/assets/svgs/banking.svg'
import SuitcaseIcon from '../../public/assets/svgs/suitcase.svg'
import OverdraftIcon from '../../public/assets/svgs/overdraft.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Digitally verify borrower's asset",
        icon: VerifyAssetIcon,
        description: `Account balances, uncategorized and categorized transactions, and account identity information are all provided in Assets' consolidated report.`
    },
    {
        title: "Verify the identity of borrowers",
        icon: IdentityIcon,
        description: `Verify users' identity to what the bank has on hand, such as their name, phone number, address, and email address, in order to reduce fraud using Identity.`
    },
    {
        title: "Check balance in real-time",
        icon: RealTimeIcon,
        description: `Users' balances are quickly checked to see if they have enough money to make payment or transfer.`
    },
    {
        title: "Instantly authenticate accounts",
        icon: AuthenticationIcon,
        description: `Retrieve user's account and routing details, which can be used to make payments and debit withdrawals smoothly and with ease.`
    },
    {
        title: "Check final obligations",
        icon: TaxIcon,
        description: 'Liabilities product provides users with real-time knowledge about their financial obligations, such as loans and card debit.'
    },
    {
        title: "Switch direct deposits",
        icon: BankingIcon,
        description: 'Users can adjust the destination of their direct deposits more easily and quickly with Deposit Switch.'
    },
    {
        title: "Verify income and employment",
        icon: SuitcaseIcon,
        description: 'Income enables people to easily check their earnings and work in the way that suits them best'
    },
]
const heroContent = {
    title: "Borrowers would be able to access capital in a quicker and more secure manner",
    description: "Verifrica provides a seamless, fast, and secure means of using financial data to safely grant credit and loans with confidence.",
    image: "/assets/img/lending.jpg"
}

const  problemSolution = {
    problem: "Lenders need a complete picture of their borrower's financial data but gathering income data, account balances, and asset history are tedious for both the borrower and the lender. Furthermore, connecting borrowers' bank accounts to obtain capital and repay loans is a time-consuming operation.",
    solution: "Verifrica offers borrowers an easy, seamless loan process and gives lenders access to bank data so they can make informed loan decisions with confidence."
}

const series = [{
        title: "Integrate with Verifrica",
        description: "Our front-end module can be integrated into your app or digital service with only a few lines of code. Your users will be able to log in using the Verifrica token.",
        image: '/assets/img/initiate-payment.svg'
    },
    {
        title: "Customize for conversion",
        description: "Personalize the module to match your brand or user expectations, including the order in which financial institutions appear. Select their bank, locate accounts, and enter bank username and password to connect to their account.",
        image: '/assets/svgs/conversion.svg'
    },
    {
        title: "Get user-permissioned bank data",
        description: "Our front-end module can be integrated into your app or digital service with only a few lines of code. Your users will be able to log in using the Verifrica token.",
        image: '/assets/svgs/permission-success.svg'
    },
]

const Lending = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Lending</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection heroContent={heroContent}/>
      <ClientSection />
      <ProblemSolutionSection problemSolution={problemSolution} />
      <ProductFeatureSection items={items} />
      <InitiatePaymentSection series={series} />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default Lending;