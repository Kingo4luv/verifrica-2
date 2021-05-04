import Link from "next/link";

const BlueMobile = () => {
    return(
        <section className="py-12 md:py-24 bg-light-shade-blue">
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row mx-auto px-4 space-x-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
              <div className = "w-full space-y-12">
                <div className="space-y-5">
                    <h3 className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold">
                    Introducing the future of financial payment in Africa
                    </h3>
                    <p className="text-subtitle-3 lg:text-subtitle-2 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverra puneque, viverra vitae, in. 
                    </p>
                </div>
                <div className="w-full sm:w-auto">
                    <Link href="/" className="block">
                      <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm bg-blue font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 border border-blue">View Api docs</a>
                    </Link>
                </div>
            </div>
          </div>
            
          <div className="w-full md:w-1/2 py-2 justify-center items-center flex mt-12 md:mt-0">
             <img src="/assets/img/mobile-blue.png" className="w-full md:w-4/5 lg:w-10/12 xl:w-auto" alt="phone"/>
          </div>
        </div>
      </section>
    )
}

export default BlueMobile;