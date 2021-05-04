import { useState } from "react"

const series = [{
        title: "Initiate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis."
    },
    {
        title: "Select bank",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis."
    },
    {
        title: "Authenticate bank",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis."
    },
    {
        title: "Confirm bank payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis."
    },
]

const InitiatePaymentSection = () => {
    const [currentItem, setCurrentItem] = useState(series[0]);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const moveDown = () => {
        if (currentItemIndex === series.length - 1) {
            setCurrentItemIndex(0)
            setCurrentItem(series[0])
            return
        }
        setCurrentItemIndex(currentItemIndex + 1)
        setCurrentItem(series[currentItemIndex + 1])
    }
    const moveUp = () => {
        if(currentItemIndex === 0){
            setCurrentItemIndex(series.length - 1)
            setCurrentItem(series[series.length - 1])
            return
        }
        setCurrentItemIndex(currentItemIndex - 1)
        setCurrentItem(series[currentItemIndex - 1])
    }
    const selectCurrentItem = (index) => {
        setCurrentItem(series[index])
         setCurrentItemIndex(index)
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if(touchStart - touchEnd > 150){
            moveDown()
        }
        if(touchStart - touchEnd < -150){
            moveUp()
        }
    }

    return(
        <section className="bg-footer-black py-24 px-4 xl:px-0" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
        <div className="w-full md:max-w-screen-sm lg:max-w-screen-lg mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex space-x-0 lg:space-x-6">
                <div className="w-full lg:w-7/12 hidden lg:flex flex-col justify-center items-center">
                    <div className="space-y-12 flex flex-col items-end">
                        <button className="mr-8 focus:outline-none" onClick={moveUp}>
                            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M16.1023 7.79726L8.43701 0.132462C8.2604 -0.0441539 7.9741 -0.0441539 7.79749 0.132462L0.132462 7.79726C-0.0441539 7.97388 -0.0441539 8.26017 0.132462 8.43679L2.17451 10.4791C2.25931 10.5639 2.37419 10.6116 2.49427 10.6116C2.61413 10.6116 2.72923 10.5639 2.81403 10.4791L6.10076 7.19279V21.5477C6.10076 21.7974 6.30338 22 6.55304 22H9.68169C9.93135 22 10.134 21.7974 10.134 21.5477V7.19301L13.4202 10.4793C13.5898 10.6489 13.8902 10.6489 14.0598 10.4793L16.102 8.43701C16.1868 8.35221 16.2346 8.2371 16.2346 8.11725C16.2348 7.9974 16.1871 7.88206 16.1023 7.79726Z" fill="white"/>
                            </svg>
                        </button>
                        <ul className="text-gray-500 text-right space-y-6">
                            {series.map((item, i) => {
                               return(
                                    <li className={`text-xl font-bold hover:text-gray-300 ${currentItem.title === item.title ? "text-white": ""}`} key={i}>{item.title}</li>
                               )
                            })}
                        </ul>
                        <button className="mr-8 focus:outline-none" onClick={moveDown}>
                            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                <path d="M16.1023 14.2027L8.43701 21.8675C8.2604 22.0442 7.9741 22.0442 7.79749 21.8675L0.132462 14.2027C-0.0441539 14.0261 -0.0441539 13.7398 0.132462 13.5632L2.17451 11.5209C2.25931 11.4361 2.37419 11.3884 2.49427 11.3884C2.61413 11.3884 2.72923 11.4361 2.81403 11.5209L6.10076 14.8072V0.45228C6.10076 0.202621 6.30338 0 6.55304 0H9.68169C9.93135 0 10.134 0.202621 10.134 0.45228V14.807L13.4202 11.5207C13.5898 11.3511 13.8902 11.3511 14.0598 11.5207L16.102 13.563C16.1868 13.6478 16.2346 13.7629 16.2346 13.8828C16.2348 14.0026 16.1871 14.1179 16.1023 14.2027Z" fill="white"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                    <img src="/assets/img/mobile-1.png" className="w-4/5 sm:w-2/5 md:w-full lg:w-10/12 xl:w-auto" alt="phone"/>

                    <div className="flex items-center space-x-3 mt-5 lg:hidden">
                        {series.map((item, i) => {
                            return(
                                < span className = {
                                    `h-1 w-10 bg-white rounded ${currentItemIndex === i ? "bg-white": "bg-[#575757]"}`
                                }
                                onClick = {
                                    (() => selectCurrentItem(i))
                                }

                                key={i}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
                <dl className="w-full max-w-sm text-white space-y-4 text-center md:text-left">
                    <dt className="font-bold text-2xl md:text-3xl">{currentItem.title}</dt>
                    <dd className="text-gray-300 font-light text-subtitle-3 lg:text-subtitle-2 px-4 md:px-0">
                        {currentItem.description}
                    </dd>
                </dl>
            </div>
        </div>
      </section>
    )
}

export default InitiatePaymentSection;