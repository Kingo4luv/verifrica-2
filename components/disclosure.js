import { motion, AnimatePresence} from "framer-motion";
import { useState } from "react";


const Disclosure = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return(
        <AnimatePresence>
        <motion.div className = {
            `disclosure px-2 py-4 rounded ${isOpen ? item.color  : 'md:hover:bg-white' }`
        } 
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.3}}
        exit={{ opacity: 0 }}
        >
            <button className={`header focus:outline-none flex space-x-4 items-center w-full `} onClick={toggleIsOpen}>
                <span className={`h-10 w-10 sm:h-12 sm:w-12 rounded ${isOpen ? 'bg-white' : item.color}`}></span>
                <span className="text-black font-medium text-sm sm:text-base">{item.title}</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />)}
                </svg>
                </span>
            </button>
                {isOpen && 
                <div className="pr-0 pl-0 md:px-10 py-2"
                >
                    <p className="body pl-2 md:pl-6 text-sm md:text-base">
                     {item.description}
                    </p>
                </div>}
        </motion.div>
      </AnimatePresence>
    )
}

export default Disclosure;