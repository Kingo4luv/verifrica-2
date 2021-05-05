import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import LinkButton from '../../components/button/LinkButton';
import BlogCard from '../../components/blog/card';
import { BlogHero } from '../../components/blog/Hero';
import { BlogPost } from '../../components/blog/Post';


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
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-4.png",
        tag:{
            name: "Inside Verifrica",
            color: "#F59019"
        }
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-5.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-6.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-7.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-8.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
    {
        id: 9,
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        image: "/assets/img/blog-9.png",
        tag:{
            name: "Design",
            color: "#00ACE6"
        }
    },
]

export default function Blog() {
  return (
    <div className="Blog">
      <Head>
        <title>Verifrica | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="black" />
      <BlogHero />
      <BlogPost posts={posts}/>
      <FooterSection />
    </div>
  )
}