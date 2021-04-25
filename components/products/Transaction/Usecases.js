import PersonalFinancesIcon from '../../../public/assets/svgs/personal-finances.svg'
import BankingIcon from '../../../public/assets/svgs/banking.svg'
import LendingIcon from '../../../public/assets/svgs/lending.svg'
import BusinessFinancesIcon from '../../../public/assets/svgs/business-finances.svg'
const UseCases = () => {
    return (
        <section className="py-16  w-full">
          <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-4 md:px-0 relative space-y-2">
                  <h4 className="text-2xl lg:text-4xl font-medium leading-snug relative z-10">
                        Use Cases
                   </h4>
                   <p className="text-sm sm:text-base text-grey">Understand how our product works, <br className="hidden lg:block"/>and make the most of it.</p>
              </div>
              <ul className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-24 md:mt-0">
            
                <li className=" space-y-4 px-4 pb-8 md:pb-20 rounded-lg">
                <img src={PersonalFinancesIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Personal Finances</dt>
                    <dd className="text-xs sm:text-sm text-grey">
                      Fostering saving, budgeting and managing your finances. 
                    </dd>
                </dl>
                </li>
            
                <li className=" space-y-4 px-4 pb-8 md:pb-20 rounded-lg">
                <img src={BankingIcon} />
                <dl className="space-y-3 ">
                    <dt className="text-base md:text-lg text-black font-bold">Banking</dt>
                    <dd className="text-xs sm:text-sm text-grey">
                      Providing users with a banking experience, fund your account and manage savings.
                    </dd>
                </dl>
                
                </li>
                
                <li className="space-y-4 px-4 pb-8 md:pb-20 rounded-lg" >
                <img src={LendingIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Lending</dt>
                    <dd className="text-xs sm:text-sm text-grey">
                      Aiding individuals and businesses access capital through an efficient process.
                    </dd>
                </dl>
                </li>
                <li className="space-y-4 px-4 pb-0 md:pb-20 rounded-lg">
                <img src={BusinessFinancesIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Business Finance</dt>
                    <dd className="text-xs sm:text-sm text-grey">
                      Aiding individuals and businesses access capital through an efficient process.
                    </dd>
                </dl>
                </li>
          </ul>
          </div>
      </section>
    )
}

export default UseCases;