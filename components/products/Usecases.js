import IconCard from "../IconCard";





const UseCases = ({usecases}) => {
    return (
        <section className="py-16  w-full">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row space-x-0 md:space-x-10 px-0 md:px-4">
              <div className="w-full md:w-2/5 px-4 md:px-0 relative space-y-2 max-w-lg mt-0 md:mt-8">
                  <h4 className="text-2xl lg:text-3xl font-medium leading-snug relative z-10">
                        Use Cases
                   </h4>
                   <p className="text-sm sm:text-base text-grey">{usecases.subtitle}</p>
              </div>
              <div className="w-full">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-12 md:mt-0">
                  {usecases.items.map((item, i) => {
                    return(
                      <IconCard item={item} key={i} />
                    )
                  })}
                </ul>
              </div>
          </div>
      </section>
    )
}

export default UseCases;