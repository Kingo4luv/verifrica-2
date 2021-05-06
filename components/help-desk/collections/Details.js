import Link from "next/link";

export function CollectionDetails(){
    return(
        <section className="py-12 mx-auto max-w-[900px] px-3">
         <div className="flex flex-wrap items-center space-x-0 md:space-x-1 text-sm text-black">
             <Link href="/help-desk/collections">
                <a>All Collections</a>
             </Link>
             <span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
             </span>
             <span className="text-grey">Getting started with Verifrica</span>
             <span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
             </span>
             <span className="text-grey mt-1 sm:mt-0">Getting started with Verifrica API</span>
         </div>
         <div className="rounded-md mt-2 lg:mt-12 pt-0 pb-12 lg:pt-12 lg:pb-24 px-2 md:px-4 lg:px-10">
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
                <div className="body space-y-3 max-w-4xl text-grey text-sm lg:text-[16px] leading-[30.24px]">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
                </div>
         </div>
      </section>
    )
}