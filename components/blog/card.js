import Image from "next/image"
import Link from "next/link"
const BlogCard = ({post}) => {
    return(
        <li className="w-full">
            <Link href={`/blog/${post.title.split(" ").join("-")} `}>
                <a className="space-y-3">
                  <div className="h-52 rounded-md relative">
                    <Image
                        src={post.image}
                        alt={post.tile}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        />
                    </div>
                    <span className={`px-4 py-1 inline-block rounded text-sm leading-relaxed`} style={{border: `1px solid ${post.tag.color}`, color: `${post.tag.color}` }}>
                        {post.tag.name}
                    </span>
                    <h4 className="text-subtitle-2 lg:text-subtitle-1 font-bold text-black">
                        {post.title}
                    </h4>
                    <p className="text-sm text-black">Abubakar Adamu - Apr 13,2021</p>
                </a>
            </Link>
        </li>
    )
}

export default BlogCard;