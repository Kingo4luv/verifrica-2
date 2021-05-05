import BlogCard from "../card"

export function RelatedPost({posts}){
    return(
        <section className="max-w-[1100px] mx-auto mt-12 mb-32 space-y-6 lg:space-y-12 px-4">
            <h2 className="text-lg lg:text-2xl text-black">Related stories</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
                {posts.map((post) => {
                    return(
                    <BlogCard post={post} key={post.id} />
                    )
                })}
            </ul>
        </section>
    )
}