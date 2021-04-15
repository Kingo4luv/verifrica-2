import NavLinkDropdown from "./dropdown"

const LinkItem = ({link}) => {
    return(
        <li className="nav-dropdown flex items-center cursor-pointer py-6">
            <span className="mr-2 text-sm lg:text-base">{link.name}</span>
            {link.hasDropdown && 
            (
             <>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                <NavLinkDropdown items={link.dropdownItems} />
             </>   
            )
            }
        </li>
    )
}

export default LinkItem;