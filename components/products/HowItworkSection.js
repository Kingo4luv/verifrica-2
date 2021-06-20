import Disclosure from "../disclosure"
import CodeComponent from "../code";
import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";
const items = [{
        color: "bg-yellow",
        title: "Integrate Verifrica",
        description: "Our front-end SDK can be integrated into your app or digital service with only a few lines of code. Your users will be able to log in using the Verifrica token.",
    },
    {
        color: "bg-light-blue",
        title: "Receive Verifrica Token",
        description: "You'll be given a token that will enable you to send a  request to Verifrica APIs endpoint to call users financial data.",
    },
    {
        color: "bg-toggle-green",
        title: "Start making API calls",
        description: "Customers' accounts, transactions, and details can be accessed by calling Verifrica APIs."
    },

]
const HowItWorkSection = ({hasCode, hasDisclosure, title, description}) => {
    return(
        <section className="py-12 md:py-24 bg-client-grey mt-12 relative">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row mx-auto px-4 space-x-0 md:space-x-4">
          <div className={`w-full md:w-1/2 ${hasDisclosure ? 'space-y-5' : 'space-y-10'}`}>
            <div className="space-y-5 max-w-lg">
                <h5 className="text-black text-sm sm:text-base">How it works</h5>
                <h3 className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold">
                  {title ? title :
                  `Introducing the future of financial payment in Africa`
                  }
                </h3>
                <p className="text-subtitle-3 lg:text-subtitle-2 max-w-md">
                  {description ? description : 
                    `Paying bills or sending money to someone? Verifrica provides tools that enable you to perform these services with ease using a token system.`
                  }
                </p>
            </div>
            {hasDisclosure ? (<div className="w-full md:w-100 lg:w-full xl:w-100 space-y-1 sm:space-y-4">
              <AnimateSharedLayout>
              {items.map((item, index) => {
                return(
                  <Disclosure item={item} key={index} />
                )
              })}
              </AnimateSharedLayout>
            </div>) : (
              <div className="w-full sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm bg-blue font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 border border-blue">View Api docs</a>
              </Link>
            </div>
            )}
          </div>
          <div className="w-full md:w-1/2 py-2 justify-center items-center hidden lg:flex mt-12 md:mt-0">
             {hasCode ? (
               <CodeComponent />
             ) : (
                <img src="/assets/img/how-it-works.svg" className="absolute right-0" alt="phone"/>
             )}
          </div>
        </div>
      </section>
    )
}

export default HowItWorkSection;