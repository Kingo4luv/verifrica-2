import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import DartIcon from '../../public/assets/svgs/dart.svg'
import BalanceCheckIcon from '../../public/assets/svgs/balance-check.svg'
import ChartIcon from '../../public/assets/svgs/chart.svg'
import ManageDebtIcon from '../../public/assets/svgs/manage-debt.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Encourage users to save",
        icon: DartIcon,
        description: 'Verifrica analyzes up to 24 months of clean, categorized transaction history to help users minimize unnecessary spending and direct them toward investment and savings goals.'
    },
    {
        title: "Enable in-app balance checks",
        icon: BalanceCheckIcon,
        description: 'Make checking the balances of their connected accounts inside your app an enjoyable experience for your customers by using Balance linked depository accounts in real-time.'
    },
    {
        title: "Understand’s a user’s investments",
        icon: ChartIcon,
        description: `Take advantage of investment and gain a better understanding of user's investment accounts, including account balances, holdings, and transactions that create a change in a holding.`
    },
    {
        title: "Help people manage debt",
        icon: ManageDebtIcon,
        description: 'Transactions can be used to alert users of pending debt and to offer debt repayment and refinancing options.'
    }
]

const heroContent = {
    title: "Help users boost financial health with analyzed transaction history and account data.",
    description: "Build personalized financial solutions by safely and efficiently retrieving account statements, account balances, revenue to encourage users to save, budget, and improve finances. ",
    image: "/assets/img/personal-finances.jpg"
}

const  problemSolution = {
    problem: "When users have accounts at various financial institutions, obtaining a detailed image of their financial health can be quite challenging.",
    solution: "Verifrica brings together financial data from various financial institutions and categorizes transaction data over a 24-month period, making it easy to use and analyze."
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

const PersonalFinances = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Personal Finances</title>
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

export default PersonalFinances;