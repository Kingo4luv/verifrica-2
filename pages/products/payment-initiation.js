import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import ImproveConversionIcon from '../../public/assets/svgs/improved-conversion.svg'
import ReduceCostIcon from '../../public/assets/svgs/reduce-cost.svg'
import InstantPaymentsIcon from '../../public/assets/svgs/instant-payment.svg'
import FightFraudIcon from '../../public/assets/svgs/fight-fraud.svg'
import FlexiblePaymentIcon from '../../public/assets/svgs/flexible-payment.svg'
import VerifyPaymentIcon from '../../public/assets/svgs/verify-payment.svg'
import HeaderSection from "../../components/products/Payment/HeaderSection";
import ProductFeatures from "../../components/products/Assets/ProductFeatures";
import HowItWorks from "../../components/products/Assets/HowItWorks";
import BlueMobile from "../../components/products/Assets/BlueMobileSection";
import UseCases from "../../components/products/Payment/Usecases";
import InitiatePaymentSection from "../../components/InitiatePaymentSection";

const items = [
    {
        title: "Improve UX/conversion",
        icon: ImproveConversionIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Reduce Cost",
        icon: ReduceCostIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Instant payments",
        icon: InstantPaymentsIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Fight fraud",
        icon: FightFraudIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Offer flexible payment types",
        icon: FlexiblePaymentIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Verify payment status",
        icon: VerifyPaymentIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
]

const PaymentInitiation = () => {
    return(
    <div className="Balance">
      <Head>
        <title>Verifrica | Products - Payment Initiation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <ProductFeatures items={items}/>
      <InitiatePaymentSection />
      <HowItWorks />
      <UseCases />
      <FooterSection />
    </div>
    )
}

export default PaymentInitiation;