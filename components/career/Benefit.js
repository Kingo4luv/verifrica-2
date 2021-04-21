import Slide from 'react-reveal/Slide'
import BenefitPackagesIcon from '../../public/assets/svgs/benefit-packages.svg';
import EquityPackagesIcon from '../../public/assets/svgs/equity-packages.svg';
import FlexibleVacationIcon from '../../public/assets/svgs/flexible-vacation.svg';
import LearningStipendIcon from '../../public/assets/svgs/learning-stipend.svg';
import BenefitBgIcon from '../../public/assets/svgs/benefit-bg.svg';
const CareerBenefitSection = () => {
    return(
        <section className="mt-12 sm:mt-52 py-12 lg:py-32 w-full">
          <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
              
              <div className="w-full md:w-1/3 px-4 md:px-0 relative">
                  <Slide bottom>
                  <img src={BenefitBgIcon} className="absolute w-52 md:w-auto -top-12 lg:-top-32 z-0" /> 
                  </Slide>
                  <Slide bottom>
                  <h4 className="text-xl lg:text-4xl font-medium leading-snug relative z-10">
                        Benefits of working <br className="hidden md:block" />at <br className="block md:hidden" />Verifrica
                   </h4>
                   </Slide>
              </div>
              <Slide bottom cascade>
              <ul className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-32 md:mt-0">
            
                <li className=" space-y-4 px-4 pb-8 md:pb-20 rounded-lg">
                <img src={BenefitPackagesIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Benefits package</dt>
                    <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Odio ac felis in libero. Nisl. </dd>
                </dl>
                </li>
            
                <li className=" space-y-4 px-4 pb-8 md:pb-20 rounded-lg">
                <img src={FlexibleVacationIcon} />
                <dl className="space-y-3 ">
                    <dt className="text-base md:text-lg text-black font-bold">Flexible vacation policy</dt>
                    <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Odio ac felis in libero. Nisl.</dd>
                </dl>
                
                </li>
                
                <li className="space-y-4 px-4 pb-8 md:pb-20 rounded-lg" >
                <img src={EquityPackagesIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Equity packages</dt>
                    <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Odio ac felis in libero. Nisl.</dd>
                </dl>
                </li>
                <li className="space-y-4 px-4 pb-0 md:pb-20 rounded-lg">
                <img src={LearningStipendIcon} />
                <dl className="space-y-3">
                    <dt className="text-base md:text-lg text-black font-bold">Learning stipend</dt>
                    <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Odio ac felis in libero. Nisl.</dd>
                </dl>
                </li>
          </ul>
          </Slide>
          </div>
      </section>
    )
}

export default CareerBenefitSection;