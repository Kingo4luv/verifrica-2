import Link from "next/link";
import Nav from "../nav"

const HeaderSection = ({heroContent:{title, description, image}}) => {
    return(
    <header className="w-full">
        <Nav theme="white" />
        <div className="w-full flex flex-col md:flex-row mx-auto">
            <div className="w-full md:w-1/2 flex justify-center items-center pt-4 pb-12 md:py-24 px-4">
                <div className="w-full max-w-xl space-y-2 sm:space-y-5 md:space-y-12">
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-4xl lg:text-head font-bold">
                         {title}
                        </h1>
                        <p className="text-black text-subtitle-3 sm:text-head-text">
                           {description}
                        </p>

                    </div>
                    <div className="flex space-x-4 md:space-x-12 w-full">
                        <div className="w-1/2 sm:w-auto">
                            <Link href="/" className="block">
                            <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 border border-hair rounded text-sm font-medium text-white w-full block sm:inline text-center tracking-wide mt-6 bg-hair">Try demo</a>
                        </Link>
                        </div>
                        <div className="w-1/2 sm:w-auto">
                            <Link href="/" className="block">
                            <a className="px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm font-medium text-black w-full block sm:inline text-center tracking-wide mt-6 border border-black">View Api docs</a>
                            </Link>
                        </div>
                        </div>
                    </div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={image} className="w-full h-96 md:h-full object-cover object-center"/>
            </div>
        </div>
      </header>
    )
}

export default HeaderSection;