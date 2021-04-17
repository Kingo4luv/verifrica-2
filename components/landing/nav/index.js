import Link from 'next/link';
import { useState } from 'react';
import NavLink from './link';
import MobileNav from './mobileNav';
import { Transition } from "@headlessui/react";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMobileNav = () => {
      setIsOpen(!isOpen);
    }
    return(
      <>
        <nav className="flex justify-between px-4 lg:px-12 items-center bg-card-blue h-16">
              <div className="logo">
                <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.4371 25.6852L33.2324 0.0615293V0.0400391C32.4534 1.19282 31.1342 1.95136 29.6393 1.95136H4.6182C2.22642 1.95136 0.284477 3.89331 0.284477 6.28523C0.284477 7.081 0.499363 7.8269 0.874352 8.46817L10.8162 25.6852C11.5504 27.036 12.9821 27.954 14.6266 27.954C16.271 27.954 17.7028 27.036 18.4371 25.6852Z" fill="#007499"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.85081 17.0869C5.49328 16.4568 5.28911 15.7285 5.28911 14.9529C5.28911 12.561 7.23099 10.6192 9.62286 10.6192H12.125L8.42903 4.22038C7.69482 2.86945 6.26312 1.95166 4.6187 1.95166C2.22683 1.95166 0.284951 3.89354 0.284951 6.28541C0.284951 7.08114 0.499949 7.82714 0.874818 8.46841L5.85081 17.0869Z" fill="#007499"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.8217 17.022L12.1244 10.6182H9.61617C7.2243 10.6182 5.28855 12.56 5.28855 14.9519C5.28855 15.7508 5.50512 16.4993 5.88276 17.1423L10.8161 25.6845C10.4824 25.0704 10.2928 24.3669 10.2928 23.6194C10.2928 21.2276 12.2347 19.2857 14.6266 19.2857H19.6309C17.9864 19.2857 16.5547 18.3679 15.8204 17.0169L15.8217 17.022Z" fill="#00ACE6"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.436 25.685L23.3359 17.199C22.5755 18.45 21.1996 19.2863 19.63 19.2863H14.6257C12.2338 19.2863 10.292 21.2282 10.292 23.62C10.292 26.0119 12.2338 27.9538 14.6257 27.9538C16.2701 27.9538 17.7018 27.036 18.436 25.685Z" fill="#66D9FF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.4019 17.0875C22.6568 18.4007 21.2461 19.2873 19.6298 19.2873C17.9854 19.2873 16.5537 18.3695 15.8194 17.0186L12.1234 10.6198H24.6339C26.2035 10.6198 27.5795 9.78348 28.3398 8.53247L23.4019 17.0875Z" fill="#00BFFF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.32397 4.03896C7.56352 2.78795 6.18768 1.95166 4.61802 1.95166H14.6265C16.1961 1.95166 17.572 2.78795 18.3324 4.03896L20.8536 8.40318C21.5962 9.72521 23.0119 10.6192 24.6348 10.6192H12.1243L8.32397 4.03896Z" fill="#0086B3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.6266 1.95136C16.1963 1.95136 17.5721 2.78772 18.3326 4.03866L20.8538 8.40301C21.5964 9.72488 23.0121 10.619 24.6349 10.619C26.2047 10.619 27.5805 9.78261 28.341 8.53166L33.2324 0.0615293V0.0400391C32.4532 1.19282 31.1342 1.95136 29.6393 1.95136H14.6266Z" fill="#0099CC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M101.986 23.7033C104.737 23.7033 107.045 22.1175 107.791 19.9994C107.791 19.9994 107.256 19.7279 106.675 19.431C105.962 19.0689 105.092 19.2355 104.566 19.8365C103.952 20.5498 103.056 20.977 101.986 20.977C99.8642 20.977 98.3721 19.297 98.3721 17.0378C98.3721 14.7061 99.9109 13.0949 101.962 13.0949C103.016 13.0949 103.945 13.5221 104.579 14.2462C105.1 14.8328 105.948 14.9993 106.653 14.6554C107.243 14.3657 107.791 14.0978 107.791 14.0978C106.998 11.8856 104.714 10.3468 101.986 10.3468C98.139 10.3468 95.274 13.2107 95.274 17.0124C95.274 20.8141 98.1625 23.7033 101.986 23.7033ZM116.955 14.8726C116.955 13.8407 116.015 12.9971 114.641 13.0044C113.266 13.008 112.873 13.5221 112.24 14.2462C111.719 14.8328 110.87 14.9993 110.166 14.6554C109.575 14.3657 109.027 14.0978 109.027 14.0978C109.82 11.8856 112.105 10.3468 114.833 10.3468C117.265 10.3468 119.398 11.7661 119.858 14.0399L119.863 14.0579C119.965 14.4309 119.936 14.869 119.936 15.2853C119.936 15.2853 119.936 19.1775 119.936 21.6758C119.936 22.6389 119.153 23.4246 118.187 23.4246H117.118V22.027C116.161 23.1457 114.832 23.7033 113.269 23.7033C110.401 23.7033 108.538 22.0741 108.538 19.927C108.538 18.0407 110.052 16.4766 113.036 15.9878L116.955 15.3107V14.8726ZM58.9938 16.5924C58.9938 13.1673 56.3615 10.3468 52.7239 10.3468C49.0855 10.3468 46.2904 13.189 46.2904 17.0124C46.2904 20.7453 48.9921 23.7033 52.9335 23.7033C55.5929 23.7033 57.6892 22.3999 58.4814 20.557C58.4814 20.557 57.8909 20.2674 57.2931 19.9741C56.6563 19.6627 55.8938 19.7641 55.3626 20.2348C54.7663 20.7706 53.9593 21.0965 52.9571 21.0965C51.0211 21.0965 49.575 19.8329 49.3882 17.8741H57.7139C58.0535 17.8741 58.379 17.7401 58.619 17.5012C58.8594 17.2586 58.9941 16.9327 58.9941 16.596C58.9937 16.5924 58.9938 16.5924 58.9938 16.5924ZM90.9842 23.4246H92.2171C93.1827 23.4246 93.9655 22.6389 93.9655 21.6758C93.9655 18.171 93.9655 10.6256 93.9655 10.6256H90.9842V23.4246ZM69.3716 23.4246H70.6044C71.57 23.4246 72.3528 22.6389 72.3528 21.6758C72.3528 18.171 72.3528 10.6256 72.3528 10.6256H69.3716V23.4246ZM66.8042 10.488C65.1488 10.488 63.8432 11.0239 63.1437 12.4902V10.6256H62.0977C61.1317 10.6256 60.349 11.4113 60.349 12.3744C60.349 15.8792 60.349 23.4246 60.349 23.4246H61.5818C62.5474 23.4246 63.3302 22.6389 63.3302 21.6758C63.3302 19.5577 63.3302 16.2666 63.3302 16.2666C63.3302 14.2861 64.5894 13.142 66.4544 13.142H68.0631V10.488H66.8042ZM42.9543 10.6256L39.6675 19.4382C39.6675 19.4382 37.6936 14.1449 36.8054 11.7625C36.5502 11.0782 35.897 10.6256 35.1671 10.6256C34.2811 10.6256 33.2344 10.6256 33.2344 10.6256C33.2344 10.6256 36.662 19.221 37.8999 22.3239C38.165 22.9865 38.8083 23.4246 39.5241 23.4246C39.6118 23.4246 39.7001 23.4246 39.7877 23.4246C40.5035 23.4246 41.1469 22.9865 41.4119 22.3239C42.6498 19.221 46.0775 10.6256 46.0775 10.6256H42.9543ZM82.1948 13.3049H78.7646C78.7646 13.3049 78.7646 18.7793 78.7646 21.6758C78.7646 22.6389 77.9815 23.4246 77.0158 23.4246H75.783V13.3049H73.4285V10.6256H75.783V10.068C75.783 7.14981 77.7164 5.52051 80.6064 5.52051C80.9793 5.52051 81.5623 5.5676 81.8885 5.63639C81.8885 5.63639 81.8885 6.4981 81.8885 7.21861C81.8885 7.72188 81.4815 8.13097 80.9793 8.13097C79.6039 8.13097 78.7646 8.78272 78.7646 10.068V10.6256H84.9896V12.4902C85.6891 11.0239 86.9947 10.488 88.65 10.488H89.9089V13.142H88.3003C86.4349 13.142 85.176 14.2861 85.176 16.2666C85.176 16.2666 85.176 19.5577 85.176 21.6758C85.176 22.6389 84.3932 23.4246 83.4276 23.4246H82.1948V13.3049ZM113.642 21.397C112.452 21.397 111.636 20.8611 111.636 19.8111C111.636 19.1341 112.103 18.4136 113.455 18.1565L116.955 17.5265V18.3194C116.955 20.0465 115.532 21.397 113.642 21.397ZM49.4581 15.6148C49.8082 13.819 51.091 12.7907 52.7239 12.7907C54.3333 12.7907 55.6859 13.9602 55.8025 15.6148H49.4581ZM69.3716 8.94561H70.6044C71.0682 8.94561 71.5128 8.76099 71.8408 8.43151C72.1689 8.10565 72.3528 7.6603 72.3528 7.19686C72.3528 6.49446 72.3528 5.84637 72.3528 5.84637H69.3716V8.94561ZM90.9842 8.94561H92.2171C92.6809 8.94561 93.1255 8.76099 93.4535 8.43151C93.7812 8.10565 93.9655 7.6603 93.9655 7.19686C93.9655 6.49446 93.9655 5.84637 93.9655 5.84637H90.9842V8.94561Z" fill="white"/>
                </svg>
              </div>
              <NavLink />
              <div className="block lg:hidden" onClick={toggleMobileNav}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </div>
              <ul className="lg:flex space-x-12 items-center hidden">
                <li className="text-white font-medium text-sm">Sign in</li>
                <li>
                  <button className="bg-yellow px-4 py-2 leading-loose tracking-wider rounded font-medium text-sm text-hair focus:outline-none">
                    Try demo
                  </button>
                </li>
              </ul>
          </nav>
          <Transition
            show={isOpen}
            className="relative z-10"
            enter=" ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <MobileNav toggleMobileNav={toggleMobileNav}/>
        </Transition>
      </>
    )
}

export default Nav;