import Link from "next/link";
import CodeComponent from "../../code.js";
const HowItWorks = () => {
    return(
        <section className="py-12 md:py-32 w-full bg-client-grey">
        <div className="w-full md:w-10/12 xl:w-4/5 flex flex-col md:flex-row mx-auto px-4 md:px-0">
          <div className="w-full md:w-1/2 space-y-10">
            <div className="space-y-5">
                <h5 className="text-grey text-sm sm:text-base">How it works</h5>
                <h3 className="text-2xl md:text-4xl font-bold leading-tight  md:leading-snug">
                Identity data straight from <br className="hidden lg:block"/>  the source
                </h3>
                <p className="text-sm sm:text-base pr-0 sm:pr-4 xl:pr-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra puneque, viverra vitae, in. 
                </p>
            </div>
            <div className="w-1/2 sm:w-auto">
                <Link href="/" className="block">
                <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm bg-blue font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 border border-blue">View Api docs</a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-2 justify-center items-center md:flex mt-12 md:mt-0">
            <CodeComponent />
          </div>
        </div>
      </section>
    )
}

export default HowItWorks;