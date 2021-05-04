import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import RingSection from "../../components/products/Transaction/RingSection";
import UseCases from "../../components/products/Usecases";
import HeaderSection from "../../components/products/Transaction/HeaderSection";
import HowItWorkSection from "../../components/products/HowItworkSection";
import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg'
import BankingIcon from '../../public/assets/svgs/banking.svg'
import LendingIcon from '../../public/assets/svgs/lending.svg'
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg'

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


const Transaction = () => {
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Products - Transaction</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <RingSection />
      <HowItWorkSection hasDisclosure={true} hasCode={false} />
      <UseCases  usecases={usecases}/>
      <FooterSection />
    </div>
    )
}

export default Transaction;