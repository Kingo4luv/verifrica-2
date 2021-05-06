export function SupportHero({title}){
    return(
        <section className="hero pt-16 pb-32 lg:py-32 bg-hair text-white relative">
          <div className="max-w-xl mx-auto space-y-6 lg:space-y-12">
             {title ? (<div className="space-y-4 lg:space-y-12">
                  <h1 className="text-center text-2xl md:text-4xl lg:text-head font-bold leading-normal text-white">Verifrica Support</h1>
                  <p className="mt-4 lg:mt-10 text-subtitle-3 lg:text-subtitle-1 text-white font-light text-center px-6">Find the answers you seek and get help using Verifrica to access financial data</p>
             </div>) : ""}
            
            <div className="relative px-4">
                <input type="text" className="rounded-full w-full py-3 placeholder-grey text-grey px-12 text-sm" placeholder="Search" />
                <span className="absolute top-[14px] left-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div>
          </div>
      </section>
    )
}