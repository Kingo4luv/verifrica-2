import { Transition } from "@headlessui/react";
import { useState } from "react";
import Slide from 'react-reveal/Slide';

const Disclosure = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return(
        <Slide bottom>
        < div className = {
            `disclosure px-2 py-4 rounded ${isOpen ? item.color  : 'md:hover:bg-white' }`
        } >
            <div type="button" className={`header focus:outline-none flex space-x-4 items-center w-full `} onClick={toggleIsOpen}>
                <span className={`h-10 w-10 sm:h-12 sm:w-12 rounded ${isOpen ? 'bg-white' : item.color}`}></span>
                <span className="text-black font-medium text-sm sm:text-base">{item.title}</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />)}
                </svg>
                </span>
            </div>
            <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            >
                {isOpen && 
                <div className="pr-0 pl-0 md:px-10 py-2">
                    <p className="body pl-2 md:pl-6 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor a felis, neque leo. Id volutpat feugiat imperdiet morbi pretium aliquam rhoncus lectus nisl. Volutpat placerat.
                    </p>
                </div>}
            </Transition>
        </div>
        </Slide>
    )
}

export default Disclosure;