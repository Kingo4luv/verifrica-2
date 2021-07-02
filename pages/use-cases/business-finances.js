import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import RocketIcon from '../../public/assets/svgs/rockets.svg'
import InvoiceIcon from '../../public/assets/svgs/invoice.svg'
import CoinIcon from '../../public/assets/svgs/coin.svg'
import FolderIcon from '../../public/assets/svgs/folder.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Faster  payment enrollment",
        icon: RocketIcon,
        description: `Users' account and routing details are pulled by Auth products, which can be used to make payments and transactions more smooth.`
    },
    {
        title: "Smoother Invoicing",
        icon: InvoiceIcon,
        description: 'Balance product instantly checks whether users have the funds to make a payment or transfer.'
    },
    {
        title: "Simplify expense management",
        icon: CoinIcon,
        description: `Identity verifies users' identities to what the bank has on hand, and Transactions can assist with locating a reimbursable transaction.`
    },
    {
        title: "Better Bookkeeping",
        icon: FolderIcon,
        description: 'For personal and business accounts, Transactions usually offers 24 months of tidy, categorized data.'
    }
]

const heroContent = {
    title: "Provide a seamless way for everyone to manage their business finances",
    description: "Verifrica helps businesses manage funds, make payments, analyze financial reports and send payroll. Making it easy for people to manage their business finances.",
    image: "/assets/img/business-finances.jpg"
}

const  problemSolution = {
    problem: "Company finance and accounting procedures are complicated experiences for both staff and clients, from bookkeeping to payroll.",
    solution: "Verifrica saves time by making it easy for consumers to link their financial accounts to your technology or app."
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

const BusinessFinances = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Business Finances</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection heroContent={heroContent}/>
      <ClientSection />
      <ProblemSolutionSection problemSolution={problemSolution} />
      <ProductFeatureSection items={items} />
      <InitiatePaymentSection  series={series}/>
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default BusinessFinances;