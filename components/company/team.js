import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
});



class TeamSection extends Component{

   render(){
       const self = this;
       const options = {
           center: true,
               margin: 50,
               dots: false,
               responsive: {
                   0: {
                       items: 2,
                       margin: 30,
                       loop: true
                   },
                   600: {
                       items: 3,
                       margin: 30,
                       loop: true
                   },
                   1000: {
                       items: 4,
                   },
                   1200: {
                       items: 5,
                   }
           },
           onInitialized: function () {
               self.carousel = this;
           }
       }
    return(
        <>
        <div className="sm:flex justify-center items-center space-x-12 mt-12 hidden">
            <button onClick={() => this.carousel.prev()}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="23.5" transform="matrix(-1 0 0 1 24 24)" fill="#FCE476" stroke="black"/>
                <path d="M19.9725 19.4907C19.5965 19.4907 19.2425 19.6367 18.9745 19.9047L15.1186 23.7605C15.0406 23.8385 15.0006 23.9425 15.0006 24.0445C15.0006 24.0545 15.0006 24.0645 15.0006 24.0725C14.9946 24.1825 15.0306 24.2985 15.1166 24.3845L18.9745 28.2404C19.2405 28.5063 19.5945 28.6523 19.9725 28.6523C20.3484 28.6523 20.7024 28.5063 20.9704 28.2404C21.2364 27.9744 21.3844 27.6204 21.3844 27.2424C21.3844 26.8664 21.2384 26.5124 20.9704 26.2444L20.1945 25.4725L31.6 25.4725C32.372 25.4725 33 24.8445 33 24.0725C33 23.3005 32.372 22.6726 31.6 22.6726L20.1945 22.6726L20.9684 21.8986C21.2344 21.6326 21.3824 21.2786 21.3824 20.9006C21.3824 20.5246 21.2364 20.1706 20.9684 19.9027C20.7004 19.6347 20.3485 19.4907 19.9725 19.4907Z" fill="#101010"/>
                </svg>
            </button>
            <button onClick={() => this.carousel.next()}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" fill="#FCE476" stroke="black"/>
                <path d="M32.4872 24.0735L28.672 27.8867L28.6719 27.8868C28.5004 28.0584 28.2738 28.1523 28.0275 28.1523C27.7843 28.1523 27.557 28.0591 27.3825 27.8862C27.21 27.7134 27.1156 27.4866 27.1156 27.2424C27.1156 26.9991 27.2088 26.7725 27.3828 26.5983C27.3829 26.5982 27.383 26.5981 27.3831 26.598L28.1582 25.8269L29.0171 24.9725L27.8055 24.9725L16.4 24.9725C15.9041 24.9725 15.5 24.5683 15.5 24.0725C15.5 23.5767 15.9041 23.1726 16.4 23.1726L27.8055 23.1726L29.0127 23.1726L28.1591 22.319L27.3851 21.545C27.2123 21.3722 27.1176 21.1451 27.1176 20.9006C27.1176 20.6572 27.2109 20.4304 27.3851 20.2562C27.5586 20.0827 27.7831 19.9907 28.0275 19.9907C28.2709 19.9907 28.4977 20.084 28.6719 20.2582L32.4872 24.0735Z" fill="#101010" stroke="black"/>
                </svg>
            </button>
        </div>
        <div className="w-full flex ">
            <div className="flex flex-nowrap space-x-7 mt-12 sm:mt-20 w-full pr-0 lg:pr-4 flex-none">
               <OwlCarousel className='owl-theme ' {...options}> 
                    <div className="overflow-hidden">
                        <img src="/assets/img/member-1.jpg" className="w-full h-full object-cover rounded-lg" />
                        <dl className="space-y-4 mt-4">
                            <dt className="text-2xl md:text-4xl font-bold italic">Tobi</dt>
                            <dd className="text-sm md:text-base text-black">Product Manager</dd>
                        </dl>
                    </div>
                    <div className="overflow-hidden">
                        <img src="/assets/img/member-2.jpg" className="w-full h-full object-cover rounded-lg" />
                        <dl className="space-y-4 mt-4">
                            <dt className="text-2xl md:text-4xl font-bold italic">Trojan</dt>
                            <dd className="text-sm md:text-base text-black">Engineering Intern</dd>
                        </dl>
                    </div>
                    <div className="overflow-hidden">
                        <img src="/assets/img/member-3.jpg" className="w-full h-full object-cover rounded-lg" />
                        <dl className="space-y-4 mt-4">
                            <dt className="text-2xl md:text-4xl font-bold italic">Femi</dt>
                            <dd className="text-sm md:text-base text-black">Product Designer</dd>
                        </dl>
                    </div>
                </OwlCarousel>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-12 sm:hidden">
            <button onClick={() => this.carousel.prev()}>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="23.5" transform="matrix(-1 0 0 1 24 24)" fill="#FCE476" stroke="black"/>
                <path d="M19.9725 19.4907C19.5965 19.4907 19.2425 19.6367 18.9745 19.9047L15.1186 23.7605C15.0406 23.8385 15.0006 23.9425 15.0006 24.0445C15.0006 24.0545 15.0006 24.0645 15.0006 24.0725C14.9946 24.1825 15.0306 24.2985 15.1166 24.3845L18.9745 28.2404C19.2405 28.5063 19.5945 28.6523 19.9725 28.6523C20.3484 28.6523 20.7024 28.5063 20.9704 28.2404C21.2364 27.9744 21.3844 27.6204 21.3844 27.2424C21.3844 26.8664 21.2384 26.5124 20.9704 26.2444L20.1945 25.4725L31.6 25.4725C32.372 25.4725 33 24.8445 33 24.0725C33 23.3005 32.372 22.6726 31.6 22.6726L20.1945 22.6726L20.9684 21.8986C21.2344 21.6326 21.3824 21.2786 21.3824 20.9006C21.3824 20.5246 21.2364 20.1706 20.9684 19.9027C20.7004 19.6347 20.3485 19.4907 19.9725 19.4907Z" fill="#101010"/>
                </svg>
            </button>
            <button onClick={() => this.carousel.next()}>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" fill="#FCE476" stroke="black"/>
                <path d="M32.4872 24.0735L28.672 27.8867L28.6719 27.8868C28.5004 28.0584 28.2738 28.1523 28.0275 28.1523C27.7843 28.1523 27.557 28.0591 27.3825 27.8862C27.21 27.7134 27.1156 27.4866 27.1156 27.2424C27.1156 26.9991 27.2088 26.7725 27.3828 26.5983C27.3829 26.5982 27.383 26.5981 27.3831 26.598L28.1582 25.8269L29.0171 24.9725L27.8055 24.9725L16.4 24.9725C15.9041 24.9725 15.5 24.5683 15.5 24.0725C15.5 23.5767 15.9041 23.1726 16.4 23.1726L27.8055 23.1726L29.0127 23.1726L28.1591 22.319L27.3851 21.545C27.2123 21.3722 27.1176 21.1451 27.1176 20.9006C27.1176 20.6572 27.2109 20.4304 27.3851 20.2562C27.5586 20.0827 27.7831 19.9907 28.0275 19.9907C28.2709 19.9907 28.4977 20.084 28.6719 20.2582L32.4872 24.0735Z" fill="#101010" stroke="black"/>
                </svg>
            </button>
        </div>
        </>
                    
    )
    }
}

export default TeamSection;