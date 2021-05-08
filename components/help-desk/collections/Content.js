import Link from "next/link";
import { CollectionsCard } from "./card";

export function CollectionsContent(){
    return(
        <section className="py-12 mx-auto max-w-[900px] px-2">
         <div className="flex items-center space-x-1 text-sm text-black">
             <Link href="/help-desk">
                <a>
                   All Collections
                </a>
             </Link>
             <span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
             </span>
             <span className="text-grey">Getting started with Verifrica</span>
         </div>
         <div className="rounded-md mt-12 bg-light-shade-blue pt-0 pb-12 lg:pt-12 lg:pb-24 px-2 md:px-4 lg:px-10">
             <div className="py-8 space-y-4 max-w-xs px-2 md:px-0">
                    <h3 className="font-bold text-sm lg:text-base text-black">Getting started with Verifrica</h3>
                    <p className="text-grey text-subtitle-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.</p>
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
                <div className="body space-y-4 max-w-4xl">
                    <CollectionsCard />
                    <CollectionsCard />
                    <CollectionsCard />
                    <CollectionsCard />
                    <CollectionsCard />
                    <CollectionsCard />
                </div>
         </div>
      </section>
    )
}