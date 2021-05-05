import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import LinkButton from '../../components/button/LinkButton';
import BlogCard from '../../components/blog/card';


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
      <section className="hero pt-16 pb-32 lg:py-52 bg-hair text-white relative">
          <div className="absolute inset-0 w-full h-full flex justify-center md:justify-between items-center">
              <img src="/assets/img/blog-header-left.png" className="hidden md:flex"/>
              <img src="/assets/img/blog-header-center.png" />
              <img src="/assets/img/blog-header-right.png" className="hidden md:flex" />
          </div>
          <h1 className="text-center text-2xl md:text-4xl lg:text-main-head font-bold leading-normal text-white mt-12">Welcome to Verifrica’s Blog</h1>
          <p className="mt-4 lg:mt-10 text-subtitle-3 lg:text-subtitle-1 text-white font-light text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </section>
      <section className="content mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 lg:py-32 px-4">
          <div className="flex justify-between items-center">
              <h3 className="text-2xl lg:text-[34px] text-black">Latest Stories</h3>
              <div className="md:w-1/5 lg:w-1/6 hidden md:block">
                  <LinkButton color="secondary" url="/blog/all" text="View All" />
              </div>
          </div>
          <div className="mt-6 lg:mt-12">
              <ul className="flex text-sm md:text-base space-x-4 md:space-x-12 text-black flex-nowrap overflow-x-auto whitespace-nowrap scrolling-wrapper">
                  <li className="border-b-[2px] border-blue">All</li>
                  <li>Research & Testing</li>
                  <li>Design & Product</li>
                  <li>Customer stories</li>
                  <li>Inside Verifrica</li>
              </ul>
          </div>
          <div className="mt-6 lg:mt-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
                  {posts.map((post) => {
                      return(
                        <BlogCard post={post} key={post.id} />
                      )
                  })}
              </ul>
              <div className="w-2/5 block md:hidden mt-12">
                  <LinkButton color="secondary" url="/blog/all" text="View All" />
              </div>
          </div>
      </section>
      <FooterSection />
    </div>
  )
}