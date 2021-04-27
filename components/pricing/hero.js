import PricingCard from "./card";

const Hero = ({pricingList}) => {
    return(
    <section className="hero w-full">
        <div className="max-w-screen-xl mx-auto py-12 lg:py-32 text-black">
            <h1 className="text-center font-bold text-2xl md:text-head">Simple, transparent pricing.</h1>
            <p className="text-center text-sm md:text-xl mt-2">No setup cost. Cancel at any time.</p>
            <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 lg:mt-32 px-4 ">
                {pricingList.map((list, i) => {
                    return(
                        <PricingCard list={list} key={i} />
                    )
                })}
            </div>
        </div>
      </section>
    )
}

export default Hero;