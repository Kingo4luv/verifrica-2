import Link from "next/link";
import Slide from 'react-reveal/Slide';
const ExperienceSection = () => {
    return(
        <section className="flex flex-col md:flex-row mt-6 lg:mt-16 bg-light-blue">
        <div className="w-full md:w-1/2 flex justify-center items-center py-12 lg:py-32 px-4 lg:px-0">
          <div className="w-full md:w-full lg:w-4/5 xl:w-3/5 flex flex-col justify-center items-center">
            <div className="space-y-12 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <Slide bottom>
                <dt className="text-2xl md:text-4xl font-bold leading-normal">Beautiful user experience <br/> for customers</dt>
                </Slide>
                <Slide bottom>
                <dd className="font-light pr-16 text-sm md:text-base text-grey">
                  We focus on having a sound understanding of users, what they need, and value.With our beautiful user experience, we hope to improve the quality of our user’ s interaction and perception of our product.
                </dd>
                </Slide>
              </dl>
              <div>
                <Slide bottom>
                <Link href="/" className="block">
                  <a className="px-16 py-4 rounded text-sm font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 bg-hair">Try demo</a>
                </Link>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-16 sm:mt-0 pt-4 pb-16 sm:py-16 flex justify-center items-center px-4 lg:px-0">
          <div className="w-4/5 md:w-2/5 h-auto relative">
            <img src="/assets/img/phone-background.png" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 rounded-lg flex justify-center items-center pr-6 pl-6 lg:pl-8 pt-4 lg:pt-6 pb-8">
               <img src="/assets/img/phone-screen.gif" className="w-full h-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default ExperienceSection;