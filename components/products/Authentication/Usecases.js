import BankingIcon from '../../../public/assets/svgs/banking.svg'
const UseCases = () => {
    return(
        <section className="py-16  w-full">
          <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-4 md:px-0 relative space-y-2">
                  <h4 className="text-2xl lg:text-4xl font-medium leading-snug relative z-10">
                        Use Cases
                   </h4>
                   <p className="text-sm sm:text-base text-grey">
                       Lorem ipsum dolor sit amet, consectetur <br className="hidden lg:block" />adipiscing elit. Viverra enim viverra cras <br className="hidden lg:block" /> urna pretium. Nunc aliquet pretium, integer <br className="hidden lg:block" />nulla nunc nisi viverravitae, in. 
                   </p>
              </div>
              <ul className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6 mt-24 md:mt-0">
                <li className=" space-y-4 px-4 pb-8 md:pb-20 rounded-lg">
                <img src={BankingIcon} />
                <dl className="space-y-3 ">
                    <dt className="text-base md:text-lg text-black font-bold">Banking</dt>
                    <dd className="text-xs sm:text-sm text-grey">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Odio ac felis in libero.Nisl.
                    </dd>
                </dl>
                
                </li>
          </ul>
          </div>
      </section>
    )
}

export default UseCases;