import ReactMarkdown from "react-markdown";
export function PostContent({post}){
    return(
        <section className="mx-auto my-6 lg:my-12 max-w-[1100px]"
        >
        <div className="prose-lg border-b max-w-none pb-4 text-black px-4 text-base lg:text-[18px] leading-[30.24px]">
            <ReactMarkdown children={post.body}/>
        </div>
        </section>
    )
}