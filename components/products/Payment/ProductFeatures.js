import IconCard from "../../IconCard"

const ProductFeatures = ({items}) => {
    return(
        <section className="mt-10 pb-0 md:pb-32">
          <div className="w-full md:w-5/6 mx-auto px-4 md:px-0">
            <h5 className="text-grey text-base">Product Features</h5>
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-6 mt-12 md:mt-24">
                 {items.map((item, index) => {
                     return(
                         <IconCard item={item} key={index}/>
                     )
                 })}
              </ul>
        </div>
      </section>
    )
}

export default ProductFeatures;