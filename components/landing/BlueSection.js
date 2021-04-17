import Link from "next/link";
import Zoom from 'react-reveal/Zoom';

const BlueSection = () => {
    return (
        <section className="py-16 bg-card-blue flex flex-col-reverse md:flex-row box-border">
        <div className="w-full lg:w-1/2 mt-16 sm:mt-0 flex justify-center items-center">
          <Zoom>
          <img src="/assets/img/mobile.png" className="w-4/5 md:w-3/5 h-auto"/>
          </Zoom>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="space-y-12 w-full lg:w-3/5 px-4 sm:px-0 box-border">
              <dl className="text-white space-y-5">
                <dt className="text-2xl md:text-4xl font-bold leading-normal">Connect to financial bank accounts in seconds</dt>
                <dd className="font-light pr-6 md:pr-16 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis.
                </dd>
              </dl>
              <div>
                <Link href="/" className="block">
                  <a className="px-16 py-4 bg-white rounded text-sm font-medium text-black tracking-wide mt-6">Try demo</a>
                </Link>
              </div>
            </div>
        </div>
      </section>
    )
}

export default BlueSection;