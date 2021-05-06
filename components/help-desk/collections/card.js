import Link from "next/link";

export function CollectionsCard(){
    return(
        <Link href={`/help-desk/collections/${"Getting started with Verifrica".split(" ").join("-")}`}>
            <a>
                <div className="py-6 space-y-4 w-full bg-white shadow-box-shadow rounded-md px-4 md:px-6 mb-4">
                    <h3 className="font-bold text-sm lg:text-base text-black">Getting started with Verifrica</h3>
                    <p className="text-grey text-subtitle-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, imperdiet faucibus viverra congue maecenas. Pulvinar cras nibh feugiat nunc velit donec. Egestas libero commodo pharetra bibendum nam vel.</p>
                    <div className="flex space-x-3 items-center text-black">
                        <div className="h-8 w-8 rounded-full flex-none bg-gray-100">
                            <img src="/assets/img/support-8.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs">5 articles in this collection</p>
                            <p className="text-xs"><span className="text-grey">Written by</span> Wole Majek</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}