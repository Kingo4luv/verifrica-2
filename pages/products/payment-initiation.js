import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import ImproveConversionIcon from '../../public/assets/svgs/improved-conversion.svg'
import ReduceCostIcon from '../../public/assets/svgs/reduce-cost.svg'
import InstantPaymentsIcon from '../../public/assets/svgs/instant-payment.svg'
import FightFraudIcon from '../../public/assets/svgs/fight-fraud.svg'
import FlexiblePaymentIcon from '../../public/assets/svgs/flexible-payment.svg'
import VerifyPaymentIcon from '../../public/assets/svgs/verify-payment.svg'
import HeaderSection from "../../components/products/Payment/HeaderSection";
import ProductFeatures from "../../components/products/ProductFeatures";
import UseCases from "../../components/products/Usecases";
import InitiatePaymentSection from "../../components/InitiatePaymentSection";
import HowItWorkSection from "../../components/products/HowItworkSection";
import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg'
import BankingIcon from '../../public/assets/svgs/banking.svg'
import LendingIcon from '../../public/assets/svgs/lending.svg'
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg'

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

const usecases = {
    subtitle: "Understand how our product works, and make the most of it.",
    items: [{
            title: "Personal Finances",
            icon: PersonalFinancesIcon,
            description: 'Fostering saving, budgeting and managing your finances.',
        },
        {
            title: "Banking",
            icon: BankingIcon,
            description: 'Providing users with a banking experience, fund your account and manage savings.',
        },
        {
            title: "Lending",
            icon: LendingIcon,
            description: 'Aiding individuals and businesses access capital through an efficient process.',
        },

        {
            title: "Business Finances",
            icon: BusinessFinancesIcon,
            description: 'Aiding businesses manage funds, make payment, analyze financial reports and send payroll.',
        },
    ]
}

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
      <HowItWorkSection disclosure={false} hasCode={true} />
      <UseCases usecases={usecases} />
      <FooterSection />
    </div>
    )
}

export default PaymentInitiation;