import Image from "next/image"
import Link from "next/link"
import dayjs from 'dayjs';
const BlogCard = ({post}) => {
    return(
        <li className="w-full">
            <Link href={`/blog/${post.slug}`}>
                <a className="space-y-3">
                  <div className="h-52 rounded-md relative">
                    <Image
                        src={post.image.formats.thumbnail.url}
                        alt={post.tile}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        />
                    </div>
                    <span className={`px-4 py-1 inline-block rounded text-sm leading-relaxed`} style={{border: `1px solid ${post.tags[0].color}`, color: `${post.tags[0].color}` }}>
                        {post.tags[0].name}
                    </span>
                    <h4 className="text-subtitle-2 lg:text-subtitle-1 font-bold text-black">
                        {post.title}
                    </h4>
                    <p className="text-sm text-black">{post.author.name} - {dayjs(post.created_at).format('MMMM D, YYYY')}</p>
                </a>
            </Link>
        </li>
    )
}

export default BlogCard;