import Image from "next/image"
export function HeaderSection(){
    return(
        <section className="header mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 px-4 flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 py-4 lg:py-12">
                <div className="space-x-6">
                    <span className="px-4 py-2 leading-loose bg-blue text-white text-sm rounded">Design</span>
                    <span className="text-sm text-grey">Apr 13,2021- 5 minutes read</span>
                </div>
                <div className="max-w-md mt-6 lg:mt-12 text-black">
                    <p className="text-lg lg:text-headline-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim senectus sed sem egestas sem sit ullamcorper. Elementum ornare proin.</p>
                </div>
                <div className="mt-12 space-y-4 text-black">
                    <p className="text-sm"><span className="font-bold text-lg">. </span> Author</p>
                    <div className="flex space-x-6 items-center">
                        <img src="/assets/img/cto.png" className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-gray-100"/>
                        <div className="">
                            <p className="font-bold">Abubakar Adamu</p>
                            <p className="text-sm">CTO at Verifrica</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-72 lg:h-100 relative rounded-md mb-12 md:mb-0">
                <Image
                    src="/assets/img/blog-9.png"
                    alt="details"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </section>
    )
}