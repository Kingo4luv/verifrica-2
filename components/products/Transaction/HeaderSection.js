import Link from "next/link";
import Nav from "../../nav";
import Slide from 'react-reveal/Slide';
import TransactionHeaderIcon from '../../../public/assets/svgs/transaction-header.svg'

const HeaderSection = () => {
    return (
        <header className="w-full">
        <Nav theme="white" />
        <div className="w-full md:w-11/12 xl:w-5/6 py-12 md:py-32 mx-auto flex flex-col md:flex-row px-4 md:px-0">
          <div className="w-full md:w-1/2 space-y-0 sm:space-y-12">
            <div className="w-full space-y-4 md:space-y-6">
              <Slide bottom>  
              <h3 className="text-grey">Transactions</h3>
              </Slide>
               <Slide bottom> 
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-black font-bold leading-snug">Retrieve details of previous <br className="hidden lg:block"/> transactions</h1>
              </Slide>
               <Slide bottom> 
              <p className="text-grey text-sm md:text-base lg:text-lg">
                Gain access to every transaction data carried out. Verifrica <br className="hidden xl:block" />provides a secure, easy, and reliable to use platform where you <br className="hidden xl:block"/>can securely and reliably retrieve balance, past transactions, <br className="hidden xl:block"/>personal identity, expenses, financial reports, and more. 
              </p>
              </Slide>
            </div>
            <div className="flex space-x-4 md:space-x-12 w-full">
              <Slide bottom>    
              <div className="w-1/2 sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 border border-blue rounded text-sm font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 bg-blue">Try demo</a>
              </Link>
              </div>
              </Slide>
               <Slide bottom> 
              <div className="w-1/2 sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm font-medium text-black w-full block sm:inline text-center tracking-wide mt-6 border border-black">View Api docs</a>
              </Link>
              </div>
              </Slide>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 items-center justify-center mt-12 md:mt-0">
            <div className="w-full">
                <img src={TransactionHeaderIcon} />
            </div>
          </div>
        </div>
      </header>
    )
}

export default HeaderSection;