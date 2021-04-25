import Slide from 'react-reveal/Slide';
const BusinessVisionSection = () => {
    return(
        <>
        <section className="flex flex-col md:flex-row justify-center items-center w-full mt-0 mb-0 md:mt-12">
             <div className="w-full md:w-1/2 space-y-4 pt-20 pb-20 lg:pt-40 lg:pb-64 px-4 md:pl-10 xl:pl-32">
                <div className="h-12 sm:h-16 w-12 sm:w-16 bg-light-blue rounded-full flex justify-center items-center">
                    <svg className="h-5 sm:h-8 w-5 sm:w-8" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.8368 20.1024L31.6464 3.64C31.6448 3.6368 31.6448 3.6336 31.6432 3.6304L31.6416 3.6288C30.8256 1.4576 28.7184 0 26.4 0C24.0816 0 21.9744 1.4576 21.1568 3.6304C20.92 4.2608 20.8 4.9248 20.8 5.6V12.8H17.6V5.6C17.6 2.512 15.088 0 12 0C9.6816 0 7.5744 1.4576 6.7568 3.6304C6.7552 3.6336 6.7552 3.6368 6.7536 3.64L0.5632 20.0976C0.5632 20.0992 0.5616 20.0992 0.5616 20.0992C0.1888 21.0928 0 22.1344 0 23.2C0 28.0528 3.9488 32 8.8 32C13.6512 32 17.6 28.0528 17.6 23.2V22.4H20.8V23.2C20.8 28.0528 24.7488 32 29.6 32C34.4512 32 38.4 28.0528 38.4 23.2C38.4 22.1344 38.2112 21.0928 37.8368 20.1024ZM8.8 28.8C5.712 28.8 3.2 26.288 3.2 23.2C3.2 22.5216 3.32 21.8576 3.5568 21.2288C4.3728 19.0592 6.48 17.6 8.8 17.6C11.888 17.6 14.4 20.112 14.4 23.2C14.4 26.288 11.888 28.8 8.8 28.8ZM29.6 28.8C26.512 28.8 24 26.288 24 23.2C24 20.112 26.512 17.6 29.6 17.6C31.92 17.6 34.0272 19.0592 34.8432 21.2288C35.08 21.8576 35.2 22.5216 35.2 23.2C35.2 26.288 32.688 28.8 29.6 28.8Z" fill="#101010"/>
                    </svg>
                </div>
                <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">Our Vision</h4>
                <p className="text-sm sm:text-base lg:text-xl text-grey">
                    Lorem ipsum dolor sit amet, consectetur  <br className="hidden md:block"/> adipiscing elit. Ipsum risus arcu quis lectus.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-light-blue space-y-4 pt-20 pb-20 lg:pt-40 lg:pb-64 px-4 md:pl-10 xl:pl-32 mt-0 md:mt-6">
                  <div className="h-12 md:h-16 w-12 sm:w-16 bg-white rounded-full flex justify-center items-center">
                      <svg className="h-5 sm:h-8 w-5 sm:w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.625 11.375C3.55681 11.375 1.875 9.69319 1.875 7.625C1.875 5.55681 3.55681 3.875 5.625 3.875C7.69319 3.875 9.375 5.55681 9.375 7.625C9.375 9.69319 7.69319 11.375 5.625 11.375Z" fill="black"/>
                        <path d="M26.375 11.375C24.3068 11.375 22.625 9.69319 22.625 7.625C22.625 5.55681 24.3068 3.875 26.375 3.875C28.4432 3.875 30.125 5.55681 30.125 7.625C30.125 9.69319 28.4432 11.375 26.375 11.375Z" fill="black"/>
                        <path d="M16 9.375C13.4154 9.375 11.3125 7.27206 11.3125 4.6875C11.3125 2.10294 13.4154 0 16 0C18.5846 0 20.6875 2.10294 20.6875 4.6875C20.6875 7.27206 18.5846 9.375 16 9.375Z" fill="black"/>
                        <path d="M16.9375 9.4707V15.9385C16.9375 16.4566 16.5182 16.876 16 16.876C15.4818 16.876 15.0625 16.4566 15.0625 15.9385V9.4707C11.8906 9.93052 9.4375 12.6413 9.4375 15.9385V21.5635C9.4375 22.0816 9.85681 22.501 10.375 22.501H12.4753L13.1912 31.1422C13.2314 31.6274 13.6379 32.001 14.125 32.001H17.875C18.3621 32.001 18.7686 31.6274 18.8088 31.1422L19.5247 22.501H21.625C22.1432 22.501 22.5625 22.0816 22.5625 21.5635V15.9385C22.5625 12.6413 20.1094 9.93052 16.9375 9.4707Z" fill="black"/>
                        <path d="M7.5 21.6875V16.0625C7.5 14.6572 7.87813 13.3514 8.48819 12.1849C7.64638 11.6824 6.67462 11.375 5.625 11.375C2.52319 11.375 0 13.8982 0 17V21.6875C0 22.2057 0.419312 22.625 0.9375 22.625H1.96381L2.81706 31.1559C2.86469 31.6347 3.26844 32 3.75 32H7.5C7.98156 32 8.38531 31.6347 8.43294 31.1559L9.12588 24.2282C8.16869 23.779 7.5 22.8129 7.5 21.6875Z" fill="black"/>
                        <path d="M32 17C32 13.8982 29.4768 11.375 26.375 11.375C25.3254 11.375 24.3536 11.6824 23.5118 12.1849C24.1219 13.3514 24.5 14.6572 24.5 16.0625V21.6875C24.5 22.8129 23.8313 23.779 22.8741 24.2282L23.5671 31.1559C23.6147 31.6347 24.0185 32 24.5 32H28.25C28.7316 32 29.1353 31.6347 29.183 31.1559L30.0362 22.625H31.0625C31.5807 22.625 32 22.2057 32 21.6875V17Z" fill="black"/>
                      </svg>
                  </div>
                  <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">Our Business</h4>
                  <p className="text-sm sm:text-base lg:text-xl text-black">
                      Lorem ipsum dolor sit amet, consectetur <br className="hidden md:block" /> adipiscing elit. Et donec vel consectetur eros,<br className="hidden md:block" /> ultricies. Donec adipiscing morbi lacus leo nibh. 
                  </p>
              </div>
      </section>
      <section className="py-20 bg-hair text-white">
        <Slide bottom cascade>  
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-4/5 lg:w-3/5 mx-auto">
            <dl className="flex flex-col items-center justify-center space-y-3">
                <dt className="text-5xl sm:text-6xl font-bold non-italic sm:italic">2021</dt>
                <dd className="text-sm sm:text-base font-light text-gray-300 sm:text-white">Founded</dd>
            </dl>
            <dl className="flex flex-col items-center justify-center space-y-3 mt-10 sm:mt-0">
                <dt className="text-5xl sm:text-6xl font-bold non-italic sm:italic">10K</dt>
                <dd className="text-sm sm:text-base font-light text-gray-300 sm:text-white">Customers</dd>
            </dl>
            <dl className="flex flex-col items-center justify-center space-y-3 mt-10 sm:mt-0">
                <dt className="text-5xl sm:text-6xl font-bold non-italic sm:italic">$100<span className="text-2xl">m</span></dt>
                <dd className="text-sm sm:text-base font-light text-gray-300 sm:text-white">In Funding</dd>
            </dl>
            </div>
        </Slide>
      </section>
      </>
    )
}

export default BusinessVisionSection;