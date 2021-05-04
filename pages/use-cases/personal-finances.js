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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Enable in-app balance checks",
        icon: BalanceCheckIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Understand’s a user’s investments",
        icon: ChartIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Help people manage debt",
        icon: ManageDebtIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    }
]

const heroContent = {
    title: "Help users improve their financial health with categorized transactions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in.",
    image: "/assets/img/personal-finances.jpg"
}

const  problemSolution = {
    problem: "Obtaining a comprehensive picture of users' financial health is often times difficult when they have accounts at multiple financial institutions.",
    solution: "Verifrica consolidates financial data from multiple sources and categorizes transaction data with typically 24 months of history, making it easy to use and analyze."
}

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
      <InitiatePaymentSection />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default PersonalFinances;