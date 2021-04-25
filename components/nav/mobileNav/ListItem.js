import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import Slide from 'react-reveal/Slide';

const MobileNavList = ({link, theme}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleLink = () => {
        setIsOpen(!isOpen);
    }
    return (
        <li className="py-3" onClick={toggleLink}>
          <div className="flex justify-between px-4">
            {link.url ? (<Link href={link.url}>
                <a><span>{link.name}</span></a>
            </Link>):(
                <>
                 <span>{link.name}</span>
                    {link.hasDropdown && <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />): (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />) }
                        </svg>
                 </span>}
                </>
            )} 
            
            </div>
            <Transition
            show={isOpen}
            enter = "transition ease-in-out duration-300 transform"
            enterFrom = "-translate-x-full"
            enterTo = "translate-x-0"
            leave = "transition ease-in-out duration-500 transform"
            leaveFrom = "translate-x-0"
            leaveTo = "-translate-x-full"
            >
            {link.hasDropdown && (
            <Slide top cascade>    
            < ul className = {
                `w-full space-y-5 text-hair px-4 mt-2 py-4 text-sm font-light ${theme === 'white' ? 'bg-client-grey' : 'bg-white border-l border-card-blue'}`
            } >
                {link.dropdownItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link href={item.url} >
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