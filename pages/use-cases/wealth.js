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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Streamline ACH account funding",
        icon: BankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Smart, simple money investment",
        icon: SmartMoneyIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    }
]

const heroContent = {
    title: "Provide users holistic advice and grow assets under management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in.",
    image: "/assets/img/banking.jpg"
}

const  problemSolution = {
    problem: "Sourcing robust held-away account information is challenging due to low-fidelity data and poor conversion rates. Additionally, account funding workflows remain error prone and cumbersome for investors, creating roadblocks to growing assets under management.",
    solution: "Verifrica enables financial advisors and wealth management platforms to aggregate held-away account information to deliver more holistic financial advice. Firms can also use Plaid to better grow AUM through streamlined ACH account funding — with conversion rates that often far exceed the competition."
}

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
      <InitiatePaymentSection />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default Wealth;