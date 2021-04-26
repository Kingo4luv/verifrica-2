const ProblemSolutionSection = () =>{
    return(
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-40 px-4">
              <div className="w-full max-w-lg space-y-6 md:space-y-12">
                  <div className="h-12 sm:h-16 w-12 sm:w-16 bg-yellow rounded-full flex justify-center items-center">
                    <svg className="h-5 sm:h-8 w-5 sm:w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5182 25.9199H14.9726C13.8842 25.9199 12.9996 26.8045 12.9996 27.893V30.0272C12.9996 31.1157 13.8842 32.0003 14.9726 32.0003H16.5182C17.6067 32.0003 18.4913 31.1157 18.4913 30.0272V27.893C18.4913 26.8013 17.6067 25.9199 16.5182 25.9199Z" fill="#292929"/>
                        <path d="M5.61974 9.39842L8.47084 9.75357C9.37516 9.86538 10.2335 9.3458 10.559 8.49409C10.9701 7.41876 11.5423 6.57034 12.2756 5.95211C13.3148 5.07738 14.6071 4.63673 16.1527 4.63673C17.7542 4.63673 19.0301 5.05765 19.9772 5.89621C20.9242 6.73805 21.3945 7.74432 21.3945 8.92488C21.3945 9.7733 21.1281 10.5494 20.5954 11.2531C20.2501 11.7003 19.1879 12.6408 17.4155 14.0779C15.6397 15.515 14.4592 16.8106 13.8672 17.9615C13.2622 19.1388 13.0517 20.4443 12.9991 21.7532C12.9531 22.8745 13.8475 23.8084 14.9722 23.8084H16.5835C17.6095 23.8084 18.4579 23.0225 18.55 22.0031C18.6158 21.2698 18.7374 20.714 18.9216 20.3359C19.2307 19.688 20.0298 18.833 21.3123 17.7676C23.7951 15.7123 25.413 14.0878 26.1726 12.8908C26.929 11.6971 27.3105 10.431 27.3105 9.09259C27.3105 6.67557 26.2812 4.55452 24.2193 2.73271C22.1607 0.910903 19.3853 0 15.8995 0C12.5847 0 9.91122 0.897749 7.87237 2.69654C6.13607 4.22896 5.08047 6.04419 4.70887 8.13894C4.59374 8.75059 5.01138 9.32278 5.61974 9.39842Z" fill="#292929"/>
                    </svg>
                  </div>
                    <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">The Problem</h4>
                    <p className="text-subtitle-3 sm:text-subtitle-2 lg:text-headline-6 text-grey">
                        Obtaining a comprehensive picture of users' financial health is often times difficult when they have accounts at multiple financial institutions.
                    </p>
               </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-32 bg-light-blue px-4">
              <div className="w-full max-w-lg space-y-6 md:space-y-12">
                  <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-full flex justify-center items-center">
                    <svg className="h-5 sm:h-8 w-5 sm:w-8" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.81579 5.50781C4.40339 5.50781 0 9.91114 0 15.3236C6.25002e-05 18.6427 1.69463 21.745 4.4577 23.5491V23.9584H8.86941V19.066C7.6409 18.6663 6.75015 17.5109 6.75015 16.1507C6.75015 15.6282 7.17378 15.2046 7.69628 15.2046C8.21878 15.2046 8.64241 15.6282 8.64241 16.1507C8.64241 16.7975 9.16866 17.3239 9.81554 17.3239C10.4624 17.3239 10.9886 16.7976 10.9886 16.1507C10.9886 15.6282 11.4122 15.2046 11.9347 15.2046C12.4572 15.2046 12.8809 15.6282 12.8809 16.1507C12.8809 17.5109 11.9902 18.6663 10.7616 19.066V23.9584H15.1735V23.5492C17.9368 21.7451 19.6314 18.6428 19.6314 15.3236C19.6316 9.9112 15.2282 5.50781 9.81579 5.50781Z" fill="black"/>
                        <path d="M4.45781 25.8516V26.6424C4.45781 29.5968 6.86138 32.0003 9.81577 32.0003C12.7702 32.0003 15.1737 29.5967 15.1737 26.6424V25.8516H4.45781Z" fill="black"/>
                        <path d="M9.81644 0C9.29394 0 8.87032 0.423627 8.87032 0.946128V2.60707C8.87032 3.12957 9.29394 3.5532 9.81644 3.5532C10.3389 3.5532 10.7626 3.12957 10.7626 2.60707V0.946128C10.7626 0.423627 10.3389 0 9.81644 0Z" fill="black"/>
                        <path d="M7.15455 2.84919L6.5673 1.29543C6.38255 0.806682 5.83642 0.560244 5.3478 0.744932C4.85904 0.92962 4.61254 1.47562 4.79729 1.96444L5.38455 3.51819C5.52767 3.89688 5.88755 4.13007 6.26974 4.13007C6.38086 4.13007 6.49399 4.11032 6.60405 4.06869C7.0928 3.88401 7.3393 3.338 7.15455 2.84919Z" fill="black"/>
                        <path d="M14.2837 0.744949C13.7949 0.560198 13.249 0.806762 13.0642 1.29551L12.4769 2.84927C12.2923 3.33802 12.5388 3.88402 13.0275 4.06877C13.1376 4.1104 13.2507 4.13015 13.3618 4.13015C13.744 4.13015 14.104 3.8969 14.247 3.51821L14.8343 1.96445C15.019 1.47564 14.7725 0.9297 14.2837 0.744949Z" fill="black"/>
                    </svg>

                  </div>
                    <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">The Solution</h4>
                    <p className="text-subtitle-3 sm:text-subtitle-2 lg:text-headline-6 text-black">
                        Verifrica consolidates financial data from multiple sources and categorizes transaction data with typically 24 months of history, making it easy to use and analyze.
                    </p>
               </div>
          </div>
      </section>
    )
}

export default ProblemSolutionSection;