import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import Nav from '../../components/nav';
import Image from "next/image"
import BlogCard from '../../components/blog/card';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, 
    LinkedinShareButton, LinkedinIcon,  WhatsappShareButton, WhatsappIcon, } from 'next-share'
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
        <div className="fixed top-1/4 right-5 lg:right-32 py-2 flex flex-col items-center space-y-4 z-10">
            <FacebookShareButton
            url={'https://github.com/next-share'}
            quote={'next-share is a social share buttons for your next React apps.'}
            hashtag={'#nextshare'}
            >
            <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton
            url={'https://github.com/next-share'}
            title={'next-share is a social share buttons for your next React apps.'}
            >
            <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={'https://github.com/next-share'}>
             <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <WhatsappShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
                separator=":: "
                >
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
        <section className="header mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 px-4 flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 py-4 lg:py-12">
                <div className="space-x-6">
                    <span className="px-4 py-2 leading-loose bg-blue text-white text-sm rounded">Design</span>
                    <span className="text-sm text-grey">Apr 13,2021- 5 minutes read</span>
                </div>
                <div className="max-w-md mt-6 lg:mt-12 text-black">
                    <p className="text-lg lg:text-headline-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim senectus sed sem egestas sem sit ullamcorper. Elementum ornare proin.</p>
                </div>
                <div className="mt-12 space-y-4 text-black">
                    <p className="text-sm"><span className="font-bold text-lg">. </span> Author</p>
                    <div className="flex space-x-6 items-center">
                        <img src="/assets/img/cto.png" className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-gray-100"/>
                        <div className="">
                            <p className="font-bold">Abubakar Adamu</p>
                            <p className="text-sm">CTO at Verifrica</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-72 lg:h-100 relative rounded-md mb-12 md:mb-0">
                <Image
                    src="/assets/img/blog-9.png"
                    alt="details"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
        </section>
        <section className="mx-auto my-6 lg:my-12 pb-6 max-w-[1100px] text-black px-4 text-base lg:text-[18px] leading-[30.24px] space-y-3 border-b">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nullam facilisi condimentum magnis dapibus rutrum volutpat interdum, vivamus est venenatis libero tincidunt pellentesque. Tellus iaculis nulla habitasse netus lectus sociis maecenas tempus, risus molestie eros justo nostra faucibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit eget suspendisse ut dui porta ultrices, penatibus cubilia suscipit neque conubia. Eros semper conubia bibendum posuere mattis porta torquent per curabitur consequat ornare imperdiet, nisi tristique luctus fringilla enim rutrum nascetur est sollicitudin urna. Hac augue vehicula magnis fusce dis, purus eget varius quis, natoque felis mus dignissim. Dapibus risus at elementum ultrices viverra, laoreet facilisis tempus ligula tortor, morbi cum aliquet interdum. Platea posuere molestie ut semper lobortis, justo habitasse nisl pellentesque, ultricies ridiculus risus hendrerit.</p>
        </section>
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
        <FooterSection />
    </div>
    )
}

export default PostDetails;