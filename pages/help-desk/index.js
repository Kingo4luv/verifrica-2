import Head from 'next/head';
import FooterSection from '../../components/FooterSection';
import { SupportHero } from '../../components/help-desk/Hero';
import { SupportPost } from '../../components/help-desk/Post';
import Nav from '../../components/nav';



const posts = [
    {
        id: 1,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-1.png",
    },
    {
        id: 2,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-2.png",
    },
    {
        id: 3,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-3.png",
    },
    {
        id: 4,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-4.png",
    },
    {
        id: 5,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-5.png",
    },
    {
        id: 6,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-6.png",
    },
    {
        id: 7,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-7.png",
    },
    {
        id: 8,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-8.png",
    },
    {
        id: 8,
        title: "Getting started with Verifrica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor volutpat bibendum sit iaculis. Tempus in nisi.",
        image: "/assets/img/support-9.png",
    },
]

export default function HelpDesk() {
  return (
    <div className="Blog">
      <Head>
        <title>Verifrica | Help Desk</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="black" />
      <SupportHero title={true} />
      <SupportPost posts={posts} />
      <FooterSection />
    </div>
  )
}