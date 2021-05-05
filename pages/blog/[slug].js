import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';

import Share from '../../components/blog/details/share';
import BlogCard from '../../components/blog/card';
import { HeaderSection } from '../../components/blog/details/Header';
import { PostContent } from '../../components/blog/details/Content';
import { RelatedPost } from '../../components/blog/details/Related';

const posts = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-1.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-2.png",
        tag:{
            name: "Research & Testing",
            color: "#0ACE5C"
        }
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-3.png",
        tag:{
            name: "Customer Stories",
            color: "#2460FB"
        }
    },
]

const PostDetails = () => {
    return(
     <div className="Blog">
        <Head>
            <title>Verifrica | Blog Details</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Nav theme="black" />
        <Share />
        <HeaderSection />
        <PostContent />
        <RelatedPost posts={posts} />
        <FooterSection />
    </div>
    )
}

export default PostDetails;