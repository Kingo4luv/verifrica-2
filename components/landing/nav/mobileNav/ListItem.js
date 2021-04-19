import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import Slide from 'react-reveal/Slide';

const MobileNavList = ({link}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleLink = () => {
        setIsOpen(!isOpen);
    }
    return (
        <li onClick={toggleLink}>
          <div className="flex justify-between px-4">  
            <span>{link.name}</span>
            {link.hasDropdown && <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />): (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />) }
                </svg>
            </span>}
            </div>
            <Transition
            show={isOpen}
            enter = "transition ease-in-out duration-1000 delay-500 transform"
            enterFrom="opacity-0"
            enterTo="opacity-1"
            leave = "transition ease-in-out duration-500 transform"
            leaveFrom = "translate-x-0"
            leaveTo = "-translate-x-full"
            >
            {link.hasDropdown && (
            <Slide top cascade>    
            <ul className="bg-white border-l border-card-blue w-full space-y-5 text-hair px-4 mt-2 py-4 text-sm font-light">
                {link.dropdownItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link href="/" >
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </Slide>
            )}
            </Transition>
        </li>
    )
}

export default MobileNavList;