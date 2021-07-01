import Head from "next/head";
import Nav from "../components/nav";
import TestApiIcon from '../public/assets/svgs/test-api.svg';
import LauncApiIcon from '../public/assets/svgs/launch.svg';
import ScaleApiIcon from '../public/assets/svgs/scale.svg';
import FooterSection from '../components/FooterSection';
import Hero from "../components/pricing/hero";
import PricingDetails from "../components/pricing/details";
import Contact from "../components/pricing/contact";

const pricingList = [
    {
        icon: TestApiIcon,
        type: "Test API",
        title: "Free",
        description: "Build and test using our core set of products with up to 100 live items",
        btnText : "Get Started",
        products: [
            {
                name: "Transactions",
                available: true
            },
            {
                name: "Authentication",
                available: true
            },
            {
                name: "Balance",
                available: true
            },
            {
                name: "Identity",
                available: false
            },
            {
                name: "Assets",
                available: false
            },
            {
                name: "Payment Initiations",
                available: false
            },
        ]
    },
    {
        icon: LauncApiIcon,
        type: "Launch",
        title: "Pay as you go",
        description: "Build and test using our core set of products with up to 100 live items",
        btnText: "Get API keys",
        products: [
            {
                name: "Transactions",
                available: true
            },
            {
                name: "Authentication",
                available: true
            },
            {
                name: "Balance",
                available: true
            },
            {
                name: "Identity",
                available: true
            },
            {
                name: "Assets",
                available: false
            },
            {
                name: "Payment Initiations",
                available: false
            },
        ]
    },
    {
        icon: ScaleApiIcon,
        type: "Scale",
        title: "N100,000 per month",
        description: "Build and test using our core set of products with up to 100 live items",
        btnText: "Get started now",
        products: [
            {
                name: "Transactions",
                available: true
            },
            {
                name: "Authentication",
                available: true
            },
            {
                name: "Balance",
                available: true
            },
            {
                name: "Identity",
                available: true
            },
            {
                name: "Assets",
                available: true
            },
            {
                name: "Payment Initiations",
                available: true
            },
        ]
    },
]
export default function Pricing() {
  return (
    <div className="Home">
      <Head>
        <title>Verifrica | Pricing</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="white" />
      <Hero pricingList={pricingList} />
      <PricingDetails />
      <Contact />
      <FooterSection />
    </div>
  )
}