import Head from "next/head";
import Nav from "../components/nav";
import FooterSection from '../components/FooterSection';

export default function Privacy(){
    return(
    <div className="Home">
      <Head>
        <title>Verifrica | Privacy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav theme="white" />
      <section className="max-w-screen-xl mx-auto py-2 lg:py-32 px-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4">
              <ul className="text-black space-y-0 text-sm lg:text-base lg:space-y-5 space-x-5 lg:space-x-0 w-full px-0 lg:px-6 py-12 bg-white lg:bg-light-shade-blue rounded flex flex-row lg:flex-col flex-nowrap whitespace-nowrap overflow-x-auto scrolling-wrapper">
                  <li className="font-bold border-b-[3px] pb-1 border-blue lg:border-none">Data Privacy</li>
                  <li>Protection & Cookie Policy</li>
                  <li>Acceptable Use Policy</li>
                  <li>Terms of Use</li>
                  <li>Terms of Service</li>
              </ul>
          </div>
          <div className="w-full lg:w-3/4 ml-0 lg:ml-32">
              <section className="w-full mb-32 space-y-6 lg:space-y-11">
                <h2 className="text-2xl lg:text-5xl font-bold text-black">Legal & Privacy</h2>
                <div className="space-y-3 lg:space-y-5">
                    <h3 className="text-xl lg:text-2xl font-bold text-black">Introduction</h3>
                    <p className="text-grey text-subtitle-3 lg:text-subtitle-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean phasellus enim habitant consectetur sagittis eget. Et leo pulvinar ipsum, sit aliquet velit quis. Sapien quam diam arcu, vestibulum. Ac, dictumst pharetra et pharetra amet.
                        Auctor lorem tincidunt quisque orci, sit nam auctor integer. Quam ipsum interdum nec faucibus sit sollicitudin. Ut pharetra cursus vel est hendrerit proin. Suspendisse at sed nullam aliquam nec. Bibendum commodo, dolor facilisis sed feugiat a. Id amet leo vel, non quam enim, adipiscing eget netus. Malesuada sed ut integer et. Ornare ornare bibendum netus suspendisse laoreet augue. Integer laoreet urna nunc sed sed porttitor blandit bibendum suscipit. Mauris eget porttitor cras turpis. Pellentesque mattis amet, massa sodales quisque aliquet.
                    </p>
                </div>
                <div className="space-y-3 lg:space-y-5">
                    <h3 className="text-xl lg:text-2xl font-bold text-black">Definitions</h3>
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
          </div>
      </section>
      
      <FooterSection />
    </div>
    )
}