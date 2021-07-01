import Nav from '../nav';
import LinkButton from '../button/LinkButton';

const icon = {
  hidden: {
    pathLength: 0,
    stroke: "#FCE476"
  },
  visible: {
    pathLength: 1,
    stroke: "#FCE476"
  }
}
const HeaderComponent = () => {
    return(
      <>
        <div className="w-full py-2 md:py-3 bg-yellow text-center text-sm text-hair  px-6">
          <a href="/" className="border-b border-hair">Verifrica launches MyKey ( Digital identity verification App)</a>
        </div>
        <header className="bg-[#0295C5] w-full overflow-hidden">
          <Nav/>
          <div className="hero pt-8 lg:pt-16 flex flex-col justify-center items-center bg-center max-w-[1100px] mx-auto">
              <div className="mt-12 max-w-3xl mx-auto px-4" >
                <h1 className="text-left md:text-center text-[23px] leading-[32.68px] md:text-4xl lg:text-headline-3 font-bold text-white">
                  Connect financial accounts to apps you love in seconds.
                </h1>
                <p className="mt-6 text-white font-light text-left md:text-center max-w-xl mx-auto text-sm md:text-base">Verifrica provides a seamless and convenient way of connecting people's financial accounts to an app with easy and secure access</p>
                <div className="mt-12 flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-4 md:space-y-0 items-center justify-center">
                   <div className="w-full md:w-52">
                     <LinkButton color="yellow" url="/" text="Get Started" />
                   </div>
                  <div className="w-full md:w-52">
                     <LinkButton color="white" url="/contact-us" text="Contact sales" />
                  </div>
                </div>
              </div>
              <div className="mt-12 relative -bottom-10 md:-bottom-20 px-4">
               <img src="/assets/img/header-image.svg" />
              </div>
          </div>
      </header>
    </>
    )
}

export default HeaderComponent;