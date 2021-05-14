import Image from "next/image"
import dayjs from 'dayjs'
import {readingTime} from '../../../libs/helper';
export function HeaderSection({post}){
    
    return(
        <section className="header mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 px-4 flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 py-4 lg:py-12">
                <div className="space-x-6">
                    <span className="px-4 py-2 leading-loose bg-blue text-white text-sm rounded">{post.tags[0].name}</span>
                    <span className="text-sm text-grey">{dayjs(post.created_at).format('MMMM D, YYYY')} - {readingTime(post.body)}</span>
                </div>
                <div className="max-w-md mt-6 lg:mt-12 text-black">
                    <p className="text-lg lg:text-headline-5">{post.title}</p>
                </div>
                <div className="mt-12 space-y-4 text-black">
                    <p className="text-sm"><span className="font-bold text-lg">. </span> Author</p>
                    <div className="flex space-x-6 items-center">
                        <img src={post.author.avatar.formats.small.url} className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-gray-100"/>
                        <div className="">
                            <p className="font-bold">{post.author.name}</p>
                            <p className="text-sm">{post.author.position}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-72 lg:h-100 relative rounded-md mb-12 md:mb-0">
                <Image
                    src={post.image.url}
                    alt="details"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </section>
    )
}