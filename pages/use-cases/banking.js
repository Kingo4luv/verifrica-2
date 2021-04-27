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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Seamless user experience",
        icon: UserExperienceIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Reduce fraudulent sign ups",
        icon: GearIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Switch direct deposits",
        icon: BankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Verify income and employment",
        icon: SuitcaseIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
]

const heroContent = {
    title: "Make bank onboarding easy and fast for customers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in.",
    image: "/assets/img/banking.jpg"
}

const  problemSolution = {
    problem: "Opening a new bank account today often requires manually verifying 2 small micro-deposits. This process can take 2-3 days and is prone to user input errors, which can result in lost customers for your bank.",
    solution: "Verifrica allows users to link their bank account securely, in a matter of seconds, using their login credentials. By integrating with Plaid, customers can be up and running with your banking products on the same day. This can mean more active and engaged users for your bank."
}

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
      <InitiatePaymentSection />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default Banking;