import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg';
import ConsumersPaymentIcon from '../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../public/assets/svgs/lending.svg';
import WealthIcon from '../../public/assets/svgs/wealth.svg';
import BankingIcon from '../../public/assets/svgs/banking.svg';
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg';
import IconCard from '../../components/IconCard';

const items = [
  {
    title: "Personal Finances",
    icon: PersonalFinancesIcon,
    description: 'Boost financial health in budgeting, saving, and finances management with our detailed transaction history.',
    url:"/use-cases/personal-finances"
  },
  {
    title: "Consumer Payment",
    icon: ConsumersPaymentIcon,
    description: 'Assist people send money to their family and friends, pay bills, and other payment transactions.',
    url:"/use-cases/consumers-payment"
  },
  {
    title: "Lending",
    icon: LendingIcon,
    description: 'Help people and businesses access capital by issuing credit using our analyzed financial data',
    url:"/use-cases/lending"
  },
  {
    title: "Wealth",
    icon: WealthIcon,
    description: 'Assist people in making sound financial choices, good business insight, and plan for the future.',
    url:"/use-cases/wealth"
  },
  {
    title: "Banking",
    icon: BankingIcon,
    description: 'Seamless banking experience, help users fund their bank accounts, manage savings and do more.',
    url:"/use-cases/banking"
  },
  {
    title: "Business Finances",
    icon: BusinessFinancesIcon,
    description: 'Assist businesses with budgeting, bill payment, bookkeeping, and payroll.',
    url:"/use-cases/business-finances"
  },
]

const ServicesSection = () => {
    return (
        <section className="features py-6 mb-12 lg:py-24 px-2 md:px-6 ">
          <div className="mx-auto max-w-[1100px]">
            <h4 className="text-lg md:text-2xl font-medium text-black leading-relaxed px-4 md:px-0 max-w-sm" >Building the future of financial services accross Africa</h4>
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-16 mt-12">
              {items.map((item, i) => {
                return(
                  <IconCard item={item} key={i} />
                )
              } )}
            </ul>
          </div>
      </section>
    )
}

export default ServicesSection;