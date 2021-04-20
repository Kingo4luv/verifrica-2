import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
const Culture = () => {
    return (
        <section className="py-12 md:py-32 bg-white w-full">
        <div className="flex flex-col sm:flex-row w-full md:w-5/6 mx-auto h-auto sm:h-100 px-4 sm:px-6 md:px-0 space-x-0 sm:space-x-4">
            <div className="w-full md:w-3/5 lg:w-1/2 h-full space-y-4 pr-0 sm:pr-6 lg:pr-6 xl:pr-32">
                <Slide bottom>
                <div className="text-black inline-block px-3 rounded text-sm py-2 bg-yellow font-medium">Our Values</div>
                </Slide>
                <Slide bottom>
                <h3 className="font-bold text-4xl">Our Culture</h3>
                </Slide>
                <Slide bottom>
                <p className="text-grey leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id sodales etiam id accumsan ipsum arcu imperdiet. Egestas congue sed est donec mi. Commodo nulla quam nisi venenatis tellus est arcu diam tortor. Morbi congue elit pellentesque consectetur condimentum volutpat morbi. Odio vitae bibendum eget id. Nunc, et, morbi ipsum, nisl ac eget. Velit eget vulputate viverra vulputate. Tempus, viverra nam pellentesque integer. Pellentesque libero, vitae vitae non vitae non montes, scelerisque. Quisque arcu aliquam massa netus porttit.
                </p>
                </Slide>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 h-full mt-12 sm:mt-0 relative">
                <Zoom>
                <img src="/assets/img/team.jpg" className="w-full h-full object-cover rounded-lg" />
                </Zoom>
            </div>
        </div>
      </section>
    )
}

export default Culture;