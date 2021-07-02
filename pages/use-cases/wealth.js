import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import BarChartIcon from '../../public/assets/svgs/bar-chart.svg'
import BankingIcon from '../../public/assets/svgs/banking.svg'
import SmartMoneyIcon from '../../public/assets/svgs/smart-money.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Understand a user’s investments",
        icon: BarChartIcon,
        description: `Investments provide information about a user's financial records, such as account balances, shares, and transfers that change a holding`
    },
    {
        title: "Streamline ACH account funding",
        icon: BankingIcon,
        description: 'To power ACH account financing transfers, Auth helps you to authenticate accounts at all financial institutions. Use our Balance and Identity products to further reduce ACH chance.'
    },
    {
        title: "Smart, simple money investment",
        icon: SmartMoneyIcon,
        description: 'With insight into payment performance, different payment forms, and bank partner versatility, Bank Transfers offers a smarter, smoother money flow approach and a way to quicker customer activation.'
    }
]

const heroContent = {
    title: "Provide practical guides to users and help them expand their assets under management ",
    description: "With Verifrica, help people make sound financial choices, good business insight, and plan for the future with a holistic guide.",
    image: "/assets/img/banking.jpg"
}

const  problemSolution = {
    problem: "Due to low-fidelity records and low transfer rates, obtaining reliable held-away account information is difficult. Furthermore, account financing workflows continue to be error-prone and time-consuming for borrowers, posing a barrier to increasing funds under control.",
    solution: "Verifrica allows investment advisers and wealth management platforms to integrate knowledge from held-away accounts in order to provide more holistic financial guidance. Verifrica will also help businesses expand their Assets under Management(AUM) by facilitating ACH account financing, which has transfer rates that always outperform the competition."
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

const Wealth = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Wealth</title>
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

export default Wealth;