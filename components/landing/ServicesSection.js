import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg';
import ConsumersPaymentIcon from '../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../public/assets/svgs/lending.svg';
import WealthIcon from '../../public/assets/svgs/wealth.svg';
import BankingIcon from '../../public/assets/svgs/banking.svg';
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg';
import Link from 'next/link';
import Slide from 'react-reveal/Slide';


const ServicesSection = () => {
    return (
        <section className="features py-6 mb-12 md:py-24 px-0 md:px-6 xl:px-48">
          <Slide bottom>
          <h4 className="text-lg md:text-2xl font-medium text-black leading-relaxed px-4" >Building the future of financial <br className="hidden md:block"/> services accross Africa</h4>
          </Slide>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mt-12">
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg">
              <img src={PersonalFinancesIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Personal Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Fostering saving, budgeting and managing your finances. </dd>
              </dl>
              <Link href="/use-cases/business-finances">
                <a className="flex text-sm font-medium text-black md:text-grey space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg">
              <img src={ConsumersPaymentIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Consumer Payments</dt>
                <dd className="text-xs sm:text-sm text-grey">A simple and seamless means to pay bills and send money with ease.</dd>
              </dl>
              <Link href="/use-cases/consumers-payments">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg" >
              <img src={LendingIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Lending</dt>
                <dd className="text-xs sm:text-sm text-grey">Aiding individuals and businesses access capital through an efficient process.</dd>
              </dl>
              <Link href="/use-cases/lending">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg">
              <img src={WealthIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Wealth</dt>
                <dd className="text-xs sm:text-sm text-grey">Providing individuals with good plans on expanding finances through investment.</dd>
              </dl>
              <Link href="/use-cases/wealth">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg" >
              <img src={BankingIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Banking</dt>
                <dd className="text-xs sm:text-sm text-grey">Providing users with a banking experience, fund your account and manage savings. </dd>
              </dl>
              <Link href="/use-cases/banking">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
            <Slide bottom>
            <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg" >
              <img src={BusinessFinancesIcon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">Business Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Aiding businesses manage funds, make payment, analyze financial reports and send payroll..</dd>
              </dl>
              <Link href="use-cases/business-finances">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>
            </li>
            </Slide>
          </ul>
      </section>
    )
}

export default ServicesSection;