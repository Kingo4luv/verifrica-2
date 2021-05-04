import Link from "next/link";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import LinkButton from "../button/LinkButton";
const ExperienceSection = () => {
    return(
        <section className="mt-6 lg:mt-16 bg-light-blue">
          <div className="flex flex-col sm:flex-row mx-auto lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="w-full sm:w-1/2 flex justify-center items-center py-12 lg:py-32 px-4">
              <div className="w-full flex flex-col justify-center">
                <div className="space-y-12 sm:px-0 box-border md:max-w-md lg:max-w-lg">
                  <dl className="text-black space-y-8">
                    <Slide bottom>
                    <dt className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold leading-normal max-w-md">Beautiful user experience for customers</dt>
                    </Slide>
                    <Slide bottom>
                    <dd className="font-light text-subtitle-3 sm:text-subtitle-2 text-hair">
                      We focus on having a sound understanding of users, what  they need, and value.With our beautiful user experience, we hope to improve the quality of our user’ s interaction and perception of our product.
                    </dd>
                    </Slide>
                  </dl>
                  <div className="w-full lg:w-3/5 xl:w-2/5">
                    <Slide bottom>
                    <LinkButton color="dark" url="/" text="Try demo" />
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 pt-4 pb-16 sm:py-16 flex justify-center items-center px-4 lg:px-0">
              <Zoom>
              <div className="w-4/5 md:w-3/5 h-auto relative">
                <img src="/assets/img/phone-background.png" className="w-full h-full" />
                <div className="w-full h-full absolute top-0 rounded-lg flex justify-center items-center pr-6 pl-6 lg:pl-8 pt-4 lg:pt-6 pb-8">
                  <img src="/assets/img/phone-screen.gif" className="w-full h-full rounded-2xl" />
                </div>
              </div>
              </Zoom>
            </div>
          </div>
        </section>
    )
}

export default ExperienceSection;