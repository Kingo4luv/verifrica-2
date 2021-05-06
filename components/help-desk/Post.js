import { SupportCard } from "./card"

export function SupportPost({posts}){
    return(
        <section className="mx-auto max-w-[1100px] py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {posts.map(post => {
            return(
                <SupportCard post={post} key={post.id} />
            )
        })}
      </section>
    )
}