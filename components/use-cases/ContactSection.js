const ContactSection = () => {
    return(
        <section className="w-full px-4 xl:px-0">
          <div className="w-full max-w-screen-lg flex flex-col md:flex-row mx-auto py-12 md:py-52 space-y-8 md:space-y-0">
              <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="w-full max-w-xl space-y-2 sm:space-y-5 md:space-y-12">
                    <div className="space-y-5">
                        <h1 className="text-xl md:text-4xl xl:text-headline-3 font-bold">
                         Questions about how Verifrica can fit into your business ?
                        </h1>
                        <p className="text-black text-sm sm:text-head-text max-w-lg">
                            Our Sales team can help you find the right solution. Fill out the form and we’ll get in touch shortly.
                        </p>
                    </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-md">
                    <form className="space-y-6 w-full" action="#" method="POST">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="flex w-full">
                                <div className="w-1/2">
                                    <label htmlFor="first-name" className="sr-only">
                                       First name
                                    </label>
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className="appearance-none rounded-none relative bg-white block w-full px-3 py-4 border-l border-t border-b border-[#D1D1D1] placeholder-form-text-grey text-form-text-grey rounded-tl focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="last-name" className="sr-only">
                                        Last name
                                    </label>
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        className = "appearance-none rounded-none relative bg-white block w-full px-3 py-4 border-r border-t border-b border-l-0 border-[#D1D1D1] placeholder-form-text-grey text-form-text-grey rounded-tr focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    className = "appearance-none rounded-none relative block w-full px-3 py-4 border border-[#D1D1D1] placeholder-form-text-grey text-form-text-grey focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="sr-only">
                                    Company
                                </label>
                                <input
                                    name="company"
                                    type="company"
                                    autoComplete="off"
                                    required
                                    className = "appearance-none rounded-none relative block w-full px-3 py-3 md:py-4 border border-[#D1D1D1] placeholder-form-text-grey text-form-text-grey focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base"
                                    placeholder="Company"
                                />
                            </div>
                            <button type="button" className="text-left relative w-full px-3 py-4 border border-[#D1D1D1] text-form-text-grey focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base">
                                What are you building?
                                <span className="absolute right-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <button type="button" className="text-left relative w-full px-3 py-4 border-r border-l border-[#D1D1D1] text-form-text-grey focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base">
                               What role are you in ?
                                <span className="absolute right-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <button type="button" className="text-left relative w-full px-3 py-4 border border-[#D1D1D1] text-form-text-grey rounded-b focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm md:text-base">
                                Where are you located
                                <span className="absolute right-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div>
                            <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                             Contact Us
                            </button>
                        </div>
                    </form>
                </div>
              </div>
          </div>
      </section>
    )
}

export default ContactSection;