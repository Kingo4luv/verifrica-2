const WhiteBlueSection = ({whiteBlue:{white, blue}}) => {
    return(
        <section className="flex flex-col md:flex-row mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 flex flex-col items-center py-12 md:py-32 px-4">
              <div className="w-full max-w-lg lg:max-w-md space-y-6 md:space-y-12 px-0 md:px-4 xl:px-0">
                  <div className="h-12 sm:h-16 w-12 sm:w-16 bg-yellow rounded-full flex justify-center items-center">
                    <img src={white.image} />
                  </div>
                    <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">{white.title}</h4>
                    <p className="text-subtitle-3 sm:text-subtitle-2 lg:text-headline-6 text-grey">
                        {white.details}
                    </p>
               </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center py-12 md:py-3 px-4" style={{backgroundColor:`${blue.color}`}}>
              <div className="w-full max-w-md space-y-6 md:space-y-12 mt-12 md:mt-28">
                  <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white rounded-full flex justify-center items-center">
                    <img src={blue.image} />
                  </div>
                    <h4 className="text-black text-2xl sm:text-2xl lg:text-4xl font-bold">{blue.title}</h4>
                    <p className="text-subtitle-3 sm:text-subtitle-2 lg:text-headline-6 text-black">
                        {blue.details}
                    </p>
               </div>
          </div>
      </section>
    )
}

export default WhiteBlueSection;