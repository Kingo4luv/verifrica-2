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
        title: "Verify  borrower’s assets digitally",
        icon: VerifyAssetIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Verify borrower’s idetities",
        icon: IdentityIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Check balance in real time",
        icon: RealTimeIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Instantly authenticate accounts",
        icon: AuthenticationIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Check final obligations",
        icon: TaxIcon,
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
    title: "A faster, more secure way for borrowers to access capital",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in.",
    image: "/assets/img/lending.jpg"
}

const  problemSolution = {
    problem: "Receiving payments via direct bank transfer is significantly less expensive than using credit cards, but getting users signed in and authenticated is a cumbersome process.",
    solution: "Verifrica makes it faster and easier to set up bank payments through a flow designed with the user experience and security in mind. Users enter their online credentials and Plaid instantly authenticates their account. Plus, in the US, Plaid works with any ACH processor (including Stripe and Dwolla) to simplify bank-to-bank payments."
}

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
      <InitiatePaymentSection />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default Lending;