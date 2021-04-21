import Slide from 'react-reveal/Slide'
const CareerPostionSection = () => {
    return(
        <section className="pb-12">
        <div className="w-full md:w-5/6 mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
                <Slide bottom>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-left">Latest Positions </h3>
                </Slide>
                <div className="w-full md:w-auto space-x-0 md:space-x-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
                    <div className="w-full flex space-x-4 items-center">
                        <Slide bottom>
                        <label htmlFor="filter" className="font-light">Filter:</label>
                        </Slide>
                        <Slide bottom>
                        <button className="w-3/4 md:w-60 py-[0.5rem] md:py-2 border border-black rounded-[4px] text-base px-4 leading-tight flex relative items-center text-black font-light focus:outline-none">
                            <span>All Department</span>
                            <span className="absolute right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        </Slide>
                    </div>
                    <div className="w-full">
                        <Slide bottom>
                        <button className="w-full md:w-80 py-[0.6rem] md:py-2 border border-black rounded-[4px] px-4 leading-2 flex relative items-center text-grey text-sm font-light focus:outline-none ">
                            <span>Search roles...</span>
                            <span className="absolute right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </button>
                        </Slide>
                    </div>
                </div>
            </div>
            <div className="grid  grid-col-1 sm:grid-cols-2 gap-x-10 lg:gap-x-40 mt-6">
                <div className="py-4 md:py-12 space-y-10">
                    <div className="space-y-2 md:space-y-8">
                        <Slide bottom>
                        <h3 className="text-lg md:text-2xl lg:text-4xl text-grey">Finance and Accounting</h3>
                        </Slide>
                        <Slide bottom cascade>
                        <dl className="space-y-2 md:space-y-4">
                            <dt className="text-lg md:text-2xl">GTM Data Scientist</dt>
                            <dd className="text-sm md:text-base font-light">Abuja, Nigeria</dd>
                        </dl>
                        </Slide>
                    </div>
                    <div className="space-y-2 md:space-y-8">
                        <Slide bottom>
                        <h3 className="text-lg md:text-2xl lg:text-4xl text-grey">Marketing</h3>
                        </Slide>
                        <Slide bottom cascade>
                        <dl className="space-y-2 md:space-y-4">
                            <dt className="text-lg md:text-2xl">Account Based Marketing Manager</dt>
                            <dd className="text-sm md:text-base font-light">Abuja, Nigeria</dd>
                        </dl>
                        </Slide>
                    </div>
                    
                </div>
                <div className="py-4 md:py-12 space-y-10 mt-6 sm:mt-0 ">
                    <div className="space-y-2 md:space-y-8">
                        <Slide bottom>
                        <h3 className="text-lg md:text-2xl lg:text-4xl text-grey">Sales Business Systems</h3>
                        </Slide>
                        <Slide bottom cascade>
                        <dl className="space-y-2 md:space-y-4">
                            <dt className="text-lg md:text-2xl">System Architect</dt>
                            <dd className="text-sm md:text-base font-light">Remote</dd>
                        </dl>
                        </Slide>
                    </div>
                    <div className="space-y-2 md:space-y-8">
                        <Slide bottom>
                        <h3 className="text-lg md:text-2xl lg:text-4xl text-grey">Legal</h3>
                        </Slide>
                        <Slide bottom cascade>
                        <dl className="space-y-2 md:space-y-4">
                            <dt className="text-lg md:text-2xl">Privacy Counsel</dt>
                            <dd className="text-sm md:text-base font-light">Abuja, Nigeria</dd>
                        </dl>
                        </Slide>
                    </div>
                </div>
                
            </div>
        </div>
      </section>
    )
}

export default CareerPostionSection;