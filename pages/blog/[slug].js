import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import { fetchAPI } from "../../libs/api";

import Share from '../../components/blog/details/share';
import BlogCard from '../../components/blog/card';
import { HeaderSection } from '../../components/blog/details/Header';
import { PostContent } from '../../components/blog/details/Content';
import { RelatedPost } from '../../components/blog/details/Related';


const PostDetails = ({posts, post}) => {
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
        <HeaderSection post={post} />
        <PostContent post={post} />
        <RelatedPost posts={posts} />
        <FooterSection />
    </div>
    )
}

export async function getStaticPaths() {
    const posts = await fetchAPI(`/posts`);

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
  const posts = await fetchAPI(`/posts?slug=${params.slug}`)
  const relatedPost = await fetchAPI(`/posts`);

  return {
    props: { post: posts[0], posts: relatedPost },
    revalidate: 1,
  };
}

export default PostDetails;