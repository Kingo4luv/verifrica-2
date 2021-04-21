import Image from "next/image"
import Nav from '../landing/nav';
import Slide from 'react-reveal/Slide'

const CompanyHeaderSection = () => {
    return(
        <header className="w-full">
          <Nav theme="white" />
          <div>
              <Slide bottom>
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-left sm:text-center px-4 font-bold leading-tight lg:leading-snug text-black mt-12 md:mt-32">
                  Our mission is to unlock <br className="block sm:hidden" /> financial <br className="hidden sm:block" />
                  freedom for <br className="block sm:hidden" />everyone
              </h1>
              </Slide>
              <Slide bottom>
              <p className="text-left md:text-center px-4 text-sm md:text-xl mt-6 md:mt-12 leading-relaxed text-grey md:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:block"/> Vitae varius diam et, condimentum integer amet. Quis cras.</p>
              </Slide>
          </div>
          <div className="w-full flex space-x-3 mt-12 md:mt-32 relative box-border">
                <div className="w-1/12 md:w-1/6 h-40 md:h-96 relative ">
                    <div className="w-full h-full bg-gray-200 transform -skew-y-15 absolute  top-2 sm:top-[0.8rem] md:top-8 lg:top-10 xl:top-[3.2rem] 2xl:top-[4.4rem] ">
                    <Image
                        src="/assets/img/skew-left.jpeg"
                        alt="team-1"
                        layout="fill"
                        objectFit="cover"
                        />
                    </div>
                </div>
                <div className="w-9/12 md:w-4/6 h-40 md:h-96 bg-gray-200 relative">
                    <Image
                    src="/assets/img/skew-center.jpeg"
                    alt="team-2"
                    layout="fill"
                    objectFit="cover"
                    />
                    <img src="/assets/img/skew-center.jpeg" className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-2/12 md:w-1/6 h-40 md:h-96 relative ">
                    <div className="w-full h-full bg-gray-200 transform -skew-y-15 absolute bottom-[0.8rem] sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-[4.2rem] ">
                    <Image
                        src="/assets/img/skew-right.jpg"
                        alt="team-3"
                        layout="fill"
                        objectFit="cover"
                        />
                    </div>
                </div>
                
          </div>
      </header>
    )
}

export default CompanyHeaderSection;