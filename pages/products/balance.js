import Head from "next/head";
import FooterSection from "../../components/FooterSection";
import RealTimeIcon from '../../public/assets/svgs/real-time.svg'
import OpenBankingIcon from '../../public/assets/svgs/open-banking.svg'
import HeaderSection from "../../components/products/Balance/HeaderSection";
import ProductFeatures from "../../components/products/Balance/ProductFeatures";
import HowItWorks from "../../components/products/Balance/HowItWorks";
import Disclosure from "../../components/disclosure";
import CodeComponent from "../../components/code";

const items = [
    {
        title: "Real-time data",
        icon: RealTimeIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
    {
        title: "Open Banking/PSD2 integrations",
        icon: OpenBankingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim, vel varius risus. Leo scelerisque mauris morbi eu viverra diam potenti. Orci odio consectetur fusce aliquet.'
    },
]

const Balance = () => {
    return(
    <div className="Balance">
      <Head>
        <title>Verifrica | Products - Balance</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderSection />
      <ProductFeatures items={items}/>
      <section className="py-12 md:py-24 bg-client-grey mt-12">
        <div className="w-full md:w-10/12 xl:w-4/5 flex flex-col md:flex-row mx-auto px-4 md:px-0">
          <div className="w-full md:w-1/2 space-y-5">
            <h5 className="text-grey text-sm sm:text-base">How it works</h5>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight  md:leading-snug">
              Introducing the future of <br className="hidden lg:block"/> financial payment in Africa
            </h3>
            <p className="text-sm sm:text-base">
              Paying bills or sending money to someone ? Verifrica <br className="hidden lg:block"/> provides tools that enable you to perform these services <br className="hidden lg:block"/>with ease using a token system.
            </p>
            <div className="w-full md:w-100 lg:w-full xl:w-100 space-y-1 sm:space-y-4">
              {items.map((item, index) => {
                return(
                  <Disclosure item={item} key={index} />
                )
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2 py-2 justify-center items-center flex">
             <CodeComponent />
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
    )
}

export default Balance;