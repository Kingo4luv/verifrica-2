const Culture = () => {
    return (
        <section className="py-12 md:py-32 bg-white w-full">
        <div className="flex flex-col sm:flex-row w-full max-w-screen-xl mx-auto h-auto sm:h-100 px-4 space-x-0 sm:space-x-4">
            <div className="w-full md:w-1/2 h-full space-y-4 pr-0 sm:pr-6 lg:pr-6 xl:pr-32">
                <div className="text-black inline-block px-3 rounded text-sm py-2 bg-yellow font-medium">Our Values</div>
                <h3 className="font-bold text-4xl">Our Culture</h3>
                <p className="text-grey text-subtitle-3 md:text-subtitle-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id sodales etiam id accumsan ipsum arcu imperdiet. Egestas congue sed est donec mi. Commodo nulla quam nisi venenatis tellus est arcu diam tortor. Morbi congue elit pellentesque consectetur condimentum volutpat morbi. Odio vitae bibendum eget id. Nunc, et, morbi ipsum, nisl ac eget. Velit eget vulputate viverra vulputate. Tempus, viverra nam pellentesque integer. Pellentesque libero, vitae vitae non vitae non montes, scelerisque. Quisque arcu aliquam massa netus porttit.
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