import PersonalFinancesIcon from '../../public/assets/svgs/personal-finances.svg';
import ConsumersPaymentIcon from '../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../public/assets/svgs/lending.svg';
import WealthIcon from '../../public/assets/svgs/wealth.svg';
import BankingIcon from '../../public/assets/svgs/banking.svg';
import BusinessFinancesIcon from '../../public/assets/svgs/business-finances.svg';
import Link from 'next/link';

const ServicesSection = () => {
    return (
        <section className="features py-6 md:py-48 px-4 md:px-6 xl:px-48">
          <h4 className="text-lg md:text-2xl font-medium text-black">Building the future of financial services</h4>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mt-12">
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={PersonalFinancesIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Personal Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={ConsumersPaymentIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Consumer Payments</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={LendingIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Lending</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={WealthIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Wealth</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={BankingIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Banking</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={BusinessFinancesIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Business Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              <Link href="/">
                <a className="flex sm:hidden text-sm font-medium space-x-2 items-center">
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
          </ul>
      </section>
    )
}

export default ServicesSection;