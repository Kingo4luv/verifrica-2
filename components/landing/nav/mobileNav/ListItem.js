import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import Pulse from 'react-reveal/Pulse';

const MobileNavList = ({link}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleLink = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Pulse>
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
            enter = "transition duration-100 ease-out"
            enterFrom = "transform scale-95 opacity-0"
            enterTo = "transform scale-100 opacity-100"
            leave = "transition duration-75 ease-out"
            leaveFrom = "transform scale-100 opacity-100"
            leaveTo = "transform scale-95 opacity-0"
            >
            {link.hasDropdown && (
            <ul className="bg-white w-full space-y-4 text-hair px-4 mt-2 py-2 text-sm font-light">
                {link.dropdownItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link href="/" >
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>)}
            </Transition>
        </li>
        </Pulse>
    )
}

export default MobileNavList;