import Head from 'next/head';
import HeaderComponent from '../components/landing/header';
import dominosIcon from '../public/assets/svgs/dominos.svg';
import AbnAmbroIcon from '../public/assets/svgs/abn-ambro.svg';
import PaypalIcon from '../public/assets/svgs/paypal.svg';
import PiggyvestIcon from '../public/assets/svgs/piggyvest.svg';
import CowrywiseIcon from '../public/assets/svgs/cowrywise.svg';
import PersonalFinancesIcon from '../public/assets/svgs/personal-finances.svg';
import ConsumersPaymentIcon from '../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../public/assets/svgs/lending.svg';
import WealthIcon from '../public/assets/svgs/wealth.svg';
import BankingIcon from '../public/assets/svgs/banking.svg';
import BusinessFinancesIcon from '../public/assets/svgs/business-finances.svg';
import HomeCode from '../markdown/home.js';
import Link from 'next/link';
import { useEffect } from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";


export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Verifrica | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderComponent />
      <section className="clients w-full py-16 md:py-24 bg-client-grey space-y-12 md:space-y-20 flex flex-col items-center justify-center px-4">
          <h2 className="text-xl md:text-4xl font-bold text-black">Bringing solutions to 100+ banks and Fintechs</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-12 md:gap-24">
            <div className="client-item">
              <img src={CowrywiseIcon}/>
            </div>
            <div className="client-item">
              <img src={PiggyvestIcon}/>
            </div>
            <div className="client-item">
              <img src={PaypalIcon} className="-mt-3 sm:-mt-6"/>
            </div>
            <div className="client-item">
              <img src={AbnAmbroIcon} className="-mt-3 sm:-mt-6"/>
            </div>
            <div className="client-item">
              <img src={dominosIcon}/>
            </div>
          </div>
      </section>
      <section className="features py-6 md:py-48 px-4 md:px-6 xl:px-48">
          <h4 className="text-lg md:text-2xl font-medium text-black">Building the future of financial services</h4>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mt-12">
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={PersonalFinancesIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Personal Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={ConsumersPaymentIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Consumer Payments</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={LendingIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Lending</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={WealthIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Wealth</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={BankingIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Banking</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
            </li>
            <li className="space-y-4 sm:hover:bg-yellow px-0 sm:px-4 py-0 sm:py-12 rounded-lg transition ease-in-out delay-75">
              <img src={BusinessFinancesIcon} />
              <dl className="space-y-3">
                <dt className="text-base md:text-xl text-black">Business Finances</dt>
                <dd className="text-xs sm:text-sm text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac felis in libero. Nisl.</dd>
              </dl>
              {/* <Link>
              </Link> */}
            </li>
          </ul>
      </section>
      <section className="py-16 bg-card-blue flex flex-col-reverse md:flex-row box-border">
        <div className="w-full lg:w-1/2 mt-16 sm:mt-0 flex justify-center items-center">
          <img src="/assets/img/mobile.png" className="w-4/5 md:w-3/5 h-auto"/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="space-y-12 w-full lg:w-3/5 px-4 sm:px-0 box-border">
              <dl className="text-white space-y-5">
                <dt className="text-2xl md:text-4xl font-bold leading-relaxed">Connect to financial bank accounts in seconds</dt>
                <dd className="font-light pr-6 md:pr-16 text-xs md:text-base">
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
      <section className="py-16 flex flex-col md:flex-row px-4 lg:px-6 xl:px-48">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <dt className="text-2xl md:text-4xl font-bold leading-tight">Secure, easy and <br/> reliable to use</dt>
                <dd className="font-light pr-6 lg:pr-52  text-xs md:text-base text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis.
                </dd>
              </dl>
              <div>
                <Link href="/" className="block">
                  <a className="px-16 py-4 bg-blue rounded text-sm font-medium text-white tracking-wide mt-6">Learn more</a>
                </Link>
              </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-12 md:space-y-40 mt-16 md:mt-0">
          <div className="w-full h-20 lg:h-32 flex justify-center items-center">
            <div className="w-20 lg:w-32 h-full rounded-full flex justify-center items-center">
              <img src="/assets/img/top-boy.png" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="w-full h-20 lg:h-32 flex items-center justify-between">
            <div className="w-20 lg:w-32 h-full rounded-full flex items-center justify-center">
              <img src="/assets/img/left-girl.png" className="w-full h-full object-cover object-center" />
            </div>
            <div className=" w-20 lg:w-32 h-full rounded-full flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.8392" cy="49.8345" r="44.1895" fill="#00ACE6" stroke="white" strokeWidth="10"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M43.7965 51.5676C43.5971 51.2138 43.4833 50.8048 43.4833 50.3692C43.4833 49.026 44.566 47.9354 45.8997 47.9354H47.2948L45.234 44.342C44.8246 43.5833 44.0264 43.0679 43.1095 43.0679C41.7758 43.0679 40.6931 44.1584 40.6931 45.5017C40.6931 45.9485 40.813 46.3675 41.022 46.7276L43.7965 51.5676Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.3533 51.5304L47.2918 47.9341H45.8932C44.5596 47.9341 43.4802 49.0246 43.4802 50.3679C43.4802 50.8165 43.601 51.2369 43.8116 51.5979L46.5623 56.3951C46.3762 56.0503 46.2705 55.6552 46.2705 55.2354C46.2705 53.8922 47.3533 52.8016 48.6869 52.8016H51.4772C50.5603 52.8016 49.762 52.2862 49.3526 51.5276L49.3533 51.5304Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M50.8086 56.399L53.5407 51.6333C53.1167 52.3359 52.3496 52.8055 51.4744 52.8055H48.6841C47.3504 52.8055 46.2677 53.896 46.2677 55.2393C46.2677 56.5825 47.3504 57.6731 48.6841 57.6731C49.601 57.6731 50.3993 57.1576 50.8086 56.399Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M53.5861 51.5676C53.1707 52.305 52.3841 52.803 51.4829 52.803C50.566 52.803 49.7678 52.2875 49.3583 51.5289L47.2975 47.9354H54.2731C55.1483 47.9354 55.9155 47.4657 56.3394 46.7632L53.5861 51.5676Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M45.1777 44.2401C44.7537 43.5375 43.9865 43.0679 43.1113 43.0679H48.6918C49.567 43.0679 50.3341 43.5375 50.7581 44.2401L52.1639 46.691C52.5779 47.4334 53.3673 47.9354 54.2722 47.9354H47.2966L45.1777 44.2401Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M48.6866 43.0709C49.5617 43.0709 50.3289 43.5406 50.7529 44.2431L52.1587 46.6941C52.5727 47.4364 53.3621 47.9386 54.2669 47.9386C55.1422 47.9386 55.9093 47.4689 56.3334 46.7663L59.0607 42.0096V41.9976C58.6263 42.6449 57.8908 43.0709 57.0573 43.0709H48.6866Z" stroke="white" strokeWidth="2" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-20 lg:w-32 h-full rounded-full">
              <img src="/assets/img/right-boy.png" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="w-full h-20 lg:h-32 flex justify-center items-center">
            <div className="w-20 lg:w-32 h-full rounded-full">
              <img src="/assets/img/bottom-girl.png" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-6 lg:mt-16">
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-light-shade-blue py-12 lg:py-32 px-4 lg:px-0">
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <dt className="text-2xl md:text-4xl font-bold leading-tight">Beautiful user experience <br/> for customers</dt>
                <dd className="font-light pr-12  text-xs md:text-base text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis.
                </dd>
              </dl>
              <div>
                <Link href="/" className="block">
                  <a className="px-16 py-4 bg-blue rounded text-sm font-medium text-white tracking-wide mt-6">Try demo</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-16 sm:mt-0 py-16 flex justify-center items-center px-4 lg:px-0">
          <div className="w-4/5 md:w-2/5 h-auto relative">
            <img src="/assets/img/phone-background.png" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 rounded-lg flex justify-center items-center pr-6 pl-6 lg:pl-8 pt-4 lg:pt-6 pb-8">
               <img src="/assets/img/phone-screen.gif" className="w-full h-full rounded-2xl" />
            </div>
           
          </div>
        </div>
      </section>
      <section className="py-12 md:py-52 flex flex-col lg:flex-row bg-client-grey overflow-x-hidden">
          <div className="w-full md:4/5 lg:w-1/2 flex justify-center items-center py-12 lg:py-32 px-4 lg:px-0">
          <div className="w-full md:w-full lg:w-3/5 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <dt className="text-2xl md:text-4xl font-bold leading-tight">For developers, by <br/> developers</dt>
                <dd className="font-light pr-12  text-xs md:text-base text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis.
                </dd>
              </dl>
              <div>
                <Link href="/" className="block">
                  <a className="px-6 py-4 rounded text-sm font-medium text-black tracking-wide mt-6 border border-black">Read our API documentation</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center px-2">
          <div className="w-full md:w-full lg:w-3/4 rounded-lg" style={{backgroundColor: '#000'}}>
            <div className="h-16 w-full flex items-center px-5 space-x-3">
              <span className="w-3 h-3 bg-yellow rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="overflow-auto h-96 rounded-b-lg">
              <Highlight {...defaultProps} theme={theme} code={HomeCode} language="jsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-12 md:py-32 px-4 bg-footer-black">
          <div className="text-white flex flex-col justify-start sm:justify-center itmes-start sm:items-center">
            <h2 className="text-left md:text-center text-2xl md:text-4xl font-bold leading-relaxed">
              Ready to use Verifrica?<br/>
              Get started for free
            </h2>
            <ul className="w-full md:w-auto hero-action flex flex-col md:flex-row space-x-0 md:space-x-16 space-y-6 lg:space-y-0 mt-12 text-white items-center px-4 lg:px-0">
                  <li className="w-full sm:w-auto"><button className="w-full md:w-auto border border-white px-16 py-3 lg:py-4 rounded text-sm font-medium bg-transparent">Try demo</button></li>
                  <li> <Link href="/">
                    <a className="underline font-light">Talk to an expert</a>
                  </Link></li>
              </ul>
          </div>
          <div className="flex flex-col sm:flex-row text-white pb-32 pt-24 md:pt-52">
            <div className="w-full sm:w-2/6 md:w-1/6">
              <svg width="104" height="26" viewBox="0 0 104 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.78555 15.6569C5.47814 15.1152 5.30259 14.489 5.30259 13.8221C5.30259 11.7655 6.97223 10.0959 9.02876 10.0959H11.1801L8.00231 4.59421C7.37103 3.43268 6.14005 2.64355 4.72618 2.64355C2.66964 2.64355 1.00001 4.31319 1.00001 6.36973C1.00001 7.05389 1.18486 7.69531 1.50718 8.24668L5.78555 15.6569Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.3589 15.6013L11.18 10.0952H9.02337C6.96683 10.0952 5.30247 11.7649 5.30247 13.8214C5.30247 14.5082 5.48868 15.1518 5.81338 15.7047L10.0551 23.0492C9.76819 22.5213 9.60517 21.9164 9.60517 21.2737C9.60517 19.2172 11.2748 17.5476 13.3313 17.5476H17.634C16.2202 17.5476 14.9892 16.7584 14.3578 15.5969L14.3589 15.6013Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.6076 23.0493L20.8206 15.7529C20.1667 16.8286 18.9838 17.5476 17.6342 17.5476H13.3315C11.2749 17.5476 9.6053 19.2172 9.6053 21.2738C9.6053 23.3303 11.2749 24.9999 13.3315 24.9999C14.7453 24.9999 15.9763 24.2108 16.6076 23.0493Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.8773 15.6569C20.2367 16.786 19.0238 17.5483 17.6341 17.5483C16.2202 17.5483 14.9892 16.7592 14.3579 15.5976L11.1801 10.0959H21.9366C23.2862 10.0959 24.4692 9.37689 25.123 8.30127L20.8773 15.6569Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.9124 4.43822C7.25856 3.3626 6.07561 2.64355 4.72601 2.64355H13.3313C14.6809 2.64355 15.8638 3.3626 16.5177 4.43822L18.6854 8.19058C19.3239 9.32727 20.5411 10.0959 21.9365 10.0959H11.1799L7.9124 4.43822Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3319 2.64336C14.6815 2.64336 15.8644 3.36246 16.5183 4.43803L18.6861 8.19051C19.3245 9.32706 20.5417 10.0958 21.9371 10.0958C23.2867 10.0958 24.4697 9.37669 25.1236 8.30112L29.3292 1.01848V1C28.6593 1.99116 27.5251 2.64336 26.2398 2.64336H13.3319Z" stroke="white" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M88.4419 21.3461C90.8072 21.3461 92.7917 19.9826 93.433 18.1614C93.433 18.1614 92.9735 17.928 92.4739 17.6727C91.8603 17.3614 91.1129 17.5046 90.6599 18.0214C90.1319 18.6346 89.3621 19.002 88.4419 19.002C86.6176 19.002 85.3347 17.5575 85.3347 15.615C85.3347 13.6102 86.6578 12.2249 88.4216 12.2249C89.3275 12.2249 90.1266 12.5922 90.6711 13.2148C91.1194 13.7191 91.8488 13.8623 92.4543 13.5666C92.962 13.3175 93.433 13.0872 93.433 13.0872C92.7515 11.1851 90.7872 9.86206 88.4419 9.86206C85.1343 9.86206 82.6709 12.3245 82.6709 15.5932C82.6709 18.8619 85.1545 21.3461 88.4419 21.3461ZM101.312 13.7534C101.312 12.8661 100.504 12.1408 99.3229 12.1471C98.1405 12.1502 97.8028 12.5922 97.2583 13.2148C96.81 13.7191 96.0806 13.8623 95.4751 13.5666C94.9671 13.3175 94.4961 13.0872 94.4961 13.0872C95.1779 11.1851 97.1422 9.86206 99.4875 9.86206C101.579 9.86206 103.413 11.0824 103.809 13.0374L103.813 13.0529C103.9 13.3736 103.875 13.7502 103.875 14.1082C103.875 14.1082 103.875 17.4548 103.875 19.6028C103.875 20.4308 103.202 21.1064 102.372 21.1064H101.452V19.9047C100.63 20.8666 99.4869 21.3461 98.143 21.3461C95.6775 21.3461 94.0755 19.9452 94.0755 18.0992C94.0755 16.4773 95.3771 15.1325 97.9425 14.7122L101.312 14.1301V13.7534ZM51.4771 15.2321C51.4771 12.2871 49.2139 9.86206 46.0862 9.86206C42.9579 9.86206 40.5546 12.3058 40.5546 15.5932C40.5546 18.8027 42.8776 21.3461 46.2665 21.3461C48.553 21.3461 50.3554 20.2254 51.0366 18.6408C51.0366 18.6408 50.5288 18.3918 50.0149 18.1397C49.4673 17.8719 48.8117 17.9591 48.355 18.3638C47.8423 18.8245 47.1484 19.1047 46.2867 19.1047C44.6221 19.1047 43.3788 18.0182 43.2182 16.3341H50.3766C50.6686 16.3341 50.9485 16.2189 51.1549 16.0134C51.3616 15.8049 51.4774 15.5247 51.4774 15.2352C51.477 15.2321 51.4771 15.2321 51.4771 15.2321ZM78.9826 21.1064H80.0426C80.8728 21.1064 81.5459 20.4308 81.5459 19.6028C81.5459 16.5893 81.5459 10.1018 81.5459 10.1018H78.9826V21.1064ZM60.4 21.1064H61.4599C62.2902 21.1064 62.9632 20.4308 62.9632 19.6028C62.9632 16.5893 62.9632 10.1018 62.9632 10.1018H60.4V21.1064ZM58.1925 9.98348C56.7692 9.98348 55.6466 10.4442 55.0452 11.705V10.1018H54.1459C53.3153 10.1018 52.6423 10.7773 52.6423 11.6054C52.6423 14.6188 52.6423 21.1064 52.6423 21.1064H53.7022C54.5325 21.1064 55.2055 20.4308 55.2055 19.6028C55.2055 17.7816 55.2055 14.9519 55.2055 14.9519C55.2055 13.2491 56.2882 12.2654 57.8918 12.2654H59.2749V9.98348H58.1925ZM37.6863 10.1018L34.8603 17.6789C34.8603 17.6789 33.1631 13.1276 32.3994 11.0793C32.18 10.4909 31.6184 10.1018 30.9908 10.1018C30.229 10.1018 29.329 10.1018 29.329 10.1018C29.329 10.1018 32.2762 17.4921 33.3405 20.16C33.5684 20.7297 34.1216 21.1064 34.737 21.1064C34.8123 21.1064 34.8883 21.1064 34.9636 21.1064C35.5791 21.1064 36.1323 20.7297 36.3601 20.16C37.4245 17.4921 40.3716 10.1018 40.3716 10.1018H37.6863ZM71.4254 12.4054H68.4761C68.4761 12.4054 68.4761 17.1123 68.4761 19.6028C68.4761 20.4308 67.8028 21.1064 66.9725 21.1064H65.9125V12.4054H63.8881V10.1018H65.9125V9.62239C65.9125 7.11329 67.5749 5.7124 70.0597 5.7124C70.3803 5.7124 70.8815 5.75289 71.162 5.81204C71.162 5.81204 71.162 6.55294 71.162 7.17244C71.162 7.60515 70.8121 7.95689 70.3803 7.95689C69.1977 7.95689 68.4761 8.51727 68.4761 9.62239V10.1018H73.8283V11.705C74.4298 10.4442 75.5523 9.98348 76.9756 9.98348H78.058V12.2654H76.6749C75.0711 12.2654 73.9887 13.2491 73.9887 14.9519C73.9887 14.9519 73.9887 17.7816 73.9887 19.6028C73.9887 20.4308 73.3156 21.1064 72.4854 21.1064H71.4254V12.4054ZM98.464 19.3631C97.441 19.3631 96.739 18.9023 96.739 17.9995C96.739 17.4174 97.1403 16.7979 98.3033 16.5769L101.312 16.0352V16.717C101.312 18.2019 100.089 19.3631 98.464 19.3631ZM43.2783 14.3915C43.5793 12.8475 44.6822 11.9634 46.0862 11.9634C47.4699 11.9634 48.633 12.9689 48.7332 14.3915H43.2783ZM60.4 8.65732H61.4599C61.8587 8.65732 62.241 8.49858 62.523 8.21529C62.8051 7.93512 62.9632 7.55221 62.9632 7.15374C62.9632 6.54981 62.9632 5.99258 62.9632 5.99258H60.4V8.65732ZM78.9826 8.65732H80.0426C80.4414 8.65732 80.8236 8.49858 81.1057 8.21529C81.3874 7.93512 81.5459 7.55221 81.5459 7.15374C81.5459 6.54981 81.5459 5.99258 81.5459 5.99258H78.9826V8.65732Z" fill="white"/>
              </svg>
            </div>
            <div className="w-full sm:w-5/6 md:w-5/6 mt-12 sm:mt-0 flex flex-wrap">
              <div className="space-y-6 w-1/2 sm:w-1/3 lg:w-1/5 pb-12">
                <h4 className="font-medium">Products</h4>
                <ul className="text-sm font-light space-y-3 text-gray-400">
                  <li>Transaction</li>
                  <li>Authentication</li>
                  <li>Balance</li>
                  <li>Identity</li>
                  <li>Investments</li>
                  <li>Assets</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className="space-y-6 w-1/2 sm:w-1/3 lg:w-1/5 pb-12">
                <h4 className="font-medium">Use Cases</h4>
                <ul className="text-sm font-light space-y-3 text-gray-400">
                  <li>Personal finances</li>
                  <li>Consumer payments</li>
                  <li>Lending</li>
                  <li>Banking</li>
                  <li>Wealth</li>
                  <li>Business finances</li>
                </ul>
              </div>
              < div className = "space-y-6 w-1/2 sm:w-1/3 lg:w-1/5 pb-12" >
                <h4 className="font-medium">About</h4>
                <ul className="text-sm font-light space-y-3 text-gray-400">
                  <li>Company</li>
                  <li>Career</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>Security</li>
                  <li>Legal & Privacy</li>
                </ul>
              </div>
              <div className="space-y-6 w-1/2 sm:w-1/3 lg:w-1/5 pb-12">
                <h4 className="font-medium">For Consumers</h4>
                <ul className="text-sm font-light space-y-3 text-gray-400">
                  <li>How it works</li>
                  <li>Discover apps</li>
                  <li>Why Verifrica?</li>
                  <li>Manage connections</li>
                  <li>Help</li>
                  <li>Trouble connecting?</li>
                </ul>
              </div>
              <div className="space-y-6 w-1/2 sm:w-1/3 lg:w-1/5 pb-12">
                <h4 className="font-medium">For Developers</h4>
                <ul className="text-sm font-light space-y-3 text-gray-400">
                  <li>Quickstart</li>
                  <li>API documentation</li>
                  <li>Libraries</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center pl-4 pr-0 sm:pr-32">
              <p className="text-xs text-gray-400 font-light mt-4 sm:mt-0">© Reef financial solutions</p>
              <ul className="flex space-x-3">
                <li>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12.1596C15.2405 12.1596 14.4981 12.3848 13.8666 12.8068C13.2351 13.2287 12.7429 13.8284 12.4523 14.5301C12.1617 15.2318 12.0856 16.0039 12.2338 16.7487C12.3819 17.4936 12.7477 18.1779 13.2847 18.7149C13.8217 19.2519 14.506 19.6177 15.2508 19.7658C15.9957 19.914 16.7678 19.8379 17.4695 19.5473C18.1712 19.2567 18.7709 18.7645 19.1928 18.133C19.6148 17.5015 19.84 16.7591 19.84 15.9996C19.84 14.9812 19.4354 14.0045 18.7153 13.2843C17.9951 12.5642 17.0184 12.1596 16 12.1596ZM16 18.5596C15.4937 18.5596 14.9987 18.4095 14.5777 18.1282C14.1567 17.8469 13.8286 17.4471 13.6349 16.9793C13.4411 16.5115 13.3904 15.9968 13.4892 15.5002C13.588 15.0036 13.8318 14.5474 14.1898 14.1894C14.5478 13.8314 15.004 13.5876 15.5006 13.4888C15.9972 13.39 16.5119 13.4407 16.9797 13.6345C17.4474 13.8282 17.8473 14.1564 18.1286 14.5773C18.4099 14.9983 18.56 15.4933 18.56 15.9996C18.56 16.6786 18.2903 17.3297 17.8102 17.8098C17.3301 18.2899 16.6789 18.5596 16 18.5596ZM20.8704 10.3612C20.7122 10.3612 20.5575 10.4081 20.4259 10.496C20.2944 10.5839 20.1918 10.7089 20.1313 10.8551C20.0707 11.0012 20.0549 11.1621 20.0858 11.3173C20.1166 11.4725 20.1928 11.615 20.3047 11.7269C20.4166 11.8388 20.5591 11.915 20.7143 11.9458C20.8695 11.9767 21.0304 11.9609 21.1765 11.9003C21.3227 11.8398 21.4477 11.7372 21.5356 11.6057C21.6235 11.4741 21.6704 11.3194 21.6704 11.1612C21.6712 11.0559 21.6511 10.9515 21.6112 10.854C21.5713 10.7566 21.5124 10.6681 21.438 10.5936C21.3635 10.5192 21.275 10.4603 21.1775 10.4204C21.0801 10.3805 20.9757 10.3604 20.8704 10.3612ZM26.88 5.1196C25.0927 3.33851 22.8941 2.02516 20.4787 1.29564C18.0632 0.566115 15.5052 0.442892 13.0308 0.936861C10.5563 1.43083 8.24173 2.52678 6.2915 4.12783C4.34128 5.72888 2.81551 7.78572 1.84907 10.1165C0.882636 12.4474 0.50529 14.9804 0.750391 17.4917C0.995493 20.003 1.85549 22.4152 3.25437 24.5152C4.65325 26.6152 6.54793 28.3382 8.77092 29.5319C10.9939 30.7257 13.4768 31.3534 16 31.3596C19.0434 31.3671 22.0204 30.4703 24.5533 28.783C27.0862 27.0958 29.0608 24.6941 30.2264 21.8828C31.3921 19.0714 31.6963 15.9772 31.1005 12.9927C30.5047 10.0081 29.0358 7.26787 26.88 5.1196ZM23.68 20.0636C23.67 21.0195 23.2858 21.9335 22.6098 22.6095C21.9339 23.2854 21.0199 23.6696 20.064 23.6796H11.9424C10.9859 23.6696 10.0712 23.2857 9.39424 22.6099C8.71724 21.9341 8.33165 21.0201 8.31999 20.0636V11.942C8.32835 10.9839 8.71268 10.0673 9.39021 9.38981C10.0677 8.71228 10.9843 8.32796 11.9424 8.3196H20.064C21.022 8.32632 21.9389 8.71033 22.6157 9.38839C23.2926 10.0665 23.675 10.9839 23.68 11.942V20.0636Z" fill="white"/>
                  </svg>
                </li>
                <li>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.88 5.12023C24.3719 2.60343 21.0688 1.034 17.5334 0.679294C13.998 0.324584 10.449 1.20653 7.49092 3.1749C4.53282 5.14327 2.34863 8.0763 1.3104 11.4744C0.272173 14.8724 0.444135 18.5254 1.79699 21.8109C3.14985 25.0964 5.59992 27.8113 8.72985 29.493C11.8598 31.1748 15.476 31.7195 18.9624 31.0342C22.4488 30.3489 25.5899 28.4761 27.8504 25.7349C30.111 22.9936 31.3513 19.5534 31.36 16.0002C31.365 13.9813 30.9718 11.9811 30.2031 10.1142C29.4344 8.24735 28.3052 6.55032 26.88 5.12023ZM22.24 12.8578V13.2674C22.242 13.9133 22.1711 14.5574 22.0288 15.1874C21.5942 17.2276 20.4615 19.0522 18.8259 20.3467C17.1902 21.6411 15.1542 22.3244 13.0688 22.2786C11.3229 22.2803 9.61211 21.7877 8.1344 20.8578C8.39162 20.8857 8.65008 20.9007 8.9088 20.9026C10.3515 20.9048 11.754 20.4275 12.896 19.5458C12.2292 19.5317 11.5831 19.312 11.0458 18.9168C10.5086 18.5216 10.1065 17.9702 9.8944 17.3378C10.0916 17.3841 10.2934 17.4077 10.496 17.4082C10.7928 17.4072 11.088 17.3641 11.3728 17.2802C10.8466 17.1777 10.3546 16.9447 9.942 16.6025C9.52937 16.2603 9.2093 15.8199 9.0112 15.3218C8.86099 14.9609 8.78482 14.5735 8.7872 14.1826V14.1442C9.23357 14.388 9.73159 14.5218 10.24 14.5346C9.80248 14.2476 9.44305 13.8564 9.19395 13.3962C8.94486 12.936 8.8139 12.4211 8.8128 11.8978C8.81961 11.3374 8.97177 10.7883 9.2544 10.3042C10.0672 11.2898 11.078 12.0937 12.2213 12.6637C13.3646 13.2337 14.6149 13.5571 15.8912 13.613C15.8325 13.3763 15.8003 13.1337 15.7952 12.8898C15.8089 12.2496 16.0125 11.6279 16.3802 11.1036C16.7479 10.5792 17.263 10.176 17.8602 9.94488C18.4574 9.7138 19.1099 9.66535 19.7347 9.80567C20.3595 9.946 20.9285 10.2688 21.3696 10.733C22.0904 10.5898 22.7824 10.3282 23.4176 9.95863C23.1741 10.6987 22.6689 11.3245 21.9968 11.7186C22.6322 11.6389 23.2529 11.4687 23.84 11.213C23.4082 11.8516 22.8664 12.4085 22.24 12.8578Z" fill="white"/>
                  </svg>
                </li>
                <li>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="white"/>
                    <path d="M12.4133 22.6175C12.4133 22.8803 12.2003 23.0934 11.9374 23.0934H9.91162C9.64878 23.0934 9.43572 22.8803 9.43572 22.6175V14.1254C9.43572 13.8626 9.64878 13.6495 9.91162 13.6495H11.9374C12.2003 13.6495 12.4133 13.8626 12.4133 14.1254V22.6175ZM10.9245 12.849C9.86165 12.849 9 11.9874 9 10.9245C9 9.86165 9.86165 9 10.9245 9C11.9874 9 12.849 9.86165 12.849 10.9245C12.849 11.9874 11.9874 12.849 10.9245 12.849ZM23 22.6558C23 22.8975 22.8041 23.0934 22.5625 23.0934H20.3886C20.147 23.0934 19.9511 22.8975 19.9511 22.6558V18.6726C19.9511 18.0784 20.1254 16.0687 18.3982 16.0687C17.0585 16.0687 16.7867 17.4442 16.7322 18.0616V22.6558C16.7322 22.8975 16.5363 23.0934 16.2946 23.0934H14.1921C13.9505 23.0934 13.7546 22.8975 13.7546 22.6558V14.0871C13.7546 13.8455 13.9505 13.6495 14.1921 13.6495H16.2946C16.5362 13.6495 16.7322 13.8455 16.7322 14.0871V14.828C17.2289 14.0825 17.9672 13.507 19.5391 13.507C23.02 13.507 23 16.759 23 18.5458V22.6558Z" fill="#191919"/>
                  </svg>
                </li>
              </ul>
          </div>
      </footer>
    </div>
  )
}
