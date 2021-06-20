import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
const CareerTeamSection = () => {
    return(
        <section className="pt-12 pb-32 md:py-32 bg-yellow px-4 mb-0 md:mb-32 mt-24 md:mt-0 relative">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 h-auto lg:h-104 mt-10 md:mt-0">
                <img src="/assets/img/skew-center.jpeg" className="rounded h-full w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full md:w-4/5 space-y-3 md:space-y-6">
                    <h2 className="text-2xl lg:text-[34px] lg:leading-[50.32px] font-bold leading-snug">
                        We are growing fast excellent time to join Verifrica! 
                    </h2>
                    <p className="text-subtitle-3 lg:text-subtitle-2">
                        Across our offices, teams at Verifrica come together with a common goal.We believe everyone deserves to work in a supportive, compassionate, and empathetic environment and we work hard to ensure that everyone at Verifrica has the resources they need to succeed.
                    </p>
                    <p className="text-subtitle-3 lg:text-subtitle-2">
                        In every given day, we represent hundreds of thousands of end users.We have huge ambitions to achieve and difficult technological difficulties to overcome in order to provide them with the best possible experience.
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute left-0 w-full py-6 flex justify-center items-center px-4">
            <div className="w-full max-w-xl bg-white py-6 md:py-12 px-4 lg:px-12 rounded text-center space-y-6 md:space-y-12 text-black" style={{boxShadow:"0px 0px 20px rgba(215, 215, 215, 0.25)"}}>
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