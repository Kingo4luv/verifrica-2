const Culture = () => {
    return (
        <section className="py-12 md:py-32 bg-white w-full">
        <div className="flex flex-col sm:flex-row w-full max-w-[1380px] mx-auto h-auto sm:h-100 px-4 space-x-0 sm:space-x-4">
            <div className="w-full md:w-1/2 h-full space-y-4 pr-0 sm:pr-6 lg:pr-6 xl:pr-32">
                <div className="text-black inline-block px-3 rounded text-sm py-2 bg-yellow font-medium">Our Values</div>
                <h3 className="font-bold text-4xl">Our Culture</h3>
                <p className="text-grey text-subtitle-3 md:text-subtitle-2">
                    Collaboration through teams and a plurality of thinking are essential to us.Outside of work, there is still a chance to learn from one another, whether it 's working remotely or co-worker'
                    s meetups.
                </p>
                <p className="text-grey text-subtitle-3 md:text-subtitle-2">
                    We all come from different backgrounds and have different talents, but we 're all excited about working together to create a more effective and equitable financial system.
                </p>
            </div>
            <div className="w-full md:w-1/2 h-full mt-12 sm:mt-0 relative">
                <img src="/assets/img/team.jpg" className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
      </section>
    )
}

export default Culture;