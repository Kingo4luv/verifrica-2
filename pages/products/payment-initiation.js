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
        description: 'With our seamless user experience, SDKs, and integration option, you can improve your user interaction and perception of your product. '
    },
    {
        title: "Reduce Cost",
        icon: ReduceCostIcon,
        description: 'Get rid of expensive card fees and pay a low fixed-cost per transaction.'
    },
    {
        title: "Instant payments",
        icon: InstantPaymentsIcon,
        description: 'Payments are made directly to your bank account allowing you access funds in no time.'
    },
    {
        title: "Fight fraud",
        icon: FightFraudIcon,
        description: `Your user's bank handles authentication, lowering fraud risk and growing success rates.`
    },
    {
        title: "Offer flexible payment types",
        icon: FlexiblePaymentIcon,
        description: 'With only one integration, you can make one-time and recurring payments to any bank account.'
    },
    {
        title: "Verify payment status",
        icon: VerifyPaymentIcon,
        description: 'For verification, Verifrica redirects your customer to their bank to authenticate their account.'
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

const series = [{
        title: "Initiate",
        description: "Send the payment information to Verifrica, and we'll get in touch with the bank to start the process.",
        image: '/assets/img/initiate-payment.svg'
    },
    {
        title: "Select bank",
        description: "Select their bank, locate accounts, and enter bank username and password to connect to their account.",
        image: '/assets/img/institutions-image.svg'
    },
    {
        title: "Authenticate bank",
        description: "Your customer would be forwarded to their bank to verify and authenticate their account using Verifrica. ",
        image: '/assets/img/authenticate-bank.svg'
    },
    {
        title: "Confirm bank payment",
        description: "A quick API call can be used to check the transaction status. Proceed to confirm that the payment was done successfully.",
        image: '/assets/img/confirm-bank.svg'
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
      <InitiatePaymentSection series={series} />
      <HowItWorkSection disclosure={false} hasCode={true} />
      <UseCases usecases={usecases} />
      <FooterSection />
    </div>
    )
}

export default PaymentInitiation;