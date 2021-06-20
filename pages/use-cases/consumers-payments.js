import Head from "next/head";
import ClientSection from '../../components/ClientSection';
import CloudIcon from '../../public/assets/svgs/cloud.svg'
import GearIcon from '../../public/assets/svgs/gear.svg'
import OverdraftIcon from '../../public/assets/svgs/overdraft.svg'
import InitiatePaymentSection from '../../components/InitiatePaymentSection';
import FooterSection from '../../components/FooterSection';
import HeaderSection from "../../components/use-cases/HeaderSection";
import ProblemSolutionSection from "../../components/use-cases/ProblemSolution";
import ProductFeatureSection from "../../components/use-cases/ProductFeature";
import ContactSection from "../../components/use-cases/ContactSection";


const items = [{
        title: "Get account and routing numbers",
        icon: CloudIcon,
        description: 'Discover how to make the most of financial data.'
    },
    {
        title: "Lower risk and reduce fraud",
        icon: GearIcon,
        description: 'Discover how to make the most of financial data.'
    },
    {
        title: "Reduce NSF fees  and overdrafts",
        icon: OverdraftIcon,
        description: `Users' balances are quickly checked to see if they have enough money to make payment or transfer.`
    },
]

const heroContent = {
    title: "Help people to pay their friends, bills, or other businesses with ease.",
    description: "Verifrica provides an easy means for people to send money to their family and friends, pay bills, and other payment transactions effortlessly.",
    image: "/assets/img/consumers-payments.jpg"
}

const  problemSolution = {
    problem: "While receiving payments via direct bank transfer is less costly than using credit cards, however, having users signed in and authenticated is a time-consuming process.",
    solution: "Verifrica's flow is built with the user's experience and protection in mind, making it quicker and easier to set up bank transfers. Verifrica automatically authenticates users' accounts when they enter their online credentials. Verifrica also simplifies bank-to-bank transfers by integrating with any ACH processor."
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
        image: '/assets/svgs/conversion.svg'
    },
]

const ConsumersPayment = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Use Cases - Consumer's Payment</title>
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

export default ConsumersPayment;