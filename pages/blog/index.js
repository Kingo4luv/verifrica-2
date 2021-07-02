import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import { BlogHero } from '../../components/blog/Hero';
import { BlogPost } from '../../components/blog/Post';
import { fetchAPI } from "../../libs/api";
import News from '../../components/News';

export default function Blog({tags, posts}) {
  return (
    <div className="Blog">
      <Head>
        <title>Verifrica | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <News />
      <Nav theme="black" />
      <BlogHero />
      <BlogPost posts={posts} tags={tags}/>
      <FooterSection />
    </div>
  )
}


export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, tags] = await Promise.all([
    fetchAPI("/posts"),
    fetchAPI("/tags"),
  ]);

  return {
    props: { posts, tags },
    revalidate: 1,
  };
}

