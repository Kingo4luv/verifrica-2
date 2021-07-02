import Link from "next/link";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import LinkButton from "../button/LinkButton";

const StarImage = () => {
    return (
        <section className="bg-[#F3F3F4] pt-11">
          <div className="flex flex-col md:flex-row px-4 mx-auto max-w-[1100px]">
            <div className="w-full lg:w-1/2 flex flex-col justify-center box-border">
                <div className="space-y-12 w-full md:max-w-md xl:max-w-lg">
                  <dl className="text-black space-y-8">
                    <dt className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold leading-normal max-w-md text-hair">Secure, easy and reliable to use solution</dt>
                    <dd className="font-light text-subtitle-3 lg:text-subtitle-2 text-hair max-w-md">
                      We aim at providing a platform that enables financial institutions to help their customers attain better financial outcomes.We are aware of the importance of customer information, Verifrica provides a private, secure, and reliable platform to access financial data.
                    </dd>
                  </dl>
                  <div className="w-full lg:w-3/5 xl:w-2/5">
                    <LinkButton color="primary" url="/" text="Get started" />
                  </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 mt-24 md:mt-0 flex justify-start items-center">
              <img src="/assets/img/girl.png" />
            </div>
          </div>
        </section>
    )
}

export default StarImage;