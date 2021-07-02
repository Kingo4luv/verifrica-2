import Head from "next/head";
import { useState } from "react";
import LinkButton from "../components/button/LinkButton";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection"
import Nav from "../components/nav"

const ContactUs = () => {
    const [successIsOpen, setSuccessIsOpen] = useState(false);
    const toggleSuccess = () => {
        setSuccessIsOpen(!successIsOpen);
    }
    return(
        <div className="contact-us">
            <Head>
                <title>Verifrica | Contact us</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Nav theme="white" />
            <main className="w-full">
                <section className="max-w-6xl py-12 mx-auto space-y-6 px-4">
                    {! successIsOpen ? (
                    <>
                    <header className="mx-auto max-w-lg">
                        <h1 className="font-bold text-center text-3xl">Contact Sales</h1>
                    </header>
                    <div className="w-full max-w-md mx-auto space-y-8 pb-24">
                        <ContactForm toggleSuccess={toggleSuccess} />
                        <p className="text-center text-grey text-subtitle-3 lg:text-subtitle-2">By submitting this form, I confirm that I have read and understood Verifrica's Privacy Statement.</p>
                    </div>
                    </>
                    ):
                    (
                    <div className="w-full max-w-md mx-auto space-y-8 flex flex-col justify-center items-center pb-24">
                       <span>
                           <svg width="289" height="282" viewBox="0 0 289 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M102.487 92.6495H174.26V0H102.487V92.6495Z" fill="#E6F9FF"/>
                                <g opacity="0.06">
                                <path opacity="0.06" d="M165.634 8.79894V83.9652H111.114V8.79894H165.634ZM174.26 0.172363H102.487V92.5918H174.26V0.172363Z" fill="#18A6E3"/>
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M55.6158 105.992L48.312 125.488L66.6579 121.635L64.645 106.797L55.6158 105.992Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M71.3164 97.9978L75.2271 102.886L72.3516 104.957L71.3164 97.9978Z" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M58.4913 89.6587C62.517 87.6458 68.2105 90.8089 71.2586 96.79C74.2491 102.771 73.444 109.27 69.4758 111.283C65.45 113.295 59.7565 110.132 56.7084 104.151C53.6604 98.1702 54.4655 91.6715 58.4913 89.6587Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M73.272 81.2627C76.5501 85.7485 75.975 91.6721 72.0642 94.5476C68.1535 97.4231 62.2875 96.1004 59.0669 91.6146C55.7888 87.1288 56.3639 81.2052 60.2746 78.3297C64.2428 75.5116 70.0514 76.8344 73.272 81.2627Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M69.8785 99.4358C70.2811 100.298 70.3386 101.104 69.936 101.276C69.5334 101.449 68.9008 100.931 68.4982 100.126C68.0957 99.2633 68.0382 98.4582 68.4407 98.2856C68.7858 98.1131 69.4759 98.6307 69.8785 99.4358Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M48.7146 91.7291C51.5901 89.1986 55.5583 88.9686 57.5712 91.269C59.5841 93.5694 58.9515 97.4801 56.0759 100.011C53.2004 102.541 49.2322 102.771 47.2193 100.471C45.1489 98.1703 45.8391 94.2595 48.7146 91.7291Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M55.8457 86.9559C59.1238 84.6555 63.6096 85.3456 65.9101 88.5662C68.2105 91.7868 67.3478 96.2726 64.0697 98.573C60.7916 100.873 56.3058 100.183 54.0054 96.9627C51.7625 93.7421 52.5676 89.2563 55.8457 86.9559Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M53.3725 86.3807C54.9253 85.0579 57.9158 86.0931 60.0437 88.6236C62.1716 91.154 62.6892 94.2596 61.1364 95.5823C59.5836 96.9051 56.5931 95.8699 54.4652 93.3394C52.3373 90.809 51.8197 87.6459 53.3725 86.3807Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M56.8235 94.1446C59.7566 94.5471 61.7694 97.7677 61.3093 101.333C60.8493 104.899 58.0312 107.487 55.0982 107.084C52.1652 106.682 50.1523 103.461 50.6124 99.8956C51.0725 96.33 53.8905 93.742 56.8235 94.1446Z" fill="black"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M56.364 100.644C58.1469 99.781 60.4473 100.816 61.54 102.944C62.6327 105.129 62.1151 107.602 60.3323 108.465C58.5494 109.328 56.249 108.35 55.1563 106.165C54.0636 103.979 54.5812 101.506 56.364 100.644Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M61.0791 201.632C61.0791 201.632 97.2532 217.505 126.066 208.821C160.112 198.526 163.16 191.855 181.851 195.133C222.396 202.207 237.061 208.073 237.061 208.073L258.743 172.474C258.743 172.474 232.691 153.15 176.503 139.52C145.792 132.159 86.9013 187.829 86.9013 187.829L61.0791 201.632Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M218.601 187.427L247.989 213.364L281.863 171.727L263.057 172.992L233.439 159.592L218.601 187.427Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M35.6605 167.643C35.6605 167.643 28.9317 194.903 49.4055 227.972C55.9042 238.496 63.9557 235.103 67.8089 235.39C71.6621 235.678 62.0003 167.988 62.0003 167.988C62.0003 167.988 35.6605 168.333 35.6605 167.643Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M73.9046 139.636C77.9878 128.536 56.4789 110.823 44.9192 129.341C34.6824 145.617 33.7622 171.324 33.7622 171.324C33.7622 171.324 55.3287 170.864 60.3896 165.688C67.3484 158.614 69.2462 152.288 73.9046 139.636Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M61.0791 196.111C61.0791 196.111 97.2532 211.984 126.066 203.3C160.112 193.005 163.218 176.5 181.219 182.423C231.425 199.044 233.381 202.494 233.381 202.494L255.062 166.895C255.062 166.895 232.633 147.629 176.445 134.057C145.85 126.638 86.9588 182.308 86.9588 182.308L61.0791 196.111Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M160.687 77.9268L151.773 83.1027L148.208 134.46L157.122 129.226L160.687 77.9268Z" fill="#18A6E3" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M159.077 132.274L157.467 129.514L113.011 155.393L114.622 158.211L159.077 132.274Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M47.1046 122.325C47.1046 122.325 31.1167 160.799 59.8144 198.526L112.034 167.816C112.034 167.816 79.5406 130.261 69.5912 119.622L47.1046 122.325Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M66.0825 131.986C54.868 128.248 46.8165 140.901 55.3856 160.914C64.8173 182.998 75.8593 193.523 88.2241 198.469C94.7803 201.114 106.052 197.376 116.404 176.902C121.58 166.665 121.465 158.844 125.318 151.253C126.124 149.642 134.117 147.917 136.303 139.29C137.626 133.999 129.402 136.702 120.2 139.29C102.544 144.236 100.704 169.771 95.3554 164.883C91.2721 161.144 89.4318 152.518 82.8181 145.041C77.5271 139.233 71.7761 133.884 66.0825 131.986Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M67.3484 129.686C55.8463 126.983 42.7914 132.447 47.3923 153.783C50.0953 166.435 60.6772 177.305 60.6772 177.305L88.2823 148.895C88.2247 148.952 76.8952 131.929 67.3484 129.686Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M44.7465 217.332C46.0117 215.089 45.2641 212.271 43.0212 211.006C40.7783 209.741 37.9603 210.489 36.695 212.731L1.6136 273.52C0.348364 275.763 1.096 278.581 3.33891 279.846C5.58182 281.112 8.39984 280.364 9.66507 278.121L44.7465 217.332Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M236.888 211.754C238.154 209.511 237.406 206.693 235.163 205.428C232.92 204.162 230.102 204.91 228.837 207.153L190.535 273.52C189.27 275.763 190.017 278.581 192.26 279.846C194.503 281.111 197.321 280.364 198.586 278.121L236.888 211.754Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M121.696 219.058C120.43 216.815 121.178 213.997 123.421 212.732C125.664 211.466 128.482 212.214 129.747 214.457L163.851 273.52C165.116 275.763 164.368 278.581 162.126 279.846C159.883 281.112 157.065 280.364 155.799 278.121L121.696 219.058Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M241.202 212.502C239.937 210.259 240.685 207.441 242.928 206.175C245.171 204.91 247.989 205.658 249.254 207.901L287.153 273.52C288.419 275.763 287.671 278.581 285.428 279.846C283.185 281.112 280.367 280.364 279.102 278.121L241.202 212.502Z" fill="white" stroke="black" strokeWidth="1.7999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.21464 163.042C5.86958 192.603 22.8352 217.965 49.8651 232.803C91.1002 255.404 136.361 249.021 155.224 238.266C178.746 224.924 173.57 194.328 135.671 202.322C72.2367 215.607 44.4016 182.999 42.5613 155.681C40.7785 128.421 6.50219 138.37 6.21464 163.042Z" fill="#18A6E3"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M287.843 223.141C287.843 211.754 278.584 202.552 267.255 202.552H207.386C195.999 202.552 186.797 211.811 186.797 223.141C186.797 234.528 196.057 243.73 207.386 243.73H267.255C278.642 243.73 287.843 234.528 287.843 223.141Z" fill="#18A6E3"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M34.9697 58.9481H90.5824V12.6521H34.9697V58.9481Z" fill="#E6F9FF"/>
                                <g opacity="0.04">
                                <path opacity="0.04" d="M235.048 46.3535H183.749V102.886H235.048V46.3535Z" fill="#18A6E3"/>
                                <path opacity="0.04" d="M234.014 47.3887V101.851H184.785V47.3887H234.014ZM236.084 45.3184H182.714V103.922H236.084V45.3184Z" fill="#18A6E3"/>
                                </g>
                                <g opacity="0.06">
                                <path opacity="0.06" d="M227.803 53.5999V95.6401H190.996V53.5999H227.803ZM236.084 45.3184H182.714V103.922H236.084V45.3184Z" fill="#18A6E3"/>
                                </g>
                                <path opacity="0.06" d="M81.9558 21.2787V50.3215H43.5963V21.2787H81.9558ZM90.5824 12.6521H34.9697V58.9481H90.5824V12.6521Z" fill="#E6F9FF"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M183.001 37.0943H249.944V0.402588H183.001V37.0943Z" fill="#E6F9FF"/>
                                <path opacity="0.06" d="M241.317 9.02917V28.4677H191.628V9.02917H241.317ZM249.944 0.402588H183.001V37.0943H250.001V0.402588H249.944Z" fill="#E6F9FF"/>
                            </svg>
                       </span>
                       <h3 className="text-black text-2xl font-bold">Thank you!</h3>
                       <p className="text-black font-thin text-center text-sm md:text-base max-w-sm">Your message has been sent, and a member of our team will be in touch soon</p>
                       <div className="flex flex-col md:flex-row justify-between w-full space-x-0 md:space-x-4">  
                            <div className="w-full md:w-1/2">
                            <LinkButton color="primary" url="/" text="Back to home" />
                            </div>
                            <div className="w-full md:w-1/2 mt-3 md:mt-0">
                            <LinkButton color="primary-bordered" url="/pricing" text="View pricing" />
                            </div>
                        </div>
                    </div>
                    )}
                </section>
            </main>
            <FooterSection />
        </div>
    )
}

export default ContactUs