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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Smoother Invoicing",
        icon: InvoiceIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Simplify expense management",
        icon: CoinIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Better Bookkeeping",
        icon: FolderIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    }
]

const heroContent = {
    title: "Make it easy for everyone to manage business finances",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in.",
    image: "/assets/img/business-finances.jpg"
}

const  problemSolution = {
    problem: "From bookkeeping to payroll, business finance and accounting processes are complex experiences for employees and customers alike.",
    solution: "Verifrica reduces administrative time by giving users an easier way to connect their financial accounts to your software or app."
}

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
      <InitiatePaymentSection />
      <ContactSection />
      <FooterSection />
    </div>
    )
}

export default BusinessFinances;