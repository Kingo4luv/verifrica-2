import Disclosure from "../disclosure"
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
const items = [{
        color: "bg-yellow",
        title: "Integrate Verifrica"
    },
    {
        color: "bg-light-blue",
        title: "Receive Verifrica Token"
    },
    {
        color: "bg-toggle-green",
        title: "Start making API calls"
    },

]
const HowItWorks = () => {
    return(
        <section className="py-12 md:py-24 bg-client-grey mt-12">
        <div className="w-full md:w-10/12 xl:w-4/5 flex flex-col md:flex-row mx-auto px-4 md:px-0">
          <div className="w-full md:w-1/2 space-y-5">
            <Slide bottom>  
            <h5 className="text-grey text-sm sm:text-base">How it works</h5>
            </Slide>
            <Slide bottom>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight  md:leading-snug">
              Introducing the future of <br className="hidden lg:block"/> financial payment in Africa
            </h3>
            </Slide>
            <Slide bottom>
            <p className="text-sm sm:text-base">
              Paying bills or sending money to someone ? Verifrica <br className="hidden lg:block"/> provides tools that enable you to perform these services <br className="hidden lg:block"/>with ease using a token system.
            </p>
            </Slide>
            <div className="w-full md:w-100 lg:w-full xl:w-100 space-y-1 sm:space-y-4">
              {items.map((item, index) => {
                return(
                  <Disclosure item={item} key={index} />
                )
              })}
            </div>
          </div>
          <div className="w-1/2 py-2 hidden justify-center items-center md:flex">
             <Zoom> 
             <img src="/assets/img/mobile-1.png" className="w-full md:w-4/5 lg:w-10/12 xl:w-auto" alt="phone"/>
             </Zoom>
          </div>
        </div>
      </section>
    )
}

export default HowItWorks;