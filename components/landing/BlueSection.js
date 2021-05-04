import Link from "next/link";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import LinkButton from "../button/LinkButton";

const BlueSection = () => {
    return (
        <section className="py-16 bg-yellow ">
          < div className = "flex flex-col-reverse md:flex-row box-border mx-auto max-w-[1100px]" >
            <div className="w-full lg:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
                <Zoom>
                <img src="/assets/img/mobile.png" className="w-4/5 h-auto"/>
                </Zoom>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                  <div className="space-y-12 w-full px-4 lg:px-0 box-border md:max-w-xl lg:max-w-lg">
                    <dl className="space-y-5">
                      <Slide bottom>
                      <dt className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold text-hair leading-normal">Connect to financial bank accounts in seconds</dt>
                      </Slide>
                      <Slide bottom>
                      <dd className="font-light text-subtitle-3 lg:text-subtitle-2 text-hair max-w-lg">
                        Verifrica prioritizes the interest of our users, with a flexibility that allows you connect with your financial institution securing <br className="hidden lg:block" /> services, and sharing data across various banking channels.
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
        </section>
    )
}

export default BlueSection;