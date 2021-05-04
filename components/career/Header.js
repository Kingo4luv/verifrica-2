import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import Nav from '../nav';
const CareerHeaderSection = () => {
    return(
        <header className="w-full">
        <Nav theme={'white'}/>
        <div className="flex w-full flex-col py-12 lg:py-32 my-4 px-4 lg:px-0">
            <div className="flex justify-between w-full lg:hidden mb-12 px-0 md:px-52">
                <div className="w-20 h-20">
                    <Zoom>  
                    <img src="/assets/img/team-top-left.png" className="w-full h-full object-cover object-center" />
                    </Zoom>
                </div>
                <div className="flex items-center">
                    <span>
                    <svg width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.3363 2.43016L44.2363 2.41016C44.2563 2.42016 44.2863 2.42016 44.3163 2.43016H44.3363Z" fill="black"/>
                    <path d="M44.126 2.38086C44.146 2.38086 44.156 2.39086 44.176 2.39086L44.126 2.38086Z" fill="black"/>
                    <path d="M44.2163 2.40062L44.1763 2.39062L44.1963 2.40062H44.2163Z" fill="black"/>
                    <path d="M80.6761 8.03086C80.6161 8.40086 82.1961 11.1309 83.0261 12.2609C81.9561 12.1909 80.9161 12.0809 79.8861 11.9609C73.1761 11.1209 67.0061 9.28086 61.2561 7.45086C55.5061 5.61086 50.1261 3.77086 45.0061 2.44086C39.8861 1.10086 35.0361 0.250863 30.5361 0.0508632C26.0461 -0.159137 21.9261 0.290861 18.3961 1.22086C11.2661 3.04086 6.60609 6.56086 4.05609 9.26086C2.79609 10.6509 1.96609 11.8109 1.48609 12.6409C1.01609 13.4709 0.816092 13.9209 0.876092 13.9709C0.976092 14.0409 1.1261 14.0009 1.4761 13.6409C1.6461 13.4609 1.8661 13.2009 2.1561 12.8309C2.4461 12.4709 2.8661 12.0309 3.3461 11.4609C4.3761 10.3709 5.8861 8.80086 8.4361 7.09086C9.7061 6.23086 11.2461 5.35086 13.1161 4.55086C14.9761 3.74086 17.1661 2.99086 19.7061 2.45086C22.8861 1.75086 26.0961 1.47086 29.2761 1.58086C32.4561 1.65086 35.5761 2.05086 38.5861 2.63086C44.6161 3.77086 50.2161 5.58086 55.3461 7.23086C60.4761 8.90086 65.1661 10.4209 69.3061 11.4709C73.4361 12.5509 76.9861 13.1709 79.7061 13.4709C81.6561 13.6809 82.2961 13.6909 82.8561 13.7209C81.9461 14.7509 80.1461 16.6909 80.0161 17.2109C81.9661 16.5109 84.1261 14.4309 85.3461 13.0809C85.2461 12.9709 84.4961 12.0909 83.5561 10.9809C82.6361 9.91086 81.5761 8.69086 80.6761 8.03086Z" fill="black"/>
                    </svg>
                    </span>
                </div>
                <div className="w-20 h-20  lg:hidden block">
                    <Zoom>  
                    <img src="/assets/img/team-top-right.png" className="w-full h-full object-cover object-center" />
                    </Zoom>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="w-full h-20 lg:h-40 lg:flex justify-center items-center hidden">
                    <div className="w-20 lg:w-40 h-full rounded-full">
                    <Zoom>  
                    <img src="/assets/img/team-top-left.png" className="w-full h-full object-cover object-center" />
                    </Zoom>
                    </div>
                </div>
                <div className="w-full md:w-2/4 lg:w-full mx-auto space-y-12 lg:space-y-5">
                    <div className="space-y-3 lg:space-y-6">
                        <Slide bottom>
                        <h2 className="text-2xl lg:text-6xl font-bold text-black text-center">Career at Verifrica</h2>
                        </Slide>
                        <Slide bottom>
                            <p className="text-center text-sm lg:text-xl text-black">Help us build thefuture of financial services</p>
                        </Slide>
                    </div>
                    <Slide bottom>
                    <div className="flex justify-between w-full lg:hidden">
                        <div className="w-20 h-20">
                            <Zoom>  
                                <img src="/assets/img/team-bottom-left.png" className="w-full h-full object-cover object-center" />
                            </Zoom>
                        </div>
                        <div className="flex items-center">
                            <span>
                                <svg width="85" height="18" viewBox="0 0 85 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.4706 14.7808L43.3706 14.8008C43.3906 14.7908 43.4206 14.7908 43.4506 14.7808H43.4706Z" fill="black"/>
                                <path d="M43.2603 14.8301C43.2803 14.8301 43.2902 14.8201 43.3102 14.8201L43.2603 14.8301Z" fill="black"/>
                                <path d="M43.3506 14.8103L43.3105 14.8203L43.3306 14.8103H43.3506Z" fill="black"/>
                                <path d="M79.8104 9.18007C79.7504 8.81007 81.3304 6.08008 82.1604 4.95008C81.0904 5.02007 80.0504 5.13007 79.0204 5.25007C72.3104 6.09007 66.1404 7.93007 60.3904 9.76007C54.6404 11.6001 49.2604 13.4401 44.1404 14.7701C39.0204 16.1101 34.1704 16.9601 29.6704 17.1601C25.1804 17.3701 21.0604 16.9201 17.5304 15.9901C10.4004 14.1701 5.74037 10.6501 3.19037 7.95008C1.93037 6.56007 1.10037 5.40007 0.62037 4.57007C0.15037 3.74007 -0.0496307 3.29008 0.0103693 3.24008C0.110369 3.17008 0.260375 3.21007 0.610375 3.57007C0.780375 3.75007 1.00038 4.01008 1.29038 4.38008C1.58038 4.74008 2.00038 5.18007 2.48038 5.75007C3.51038 6.84007 5.02037 8.41007 7.57037 10.1201C8.84037 10.9801 10.3804 11.8601 12.2504 12.6601C14.1104 13.4701 16.3004 14.2201 18.8404 14.7601C22.0204 15.4601 25.2304 15.7401 28.4104 15.6301C31.5904 15.5601 34.7104 15.1601 37.7204 14.5801C43.7504 13.4401 49.3504 11.6301 54.4804 9.98007C59.6104 8.31007 64.3004 6.79008 68.4404 5.74008C72.5704 4.66008 76.1204 4.04008 78.8404 3.74008C80.7904 3.53008 81.4304 3.52008 81.9904 3.49008C81.0804 2.46008 79.2804 0.520075 79.1504 7.43866e-05C81.1004 0.700075 83.2604 2.78008 84.4804 4.13008C84.3804 4.24008 83.6304 5.12007 82.6904 6.23007C81.7704 7.30007 80.7104 8.52007 79.8104 9.18007Z" fill="black"/>
                                </svg>
                            </span>
                        </div>
                        <div className="w-20 h-20 ">
                            <Zoom>  
                                <img src="/assets/img/team-bottom-right.png" className="w-full h-full object-cover object-center" />
                            </Zoom>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center items-center w-full px-6 sm:px-0">
                        <a href="#positions" className="w-full sm:w-auto px-0 sm:px-24 py-4 bg-hair rounded text-center text-sm font-medium text-white tracking-wide mt-6">View open positions</a>
                    </div>
                    </Slide>
                </div>
                <div className="w-full h-20 lg:h-40 lg:flex justify-center items-center hidden">
                    <div className="w-20 lg:w-40 h-full rounded-full">
                    <Zoom>  
                    <img src="/assets/img/team-top-right.png" className="w-full h-full object-cover object-center" />
                    </Zoom>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between w-full relative -top-16 hidden">
                <div className="w-full h-20 lg:h-32 flex justify-center items-center">
                    <Slide bottom>
                    <div className="w-20 lg:w-32 h-full rounded-full">
                    <svg width="129" height="138" viewBox="0 0 129 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M107.066 123.49C106.792 123.725 105.968 125.039 105.438 126.746C104.869 128.453 104.712 130.611 104.85 131.925C103.673 131.219 102.672 130.277 101.731 129.316C101.495 129.08 101.299 128.806 101.083 128.551L100.769 128.158L100.593 127.943C100.397 127.707 100.24 127.433 100.063 127.197C98.6901 125.177 97.6701 122.901 97.0227 120.567C95.6888 115.839 95.9242 110.916 97.3562 106.326C98.7294 101.716 101.044 97.4983 103.692 93.5751C109.008 85.7286 115.639 79.059 120.719 71.4087C123.25 67.6032 125.447 63.5622 126.8 59.2663C128.154 54.9703 128.683 50.5174 128.468 46.2018C128.016 37.5315 124.839 29.5477 120.327 23.0743C115.874 16.5225 109.989 11.383 103.653 7.8521C97.317 4.32118 90.6671 2.22224 84.2526 1.10411C77.8185 -0.053248 71.6197 -0.170937 65.8133 0.162539C54.1809 0.907956 44.2551 3.83078 35.9966 6.83206C27.7382 9.87258 21.0687 13.07 15.7723 15.7378C10.4759 18.4056 6.53304 20.583 3.90446 22.0739C1.27589 23.5843 -0.0383795 24.4278 0.000853011 24.6044C0.197015 25.0555 1.49167 24.7417 9.67164 20.8577C13.7714 18.9549 19.5778 16.1105 28.052 12.6188C32.2892 10.8926 37.1932 9.00946 42.9604 7.30285C48.7276 5.59624 55.3382 4.02693 62.9297 3.35998C73.5617 2.37917 84.3114 3.30114 93.9626 6.83206C98.7686 8.57791 103.359 10.9319 107.341 13.9135C111.323 16.9148 114.756 20.5438 117.541 24.5455C123.112 32.5293 126.055 42.102 125.251 51.1451C124.544 60.2471 119.601 68.074 114.324 74.8808C108.989 81.7269 103.182 88.0629 99.004 95.1444C96.9051 98.6753 95.2181 102.363 94.1588 106.169C93.6684 108.071 93.2761 109.974 93.1191 111.936C93.0014 113.878 93.0014 115.781 93.2957 117.625C93.7468 121.312 95.0219 124.745 96.7481 127.727C97.1993 128.472 97.6897 129.179 98.1997 129.865L98.6509 130.395C98.9451 130.748 99.2198 131.101 99.5336 131.395C100.75 132.631 101.966 133.651 103.143 134.338C101.789 134.769 99.7494 135.122 97.827 135.299C95.9439 135.456 94.1784 135.495 93.7468 135.77C96.1008 137.025 99.0628 137.633 101.809 137.339C103.123 137.26 104.457 136.868 105.536 136.515C106.654 136.083 107.616 135.554 108.361 135.103C108.224 134.828 107.164 132.651 106.811 130.199C106.419 127.609 106.89 125 107.066 123.49Z" fill="#686666"/>
                        </svg>
                    </div>
                    </Slide>
                </div>
                <div className="w-full h-20 lg:h-32 flex justify-center items-center">
                    <Slide bottom>
                    <div className="w-20 lg:w-32 h-full rounded-full relative top-16">
                    <svg width="165" height="82" viewBox="0 0 165 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M146.087 10.3341C146.467 10.3341 147.929 9.59308 149.571 8.47155C151.093 7.39007 152.776 5.88802 153.777 4.86663C153.877 6.32862 154.138 7.75057 154.098 9.19253C154.098 10.0737 154.078 10.9549 154.078 11.8161C154.078 12.7974 153.897 13.7788 153.817 14.7601C153.737 15.7415 153.597 16.7228 153.377 17.6641C151.955 25.3746 148.35 32.3441 143.703 38.0319L141.841 40.0546C141.24 40.7356 140.599 41.3965 139.918 41.9773L137.915 43.7797L135.773 45.3619L134.711 46.163L133.57 46.8439L131.306 48.1857C130.525 48.5462 129.724 48.9067 128.943 49.2872C128.162 49.6678 127.381 50.0283 126.56 50.2486C120.091 52.5317 113.302 53.0524 106.873 52.6719C100.404 52.2513 94.2359 51.0096 88.3078 49.7479C82.3797 48.4661 76.692 47.1243 71.1644 46.1429C65.6569 45.1416 60.2696 44.5408 55.1426 44.5608C49.9955 44.5608 45.1289 45.2217 40.6628 46.3632C36.2167 47.5449 32.1712 49.127 28.5463 50.9095C24.9814 52.792 21.7169 54.7146 18.9532 56.8576C13.3655 61.0433 9.40012 65.4293 6.61632 69.2144C5.87531 70.1357 5.27452 71.0569 4.73378 71.9381C4.19304 72.8194 3.63226 73.6004 3.21168 74.3815C2.39056 75.9636 1.64956 77.2454 1.18894 78.3669C0.287706 80.59 -0.112844 81.7515 0.0273471 81.8517C0.247648 81.9718 0.54805 81.8316 1.20895 80.8904C1.52939 80.4297 1.94997 79.7488 2.47068 78.8276C3.01142 77.9063 3.8125 76.7647 4.71373 75.3027C6.69644 72.4588 9.60042 68.3533 14.8075 63.5868C17.4111 61.2035 20.5954 58.66 24.6009 56.2968C28.5863 53.9136 33.3528 51.6104 39.0406 49.9682C47.0114 47.5048 55.3228 47.2044 63.4338 48.2058C71.5449 49.1671 79.4557 51.1298 87.2864 52.8321C95.0971 54.5745 102.948 55.9563 110.698 56.0364C118.429 56.0565 126.079 54.5144 132.568 51.1498C138.997 47.7251 144.164 42.8585 147.989 37.6313C151.834 32.3842 154.398 26.6964 155.8 21.1689C156.08 19.767 156.361 18.4051 156.641 17.0633C156.841 15.7014 156.941 14.3596 157.082 13.0578C157.182 12.3969 157.122 11.756 157.142 11.1152V10.4342C157.142 9.99362 157.142 9.55303 157.142 9.13246C157.142 7.43013 156.841 5.92808 156.721 4.62631C157.943 5.4274 159.665 6.54892 161.147 7.53026C162.689 8.57168 163.951 9.51298 164.512 9.57306C163.691 7.47019 161.748 5.38735 159.966 3.72508C158.003 2.06282 155.86 0.82112 154.278 0C154.118 0.260355 152.676 2.28311 151.053 4.40601C149.291 6.56896 147.308 8.73192 146.087 10.3341Z" fill="#686666"/>
                    </svg>
                    </div>
                    </Slide>
                </div>
            </div>
            <div className="lg:flex justify-between relative w-2/4 mx-auto hidden">
                    <div className="w-full h-20 lg:h-40 flex justify-center items-center">
                        <div className="w-20 lg:w-40 h-full rounded-full">
                            <Zoom >
                            <img src="/assets/img/team-bottom-left.png" className="w-full h-full object-cover object-center" />
                            </Zoom>
                        </div>
                    </div>
                    <Slide bottom>
                    <div className="flex items-center">
                        <svg width="161" height="16" viewBox="0 0 161 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M147.096 5.26775C147.34 5.38775 148.822 5.64775 150.604 5.78775C152.33 5.91775 154.507 5.94775 155.745 5.86775C154.694 6.74775 153.437 7.51776 152.124 8.24776C147.603 10.6678 141.899 12.2778 136.083 13.2177C130.23 14.1377 124.264 14.4178 118.505 14.1378C106.967 13.6178 96.6483 11.4678 87.343 9.32775C78.0377 7.13775 69.539 4.88775 61.4156 3.23775C53.311 1.55775 45.5628 0.477753 38.4712 0.127753C31.3609 -0.232247 25.0385 0.207755 19.8043 0.957755C14.5888 1.75776 10.4802 2.87775 7.49723 4.00775C4.49551 5.13775 2.65696 6.25775 1.47503 7.01775C0.386906 7.81775 -0.0821106 8.25776 0.0116931 8.31776C0.199301 8.39776 0.480711 8.36775 1.21238 8.03775C1.92529 7.70775 3.06969 7.04775 5.33974 6.08775C7.62855 5.14775 11.043 3.82775 16.6712 2.80775C22.2432 1.78775 30.0664 0.997752 40.0471 1.72775C54.1552 2.75775 66.9876 6.13776 79.2384 9.13776C91.4891 12.1778 103.702 14.8678 115.784 15.6178C121.769 16.0178 127.697 15.9078 133.082 15.2778C138.466 14.6778 143.325 13.5878 147.452 12.2378C149.479 11.5278 151.392 10.8077 153.006 9.96775C153.4 9.75775 153.85 9.57775 154.206 9.35775L154.638 9.10775C154.919 8.93775 155.201 8.77775 155.463 8.61775C156.026 8.30775 156.42 7.95775 156.87 7.66775C157.302 7.36775 157.696 7.07775 157.996 6.77775C158.427 7.45775 158.859 8.42775 159.253 9.34775C159.666 10.2778 159.91 11.0578 160.266 11.2778C160.66 10.7278 160.866 10.0878 160.941 9.44775C161.054 8.80775 160.998 8.14776 160.829 7.49776C160.566 6.22776 159.722 5.03775 159.065 4.21775C158.765 4.25775 156.626 4.61775 154.113 4.83775C152.856 4.94775 151.561 5.04775 150.304 5.09775C149.103 5.13775 147.978 5.17775 147.096 5.26775Z" fill="#686666"/>
                        </svg>
                    </div>
                    </Slide>
                    <div className="w-full h-20 lg:h-40 flex justify-center items-center">
                        <div className="w-20 lg:w-40 h-full rounded-full">
                            <Zoom>
                            <img src="/assets/img/team-bottom-right.png" className="w-full h-full object-cover object-center" />
                            </Zoom>
                        </div>
                    </div>
                </div>
        </div>
      </header>
    )
}

export default CareerHeaderSection;