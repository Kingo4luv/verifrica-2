import Link from "next/link";

export function  SupportCard({post}){
    return(
        <Link href="/help-desk/collections">
            <a>
                <div className="px-4 py-8 bg-white rounded-lg shadow-button-shadow space-y-6" key={post.id}>
                    <h3 className="font-bold text-sm lg:text-base text-black">{post.title}</h3>
                    <p className="text-grey text-subtitle-3">{post.description}</p>
                    <div className="flex space-x-3 items-center text-black">
                        <div className="h-8 w-8 rounded-full flex-none bg-gray-100">
                            <img src={post.image} className="w-full h-full object-cover" />
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