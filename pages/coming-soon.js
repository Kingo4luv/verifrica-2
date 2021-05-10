import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ContactUsModal from "../components/modal/Contact";
import EarlyAccess from "../components/modal/EarlyAccess";
import SuccessModal from "../components/modal/Sucess";

export default function ComingSoon(){

    const [earlyAccessIsOpen, setEarlyAccessIsOpen] = useState(false);
    const [contactIsOpen, setContactIsOpen] = useState(false);
    const [successIsOpen, setSuccessIsOpen] = useState(false);
    const [successType, setSuccessType] = useState("");

    const toggleEarlyAccess = () => {
        setContactIsOpen(false);
        setEarlyAccessIsOpen(!earlyAccessIsOpen);
    }
    const toggleContact = () => {
        setEarlyAccessIsOpen(false);
        setContactIsOpen(!contactIsOpen);
    }
    const toggleSuccess = (type="") => {
         setEarlyAccessIsOpen(false);
         setContactIsOpen(false);
         setSuccessIsOpen(!successIsOpen);
         setSuccessType(type)
    }

    return(
    <div className="Home w-full min-h-screen max-h-screen h-screen bg-hair overflow-hidden flex flex-col justify-between">
      <Head>
        <title>Verifrica | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="container max-w-[1100px] flex flex-col justify-between h-full sm:h-auto mx-auto pt-12 pb-0 lg:py-32 text-white px-4 overflow-hidden">
        <div className="max-w-2xl space-y-12">
            <div>
                <Link href="/">
                    <a>
                        <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.438 25.6843L33.2334 0.0605528V0.0390625C32.4543 1.19184 31.1351 1.95039 29.6402 1.95039H4.61918C2.22739 1.95039 0.285454 3.89233 0.285454 6.28426C0.285454 7.08002 0.50034 7.82592 0.875328 8.46719L10.8172 25.6843C11.5514 27.0351 12.9831 27.953 14.6276 27.953C16.2719 27.953 17.7038 27.0351 18.438 25.6843Z" fill="#007499"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.85081 17.0864C5.49328 16.4564 5.28911 15.728 5.28911 14.9524C5.28911 12.5606 7.23099 10.6187 9.62286 10.6187H12.125L8.42903 4.21989C7.69482 2.86896 6.26312 1.95117 4.6187 1.95117C2.22683 1.95117 0.284951 3.89305 0.284951 6.28492C0.284951 7.08065 0.499949 7.82665 0.874818 8.46793L5.85081 17.0864Z" fill="#007499"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8227 17.021L12.1254 10.6172H9.61714C7.22527 10.6172 5.28953 12.5591 5.28953 14.9509C5.28953 15.7498 5.5061 16.4983 5.88374 17.1413L10.8171 25.6835C10.4834 25.0694 10.2938 24.3659 10.2938 23.6184C10.2938 21.2266 12.2357 19.2847 14.6276 19.2847H19.6318C17.9874 19.2847 16.5557 18.3669 15.8214 17.016L15.8227 17.021Z" fill="#00ACE6"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.438 25.6833L23.3379 17.1973C22.5774 18.4483 21.2016 19.2846 19.6319 19.2846H14.6277C12.2358 19.2846 10.2939 21.2264 10.2939 23.6183C10.2939 26.0102 12.2358 27.952 14.6277 27.952C16.2721 27.952 17.7038 27.0343 18.438 25.6833Z" fill="#66D9FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.4038 17.0863C22.6588 18.3994 21.248 19.286 19.6318 19.286C17.9874 19.286 16.5557 18.3683 15.8213 17.0173L12.1254 10.6186H24.6358C26.2055 10.6186 27.5815 9.78226 28.3418 8.53125L23.4038 17.0863Z" fill="#00BFFF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.32495 4.03848C7.5645 2.78747 6.18865 1.95117 4.61899 1.95117H14.6274C16.1971 1.95117 17.5729 2.78747 18.3334 4.03848L20.8545 8.40269C21.5972 9.72472 23.0129 10.6187 24.6357 10.6187H12.1253L8.32495 4.03848Z" fill="#0086B3"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6276 1.95039C16.1972 1.95039 17.573 2.78674 18.3336 4.03769L20.8548 8.40203C21.5974 9.7239 23.013 10.618 24.6359 10.618C26.2057 10.618 27.5815 9.78163 28.342 8.53068L33.2334 0.0605528V0.0390625C32.4542 1.19184 31.1351 1.95039 29.6402 1.95039H14.6276Z" fill="#0099CC"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M101.987 23.7023C104.738 23.7023 107.046 22.1165 107.792 19.9984C107.792 19.9984 107.257 19.7269 106.676 19.43C105.963 19.068 105.093 19.2345 104.567 19.8355C103.953 20.5488 103.057 20.976 101.987 20.976C99.8652 20.976 98.3731 19.2961 98.3731 17.0368C98.3731 14.7051 99.9119 13.0939 101.963 13.0939C103.017 13.0939 103.946 13.5211 104.58 14.2453C105.101 14.8318 105.949 14.9983 106.654 14.6544C107.244 14.3647 107.792 14.0968 107.792 14.0968C106.999 11.8846 104.715 10.3458 101.987 10.3458C98.14 10.3458 95.2749 13.2098 95.2749 17.0114C95.2749 20.8131 98.1635 23.7023 101.987 23.7023ZM116.956 14.8716C116.956 13.8397 116.016 12.9962 114.642 13.0034C113.267 13.007 112.874 13.5211 112.241 14.2453C111.72 14.8318 110.871 14.9983 110.167 14.6544C109.576 14.3647 109.028 14.0968 109.028 14.0968C109.821 11.8846 112.106 10.3458 114.834 10.3458C117.266 10.3458 119.399 11.7651 119.859 14.0389L119.864 14.057C119.966 14.4299 119.937 14.868 119.937 15.2844C119.937 15.2844 119.937 19.1766 119.937 21.6748C119.937 22.6379 119.154 23.4236 118.188 23.4236H117.119V22.026C116.162 23.1448 114.833 23.7023 113.27 23.7023C110.402 23.7023 108.539 22.0731 108.539 19.926C108.539 18.0397 110.053 16.4756 113.037 15.9868L116.956 15.3097V14.8716ZM58.9947 16.5914C58.9947 13.1663 56.3625 10.3458 52.7249 10.3458C49.0865 10.3458 46.2914 13.188 46.2914 17.0114C46.2914 20.7443 48.9931 23.7023 52.9345 23.7023C55.5939 23.7023 57.6902 22.3989 58.4824 20.556C58.4824 20.556 57.8919 20.2664 57.2941 19.9731C56.6572 19.6617 55.8947 19.7631 55.3636 20.2338C54.7673 20.7696 53.9602 21.0955 52.958 21.0955C51.0221 21.0955 49.576 19.8319 49.3892 17.8731H57.7148C58.0545 17.8731 58.3799 17.7392 58.62 17.5002C58.8604 17.2576 58.9951 16.9318 58.9951 16.595C58.9947 16.5914 58.9947 16.5914 58.9947 16.5914ZM90.9852 23.4236H92.218C93.1837 23.4236 93.9664 22.6379 93.9664 21.6748C93.9664 18.17 93.9664 10.6246 93.9664 10.6246H90.9852V23.4236ZM69.3726 23.4236H70.6054C71.571 23.4236 72.3538 22.6379 72.3538 21.6748C72.3538 18.17 72.3538 10.6246 72.3538 10.6246H69.3726V23.4236ZM66.8052 10.487C65.1498 10.487 63.8442 11.0229 63.1447 12.4893V10.6246H62.0987C61.1327 10.6246 60.3499 11.4103 60.3499 12.3734C60.3499 15.8782 60.3499 23.4236 60.3499 23.4236H61.5828C62.5484 23.4236 63.3312 22.6379 63.3312 21.6748C63.3312 19.5567 63.3312 16.2656 63.3312 16.2656C63.3312 14.2851 64.5904 13.141 66.4554 13.141H68.0641V10.487H66.8052ZM42.9553 10.6246L39.6685 19.4373C39.6685 19.4373 37.6945 14.1439 36.8064 11.7615C36.5511 11.0772 35.898 10.6246 35.1681 10.6246C34.2821 10.6246 33.2354 10.6246 33.2354 10.6246C33.2354 10.6246 36.663 19.22 37.9009 22.3229C38.1659 22.9855 38.8093 23.4236 39.5251 23.4236C39.6127 23.4236 39.7011 23.4236 39.7887 23.4236C40.5045 23.4236 41.1479 22.9855 41.4129 22.3229C42.6508 19.22 46.0785 10.6246 46.0785 10.6246H42.9553ZM82.1958 13.3039H78.7656C78.7656 13.3039 78.7656 18.7783 78.7656 21.6748C78.7656 22.6379 77.9824 23.4236 77.0168 23.4236H75.784V13.3039H73.4295V10.6246H75.784V10.0671C75.784 7.14884 77.7174 5.51953 80.6074 5.51953C80.9803 5.51953 81.5632 5.56662 81.8895 5.63542C81.8895 5.63542 81.8895 6.49713 81.8895 7.21763C81.8895 7.7209 81.4825 8.12999 80.9803 8.12999C79.6048 8.12999 78.7656 8.78174 78.7656 10.0671V10.6246H84.9905V12.4893C85.69 11.0229 86.9956 10.487 88.651 10.487H89.9099V13.141H88.3012C86.4359 13.141 85.177 14.2851 85.177 16.2656C85.177 16.2656 85.177 19.5567 85.177 21.6748C85.177 22.6379 84.3942 23.4236 83.4286 23.4236H82.1958V13.3039ZM113.643 21.396C112.453 21.396 111.637 20.8601 111.637 19.8102C111.637 19.1331 112.104 18.4126 113.456 18.1556L116.956 17.5256V18.3185C116.956 20.0455 115.533 21.396 113.643 21.396ZM49.4591 15.6139C49.8092 13.818 51.092 12.7897 52.7249 12.7897C54.3342 12.7897 55.6869 13.9592 55.8035 15.6139H49.4591ZM69.3726 8.94464H70.6054C71.0692 8.94464 71.5138 8.76001 71.8418 8.43054C72.1699 8.10468 72.3538 7.65933 72.3538 7.19589C72.3538 6.49348 72.3538 5.8454 72.3538 5.8454H69.3726V8.94464ZM90.9852 8.94464H92.218C92.6818 8.94464 93.1264 8.76001 93.4545 8.43054C93.7821 8.10468 93.9664 7.65933 93.9664 7.19589C93.9664 6.49348 93.9664 5.8454 93.9664 5.8454H90.9852V8.94464Z" fill="white"/>
                        </svg>
                    </a>
                </Link>
            </div>
            <div className="space-y-5 max-w-sm lg:max-w-5xl">
                <h1 className="text-2xl md:text-4xl lg:text-head font-bold">
                    Easy access to connecting financial accounts across Africa to an app
                </h1>
                <p className="max-w-sm lg:max-w-xl text-[15px] lg:text-[16px] leading-[28.8px] font-light">Verifrica is a payment platform that provides access to a broad range of individuals and businesses' financial accounts for financial data across various banks in Africa with ease.</p>
            </div>
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-4 lg:space-y-0">
                <button onClick={toggleEarlyAccess} className="w-full md:w-1/2 lg:w-auto text-sm focus:outline-none rounded py-[13px] sm:py-4 px-4 lg:px-8 bg-blue hover:bg-[#0798c4]">Request access</button>
                <button onClick={toggleContact} className="w-full md:w-1/2 lg:w-auto text-sm focus:outline-none rounded py-[13px] sm:py-4 px-4 lg:px-8 bg-[#1F1F1F] hover:bg-[#1d1c1c]">Contact sales</button>
            </div>
        </div>
        <img src="/assets/img/mobile-coming.png" className="absolute top-0 right-0 w-[40%] lg:w-[25%] hidden md:block"/>
        <div className="w-full justify-center items-center flex mt-6 px-8">
            <img src="/assets/img/mobile-small.png" className="block md:hidden"/>
        </div>
      </header>
      <footer className="w-full bg-[#191919] py-12 text-white hidden md:block px-4">
           <div className="mx-auto max-w-[1100px] flex justify-end">
               <div className="flex items-center space-x-12">
                   <p className="text-sm text-gray-200 font-light mt-4 sm:mt-0">© Reef financial solutions</p>
                    <ul className="flex space-x-5">
                    <li>
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12.1596C15.2405 12.1596 14.4981 12.3848 13.8666 12.8068C13.2351 13.2287 12.7429 13.8284 12.4523 14.5301C12.1617 15.2318 12.0856 16.0039 12.2338 16.7487C12.3819 17.4936 12.7477 18.1779 13.2847 18.7149C13.8217 19.2519 14.506 19.6177 15.2508 19.7658C15.9957 19.914 16.7678 19.8379 17.4695 19.5473C18.1712 19.2567 18.7709 18.7645 19.1928 18.133C19.6148 17.5015 19.84 16.7591 19.84 15.9996C19.84 14.9812 19.4354 14.0045 18.7153 13.2843C17.9951 12.5642 17.0184 12.1596 16 12.1596ZM16 18.5596C15.4937 18.5596 14.9987 18.4095 14.5777 18.1282C14.1567 17.8469 13.8286 17.4471 13.6349 16.9793C13.4411 16.5115 13.3904 15.9968 13.4892 15.5002C13.588 15.0036 13.8318 14.5474 14.1898 14.1894C14.5478 13.8314 15.004 13.5876 15.5006 13.4888C15.9972 13.39 16.5119 13.4407 16.9797 13.6345C17.4474 13.8282 17.8473 14.1564 18.1286 14.5773C18.4099 14.9983 18.56 15.4933 18.56 15.9996C18.56 16.6786 18.2903 17.3297 17.8102 17.8098C17.3301 18.2899 16.6789 18.5596 16 18.5596ZM20.8704 10.3612C20.7122 10.3612 20.5575 10.4081 20.4259 10.496C20.2944 10.5839 20.1918 10.7089 20.1313 10.8551C20.0707 11.0012 20.0549 11.1621 20.0858 11.3173C20.1166 11.4725 20.1928 11.615 20.3047 11.7269C20.4166 11.8388 20.5591 11.915 20.7143 11.9458C20.8695 11.9767 21.0304 11.9609 21.1765 11.9003C21.3227 11.8398 21.4477 11.7372 21.5356 11.6057C21.6235 11.4741 21.6704 11.3194 21.6704 11.1612C21.6712 11.0559 21.6511 10.9515 21.6112 10.854C21.5713 10.7566 21.5124 10.6681 21.438 10.5936C21.3635 10.5192 21.275 10.4603 21.1775 10.4204C21.0801 10.3805 20.9757 10.3604 20.8704 10.3612ZM26.88 5.1196C25.0927 3.33851 22.8941 2.02516 20.4787 1.29564C18.0632 0.566115 15.5052 0.442892 13.0308 0.936861C10.5563 1.43083 8.24173 2.52678 6.2915 4.12783C4.34128 5.72888 2.81551 7.78572 1.84907 10.1165C0.882636 12.4474 0.50529 14.9804 0.750391 17.4917C0.995493 20.003 1.85549 22.4152 3.25437 24.5152C4.65325 26.6152 6.54793 28.3382 8.77092 29.5319C10.9939 30.7257 13.4768 31.3534 16 31.3596C19.0434 31.3671 22.0204 30.4703 24.5533 28.783C27.0862 27.0958 29.0608 24.6941 30.2264 21.8828C31.3921 19.0714 31.6963 15.9772 31.1005 12.9927C30.5047 10.0081 29.0358 7.26787 26.88 5.1196ZM23.68 20.0636C23.67 21.0195 23.2858 21.9335 22.6098 22.6095C21.9339 23.2854 21.0199 23.6696 20.064 23.6796H11.9424C10.9859 23.6696 10.0712 23.2857 9.39424 22.6099C8.71724 21.9341 8.33165 21.0201 8.31999 20.0636V11.942C8.32835 10.9839 8.71268 10.0673 9.39021 9.38981C10.0677 8.71228 10.9843 8.32796 11.9424 8.3196H20.064C21.022 8.32632 21.9389 8.71033 22.6157 9.38839C23.2926 10.0665 23.675 10.9839 23.68 11.942V20.0636Z" fill="white"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.88 5.12023C24.3719 2.60343 21.0688 1.034 17.5334 0.679294C13.998 0.324584 10.449 1.20653 7.49092 3.1749C4.53282 5.14327 2.34863 8.0763 1.3104 11.4744C0.272173 14.8724 0.444135 18.5254 1.79699 21.8109C3.14985 25.0964 5.59992 27.8113 8.72985 29.493C11.8598 31.1748 15.476 31.7195 18.9624 31.0342C22.4488 30.3489 25.5899 28.4761 27.8504 25.7349C30.111 22.9936 31.3513 19.5534 31.36 16.0002C31.365 13.9813 30.9718 11.9811 30.2031 10.1142C29.4344 8.24735 28.3052 6.55032 26.88 5.12023ZM22.24 12.8578V13.2674C22.242 13.9133 22.1711 14.5574 22.0288 15.1874C21.5942 17.2276 20.4615 19.0522 18.8259 20.3467C17.1902 21.6411 15.1542 22.3244 13.0688 22.2786C11.3229 22.2803 9.61211 21.7877 8.1344 20.8578C8.39162 20.8857 8.65008 20.9007 8.9088 20.9026C10.3515 20.9048 11.754 20.4275 12.896 19.5458C12.2292 19.5317 11.5831 19.312 11.0458 18.9168C10.5086 18.5216 10.1065 17.9702 9.8944 17.3378C10.0916 17.3841 10.2934 17.4077 10.496 17.4082C10.7928 17.4072 11.088 17.3641 11.3728 17.2802C10.8466 17.1777 10.3546 16.9447 9.942 16.6025C9.52937 16.2603 9.2093 15.8199 9.0112 15.3218C8.86099 14.9609 8.78482 14.5735 8.7872 14.1826V14.1442C9.23357 14.388 9.73159 14.5218 10.24 14.5346C9.80248 14.2476 9.44305 13.8564 9.19395 13.3962C8.94486 12.936 8.8139 12.4211 8.8128 11.8978C8.81961 11.3374 8.97177 10.7883 9.2544 10.3042C10.0672 11.2898 11.078 12.0937 12.2213 12.6637C13.3646 13.2337 14.6149 13.5571 15.8912 13.613C15.8325 13.3763 15.8003 13.1337 15.7952 12.8898C15.8089 12.2496 16.0125 11.6279 16.3802 11.1036C16.7479 10.5792 17.263 10.176 17.8602 9.94488C18.4574 9.7138 19.1099 9.66535 19.7347 9.80567C20.3595 9.946 20.9285 10.2688 21.3696 10.733C22.0904 10.5898 22.7824 10.3282 23.4176 9.95863C23.1741 10.6987 22.6689 11.3245 21.9968 11.7186C22.6322 11.6389 23.2529 11.4687 23.84 11.213C23.4082 11.8516 22.8664 12.4085 22.24 12.8578Z" fill="white"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="white"/>
                        <path d="M12.4133 22.6175C12.4133 22.8803 12.2003 23.0934 11.9374 23.0934H9.91162C9.64878 23.0934 9.43572 22.8803 9.43572 22.6175V14.1254C9.43572 13.8626 9.64878 13.6495 9.91162 13.6495H11.9374C12.2003 13.6495 12.4133 13.8626 12.4133 14.1254V22.6175ZM10.9245 12.849C9.86165 12.849 9 11.9874 9 10.9245C9 9.86165 9.86165 9 10.9245 9C11.9874 9 12.849 9.86165 12.849 10.9245C12.849 11.9874 11.9874 12.849 10.9245 12.849ZM23 22.6558C23 22.8975 22.8041 23.0934 22.5625 23.0934H20.3886C20.147 23.0934 19.9511 22.8975 19.9511 22.6558V18.6726C19.9511 18.0784 20.1254 16.0687 18.3982 16.0687C17.0585 16.0687 16.7867 17.4442 16.7322 18.0616V22.6558C16.7322 22.8975 16.5363 23.0934 16.2946 23.0934H14.1921C13.9505 23.0934 13.7546 22.8975 13.7546 22.6558V14.0871C13.7546 13.8455 13.9505 13.6495 14.1921 13.6495H16.2946C16.5362 13.6495 16.7322 13.8455 16.7322 14.0871V14.828C17.2289 14.0825 17.9672 13.507 19.5391 13.507C23.02 13.507 23 16.759 23 18.5458V22.6558Z" fill="#191919"/>
                        </svg>
                    </li>
                    </ul>
               </div>
           </div>
      </footer>

        
        <EarlyAccess toggle={toggleEarlyAccess} isOpen={earlyAccessIsOpen} toggleContact={toggleContact} toggleSuccess={toggleSuccess} />
        <ContactUsModal toggle={toggleContact} isOpen={contactIsOpen} toggleEarlyAccess={toggleEarlyAccess} toggleSuccess={toggleSuccess} />
        <SuccessModal toggle={toggleSuccess} successType={successType} isOpen={successIsOpen} />
    </div>
    )
}