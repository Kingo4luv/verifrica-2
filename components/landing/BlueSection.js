import Link from "next/link";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const BlueSection = () => {
    return (
        <section className="py-16 bg-yellow flex flex-col-reverse md:flex-row box-border">
        <div className="w-full lg:w-1/2 mt-24 sm:mt-0 flex justify-center items-center">
          <Zoom>
          <img src="/assets/img/mobile.png" className="w-4/5 md:w-3/5 h-auto"/>
          </Zoom>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="space-y-12 w-full lg:w-5/5 px-4 sm:px-0 box-border">
              <dl className="space-y-5">
                <Slide bottom>
                <dt className="text-2xl md:text-4xl font-bold text-hair leading-normal">Connect to financial bank <br className="hidden md:block" /> accounts in seconds</dt>
                </Slide>
                <Slide bottom>
                <dd className="font-light text-sm md:text-base text-hair">
                  Verifrica prioritizes the interest of our users, with a flexibility <br className="hidden lg:block" /> that allows you connect with your financial institution securing <br className="hidden lg:block" /> services, and sharing data across various banking channels.
                </dd>
                </Slide>
              </dl>
              <div>
                <Slide bottom>
                <Link href="/" className="block">
                  <a className="px-16 py-4 bg-hair rounded w-full block sm:inline text-center text-sm font-medium text-white tracking-wide mt-6">Try demo</a>
                </Link>
                </Slide>
              </div>
            </div>
        </div>
      </section>
    )
}

export default BlueSection;