import IconCard from "../IconCard";

const ProductFeatureSection = ({items}) => {
    return(
        <section className="py-12 md:py-40  w-full">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row">
              <div className="w-full max-w-lg px-4  relative space-y-2 md:pl-5 md:pr-3">
                  <h4 className="text-2xl lg:text-4xl font-medium leading-snug relative z-10 mt-0 md:mt-14">
                        Products & Benefits
                   </h4>
                   <p className="text-subtitle-3 sm:text-subtitle-2 text-grey max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra enim viverra cras urna pretium. Nunc aliquet pretium, integer nulla nunc nisi viverravitae, in. </p>
              </div>
              <ul className="w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-6 mt-12 md:mt-0">
                 {items.map((item , index) => {
                     return(
                         <IconCard item={item} key={index}/>
                     )
                 })}
              </ul>
          </div>
      </section>
    )
}

export default ProductFeatureSection;