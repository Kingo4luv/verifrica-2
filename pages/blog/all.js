import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import LinkButton from '../../components/button/LinkButton';
import BlogCard from '../../components/blog/card';

const posts = [{
        id: 1,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-1.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-2.png",
        tag: {
            name: "Research & Testing",
            color: "#0ACE5C"
        }
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-3.png",
        tag: {
            name: "Customer Stories",
            color: "#2460FB"
        }
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-4.png",
        tag: {
            name: "Inside Verifrica",
            color: "#F59019"
        }
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-5.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-6.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-7.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-8.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-9.png",
        tag: {
            name: "Design",
            color: "#00ACE6"
        }
    },
]

const AllPost = () => {
    return(
        <div className="Blog">
            <Head>
                <title>Verifrica | All blog post</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Nav theme="black" />
            <section className="content mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 lg:py-32 px-4 space-y-12 lg:space-y-32">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl lg:text-[34px] text-black">50 Stories</h3>
                </div>
                <div className="content-post">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
                        {posts.map((post) => {
                            return(
                                <BlogCard post={post} key={post.id} />
                            )
                        })}
                    </ul>
                    <div className="w-full flex justify-center items-center my-16 lg:my-24">
                        <button className="bg-[#F5F5F5] font-bold text-sm focus:outline-none px-4 py-2 rounded text-black">Load more posts</button>
                    </div>
                </div>
            </section>
        <FooterSection />
        </div>
    )
}

export default AllPost