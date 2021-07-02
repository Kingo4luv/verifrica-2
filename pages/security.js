import Head from "next/head";
import Nav from "../components/nav";
import FooterSection from '../components/FooterSection';
import News from "../components/News";

export default function Security(){
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Security</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <News />
      <Nav theme="white" />
      <section className="max-w-[1100px] mx-auto py-10 lg:py-32 px-4">
          <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl lg:text-[48px] lg:leading-[71.04px] text-left md:text-center font-bold ">Customer trust and data security are critical to everything we do at Verifrica.</h1>
          </div>
      </section>
      <section className="max-w-[1100px] mx-auto mb-32 space-y-6 lg:space-y-10 px-4">
        <div className="space-y-3 lg:space-y-5">
            <h3 className="text-xl lg:text-2xl font-bold text-black">Data Encryption</h3>
            <p className="text-grey text-subtitle-3 lg:text-subtitle-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean phasellus enim habitant consectetur sagittis eget. Et leo pulvinar ipsum, sit aliquet velit quis. Sapien quam diam arcu, vestibulum. Ac, dictumst pharetra et pharetra amet.
                Auctor lorem tincidunt quisque orci, sit nam auctor integer. Quam ipsum interdum nec faucibus sit sollicitudin. Ut pharetra cursus vel est hendrerit proin. Suspendisse at sed nullam aliquam nec. Bibendum commodo, dolor facilisis sed feugiat a. Id amet leo vel, non quam enim, adipiscing eget netus. Malesuada sed ut integer et. Ornare ornare bibendum netus suspendisse laoreet augue. Integer laoreet urna nunc sed sed porttitor blandit bibendum suscipit. Mauris eget porttitor cras turpis. Pellentesque mattis amet, massa sodales quisque aliquet.
            </p>
        </div>
        <div className="space-y-3 lg:space-y-5">
            <h3 className="text-xl lg:text-2xl font-bold text-black">Transmission Security</h3>
            <p className="text-grey text-subtitle-3 lg:text-subtitle-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean phasellus enim habitant consectetur sagittis eget. Et leo pulvinar ipsum, sit aliquet velit quis. Sapien quam diam arcu, vestibulum. Ac, dictumst pharetra et pharetra amet.
                Auctor lorem tincidunt quisque orci, sit nam auctor integer. Quam ipsum interdum nec faucibus sit sollicitudin. Ut pharetra cursus vel est hendrerit proin. Suspendisse at sed nullam aliquam nec. Bibendum commodo, dolor facilisis sed feugiat a. Id amet leo vel, non quam enim, adipiscing eget netus. Malesuada sed ut integer et. Ornare ornare bibendum netus suspendisse laoreet augue. Integer laoreet urna nunc sed sed porttitor blandit bibendum suscipit. Mauris eget porttitor cras turpis. Pellentesque mattis amet, massa sodales quisque aliquet.
            </p>
        </div>
        <div className="space-y-3 lg:space-y-5">
            <h3 className="text-xl lg:text-2xl font-bold text-black">Logging</h3>
            <p className="text-grey text-subtitle-3 lg:text-subtitle-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean phasellus enim habitant consectetur sagittis eget. Et leo pulvinar ipsum, sit aliquet velit quis. Sapien quam diam arcu, vestibulum. Ac, dictumst pharetra et pharetra amet.
                Auctor lorem tincidunt quisque orci, sit nam auctor integer. Quam ipsum interdum nec faucibus sit sollicitudin. Ut pharetra cursus vel est hendrerit proin. Suspendisse at sed nullam aliquam nec. Bibendum commodo, dolor facilisis sed feugiat a. Id amet leo vel, non quam enim, adipiscing eget netus. Malesuada sed ut integer et. Ornare ornare bibendum netus suspendisse laoreet augue. Integer laoreet urna nunc sed sed porttitor blandit bibendum suscipit. Mauris eget porttitor cras turpis. Pellentesque mattis amet, massa sodales quisque aliquet.
            </p>
        </div>
        <div className="space-y-3 lg:space-y-5">
            <h3 className="text-xl lg:text-2xl font-bold text-black">Questions about Security?</h3>
            <p className="text-grey text-subtitle-3 lg:text-subtitle-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean phasellus enim habitant consectetur sagittis eget. Et leo pulvinar ipsum, sit aliquet velit quis. Sapien quam diam arcu, vestibulum. Ac, dictumst pharetra et pharetra amet.
                Auctor lorem tincidunt quisque orci, sit nam auctor integer. Quam ipsum interdum nec faucibus sit sollicitudin. Ut pharetra cursus vel est hendrerit proin. Suspendisse at sed nullam aliquam nec. Bibendum commodo, dolor facilisis sed feugiat a. Id amet leo vel, non quam enim, adipiscing eget netus. Malesuada sed ut integer et. Ornare ornare bibendum netus suspendisse laoreet augue. Integer laoreet urna nunc sed sed porttitor blandit bibendum suscipit. Mauris eget porttitor cras turpis. Pellentesque mattis amet, massa sodales quisque aliquet.
            </p>
        </div>
      </section>
      <FooterSection />
    </div>
    )
}