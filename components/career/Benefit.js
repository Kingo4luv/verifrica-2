import BenefitPackagesIcon from '../../public/assets/svgs/benefit-packages.svg';
import EquityPackagesIcon from '../../public/assets/svgs/equity-packages.svg';
import FlexibleVacationIcon from '../../public/assets/svgs/flexible-vacation.svg';
import LearningStipendIcon from '../../public/assets/svgs/learning-stipend.svg';
import BenefitBgIcon from '../../public/assets/svgs/benefit-bg.svg';
import IconCard from '../IconCard';

const items = [{
        title: "Benefits package",
        icon: BenefitPackagesIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Flexible vacation policy",
        icon: FlexibleVacationIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Equity packages",
        icon: EquityPackagesIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
    {
        title: "Learning stipend",
        icon: LearningStipendIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.'
    },
]

const CareerBenefitSection = () => {
    return(
        <section className="mt-32 sm:mt-52 py-12 lg:py-32 w-full">
          <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row px-2 space-x-0 lg:space-x-4">
              <div className="w-full md:w-2/5 lg:w-3/5 px-4 relative">
                  <img src={BenefitBgIcon} className="absolute w-3/5 lg:w-auto -top-12 lg:-top-32 z-0" /> 
                  <h4 className="text-2xl lg:text-4xl font-medium leading-snug relative z-10 max-w-sm">
                        Benefits of working <br className="hidden lg:block"/> at Verifrica
                   </h4>
              </div>
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-24 md:-mt-12">
                {items.map((item, i) => {
                    return(
                        <IconCard item={item} key={i} />
                    )
                })}
              </ul>
          </div>
      </section>
    )
}

export default CareerBenefitSection;