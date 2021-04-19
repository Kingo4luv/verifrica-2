import Link from "next/link";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

const StarImage = () => {
    return (
        <section className="py-16 flex flex-col md:flex-row px-4 lg:px-6 xl:px-48">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <Slide bottom>
                <dt className="text-2xl md:text-4xl font-bold leading-normal">Secure, easy and <br/> reliable to use</dt>
                </Slide>
                <Slide bottom>
                <dd className="font-light pr-0 lg:pr-52  text-sm md:text-base text-grey">
                  We are aware of the importance of your information. Verifrica provides a secure, easy, and reliable to use platform where you can securely and reliably retrieve balance, past transactions, personal identity, etc. 
                </dd>
                </Slide>
              </dl>
              <Slide bottom>
              <div>
                <Link href="/" className="">
                  <a className="px-16 py-4 bg-blue rounded text-sm font-medium text-white tracking-wide mt-6">Learn more</a>
                </Link>
              </div>
                </Slide>
            </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-12 md:space-y-40 mt-16 md:mt-0">
          <div className="w-full h-20 lg:h-32 flex justify-center items-center">
            <div className="w-20 lg:w-32 h-full rounded-full flex justify-center items-center">
              <Slide bottom>
              <img src="/assets/img/top-boy.png" className="w-full h-full object-cover object-center" />
              </Slide>
            </div>
          </div>
          <div className="w-full h-20 lg:h-32 flex items-center justify-between">
            <div className="w-20 lg:w-32 h-full rounded-full flex items-center justify-center">
              <Slide right>
              <img src="/assets/img/left-girl.png" className="w-full h-full object-cover object-center" />
              </Slide>
            </div>
            <Rotate>
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
             </Rotate>
            <div className="w-20 lg:w-32 h-full rounded-full">
              <Slide left>
              <img src="/assets/img/right-boy.png" className="w-full h-full object-cover object-center" />
              </Slide>
            </div>
          </div>
          <div className="w-full h-20 lg:h-32 flex justify-center items-center">
            <div className="w-20 lg:w-32 h-full rounded-full">
              <Slide top>
              <img src="/assets/img/bottom-girl.png" className="w-full h-full object-cover object-center" />
              </Slide>
            </div>
          </div>
        </div>
      </section>
    )
}

export default StarImage;