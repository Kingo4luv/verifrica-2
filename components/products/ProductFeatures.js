import IconCard from "../IconCard";

const ProductFeatures = ({items}) => {
    return(
        <section className="my-12 lg:my-28">
          <div className="w-full max-w-screen-lg mx-auto">
            <h5 className="text-black font-bold text-base px-4">Product Features</h5>
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-12">
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