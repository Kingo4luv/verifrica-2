import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg';
import ConsumersPaymentIcon from '../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../public/assets/svgs/lending.svg';
import WealthIcon from '../../public/assets/svgs/wealth.svg';
import BankingIcon from '../../public/assets/svgs/banking.svg';
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg';
import IconCard from '../../components/IconCard';
import Slide from 'react-reveal/Slide';

const items = [
  {
    title: "Personal Finances",
    icon: PersonalFinancesIcon,
    description: 'Fostering saving, budgeting and managing your finances.',
    url:"/use-cases/personal-finances"
  },
  {
    title: "Consumer Payment",
    icon: ConsumersPaymentIcon,
    description: 'A simple and seamless means to pay bills and send money with ease.',
    url:"/use-cases/consumers-payment"
  },
  {
    title: "Lending",
    icon: LendingIcon,
    description: 'Aiding individuals and businesses access capital through an efficient process.',
    url:"/use-cases/lending"
  },
  {
    title: "Wealth",
    icon: WealthIcon,
    description: 'Providing individuals with good plans on expanding finances through investment. ',
    url:"/use-cases/wealth"
  },
  {
    title: "Banking",
    icon: BankingIcon,
    description: 'Providing users with a banking experience, fund your account and manage savings.',
    url:"/use-cases/banking"
  },
  {
    title: "Business Finances",
    icon: BusinessFinancesIcon,
    description: 'Aiding businesses manage funds, make payment, analyze financial reports and send payroll.',
    url:"/use-cases/business-finances"
  },
]

const ServicesSection = () => {
    return (
        <section className="features py-6 mb-12 lg:py-24 px-2 md:px-6 ">
          <div className="mx-auto max-w-[1100px]">
            <Slide bottom>
            <h4 className="text-lg md:text-2xl font-medium text-black leading-relaxed px-4 md:px-0" >Building the future of financial services accross Africa</h4>
            </Slide>
            <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mt-12">
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