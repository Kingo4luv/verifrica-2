import Link from "next/link"
import Nav from "../../nav"
import PaymemntInitiationHeaderIcon from '../../../public/assets/svgs/payment-initiation.svg'
const HeaderSection = () => {
    return(
        <header className="w-full">
        <Nav theme="white" />
        <div className="w-full md:w-11/12 xl:w-5/6 py-12 md:py-32 mx-auto flex flex-col md:flex-row px-4 md:px-0">
          <div className="w-full md:w-1/2 space-y-0 sm:space-y-12">
            <div className="w-full space-y-4 md:space-y-6">
              <h3 className="text-grey">Assets</h3>
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-black font-bold leading-snug pr-0 2xl:pr-40">
                  Instant bank payment within your app
               </h1>
              <p className="text-grey text-sm md:text-base lg:text-lg pr-0 xl:pr-32 2xl:pr-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra purus. Orci, pretium ut nisl neque, viverra vitae, in. 
              </p>
            </div>
            <div className="flex space-x-4 md:space-x-12 w-full">  
              <div className="w-1/2 sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 border border-blue rounded text-sm font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 bg-blue">Try demo</a>
              </Link>
              </div> 
              <div className="w-1/2 sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm font-medium text-black w-full block sm:inline text-center tracking-wide mt-6 border border-black">View Api docs</a>
              </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 items-center justify-center mt-12 md:mt-0">
            <div className="w-full">
                <img src={PaymemntInitiationHeaderIcon} className="w-full" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default HeaderSection