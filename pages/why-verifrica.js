import Head from 'next/head';
import BlueSection from '../components/landing/BlueSection';
import StarImage from '../components/landing/StarImage';
import ExperienceSection from '../components/landing/ExperienceSection';
import ForDevelopersSection from '../components/landing/ForDevelopersSection';
import FooterSection from '../components/FooterSection';
import Nav from '../components/nav';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="Why">
      <Head>
        <title>Verifrica | Why Verifrica</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="white" />
      <section className="w-full py-4 lg:py-24 mb-12">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl md:text-4xl lg:text-headline-3 font-bold leading-normal text-black mt-12">
                The future of financial services in Africa
           </h1>
            <p className="mt-6 lg:mt-12 text-subtitle-3 lg:text-subtitle-1 text-grey text-center px-4 max-w-3xl">Verifrica is a payment platform that helps individuals and businesses access a broad range of high-quality financial data from banks across Africa aiding users to make and receive payments with ease. </p>
            <ul className="w-full sm:w-auto hero-action flex flex-col sm:flex-row space-x-0 sm:space-x-16 space-y-6 lg:space-y-0 mt-12 text-black items-center px-4 lg:px-0">
                <li className="w-full sm:w-auto"><button className="w-full sm:w-auto border border-hair px-16 py-3 lg:py-4 rounded text-sm font-medium bg-hair text-white">Try Demo</button></li>
                <li> <Link href="/contact-us">
                <a className="underline font-medium text-black">Contact Us</a>
                </Link></li>
            </ul>
        </div>
      </section>
      <div className="max-w-5xl mx-auto -mb-32 md:-mb-60 lg:-mb-72 px-2 relative">
          <div className="w-full h-full absolute inset-0 flex justify-center items-center">
              <span>
                  <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#00BFFF"/>
                    <path d="M33.9179 28.5292C31.7542 27.288 30 28.3048 30 30.7984V49.1998C30 51.6959 31.7542 52.7113 33.9179 51.4714L50.0017 42.2474C52.1662 41.0058 52.1662 38.9943 50.0017 37.753L33.9179 28.5292Z" fill="white"/>
                  </svg>
              </span>
          </div>
          <img src="/assets/img/verifrica-video.png" className="w-full" />
      </div>
      <BlueSection video={true} />
      <StarImage />
      <ExperienceSection />
      <ForDevelopersSection />
      <FooterSection />
    </div>
  )
}
