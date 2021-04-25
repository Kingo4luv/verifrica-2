import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
const CareerTeamSection = () => {
    return(
        <section className="pt-12 pb-32 md:py-32 bg-yellow px-4 mb-0 md:mb-32 mt-24 md:mt-0 relative">
        <div className="w-full md:w-5/6 mx-auto flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 h-auto lg:h-104 mt-10 md:mt-0">
                <img src="/assets/img/team.jpg" className="rounded h-full w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full md:w-4/5 space-y-3 md:space-y-6">
                    <h2 className="text-2xl lg:text-5xl font-bold leading-snug">
                        We’re growing,  <br className="hidden md:block" /> fast. <br className="block md:hidden" /> Join us!
                    </h2>
                    <p className="text-sm lg:text-xl">
                        Across our offices, teams at Verifrica come together with a shared purpose.We believe everyone
                        deserves to work in a welcoming, respectful, and empathetic culture, and we work hard to
                        make sure everyone at Verifrica has the support they need to thrive.
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute left-0 w-full py-6 flex justify-center items-center px-4">
            <div className="w-full md:w-4/6 xl:w-2/6 bg-white py-6 md:py-12 px-4 lg:px-12 rounded text-center space-y-6 md:space-y-12 text-black" style={{boxShadow:"0px 0px 20px rgba(215, 215, 215, 0.25)"}}>
                <Slide bottom>
                <p className="text-base lg:text-xl font-bold  md:font-normal">
                    “I am very proud to be a part of the Verifrica team, it is a very welcoming and positive atmosphere.”
                </p>
                </Slide>
                <Slide bottom>
                <p className="text-sm lg:text-base">
                    Trojan, Engineering at Verifrica
                </p>
                </Slide>
            </div>
        </div>
      </section>
    )
}

export default CareerTeamSection;