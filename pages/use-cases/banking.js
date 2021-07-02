import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import RocketIcon from '../../public/assets/svgs/rockets.svg'
import UserExperienceIcon from '../../public/assets/svgs/user-experience.svg'
import GearIcon from '../../public/assets/svgs/gear.svg'
import RealTimeIcon from '../../public/assets/svgs/real-time.svg'
import AuthenticationIcon from '../../public/assets/svgs/authentication.svg'
import TaxIcon from '../../public/assets/svgs/tax.svg'
import BankingIcon from '../../public/assets/svgs/banking.svg'
import SuitcaseIcon from '../../public/assets/svgs/suitcase.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Faster account opening and account funding",
        icon: RocketIcon,
        description: 'When users bind their account using login credentials, Auth retrieves account and routing information immediately. Verifrica works with every ACH processor to make account funding quick and easy.'
    },
    {
        title: "Seamless user experience",
        icon: UserExperienceIcon,
        description: 'Balance automatically checks to see if users have sufficient money to complete a transaction and payment. With a smooth balance check, you can boost your account funding rate.'
    },
    {
        title: "Reduce fraudulent sign ups",
        icon: GearIcon,
        description: `Identity verifies users' identities against information held on file at the bank, such as their identification, phone number, address, and email address.`
    },
    {
        title: "Switch direct deposits",
        icon: BankingIcon,
        description: 'With Deposit Switch users can adjust the destination of their direct deposits more easily and quickly'
    },
    {
        title: "Verify income and employment",
        icon: SuitcaseIcon,
        description: 'Income enables people easily check their earnings and jobs in the way that suits them best.'
    },
]

const heroContent = {
    title: "Make bank enrollment simple and fast",
    description: "Provide users with full  banking experience, help fund their accounts, manage savings, and plan for their financial future.",
    image: "/assets/img/banking.jpg"
}

const  problemSolution = {
    problem: "In today's world, opening a new bank account always necessitates manually checking two tiny micro-deposits. This procedure will take up to two days and is vulnerable to user input mistakes, which can cost the bank customers.",
    solution: "Verifrica helps users to safely connect their bank account using their login credentials in a matter of seconds. Customers will be up and running on your banking items the next day if you integrate with Plaid. For your bank, this might mean more loyal and committed customers."
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

const Banking = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Banking</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection heroContent={heroContent}/>
      <ClientSection />
      <ProblemSolutionSection problemSolution={problemSolution} />
      <ProductFeatureSection items={items} />
      <InitiatePaymentSection series={series}/>
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default Banking;