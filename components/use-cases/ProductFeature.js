import IconCard from "../IconCard";

const ProductFeatureSection = ({items}) => {
    return(
        <section className="py-12 md:py-40  w-full">
          <div className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row">
              <div className="w-full lg:w-2/5 px-4  relative space-y-2 md:pl-5 md:pr-3">
                  <h4 className="text-2xl lg:text-2xl font-medium leading-snug relative z-10 mt-0 md:mt-14">
                        Products & Benefits
                   </h4>
                   <p className="text-subtitle-3 sm:text-subtitle-2 text-grey pr-0 lg:pr-16">Fermentum vel massa blandit metus nam odio amet rhoncus. Praesent. </p>
              </div>
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-12 md:mt-0">
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