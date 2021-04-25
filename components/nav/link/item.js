import Link from "next/link";
import NavLinkDropdown from "./dropdown"
import { useRouter } from "next/router";

const LinkItem = ({link, theme}) => {
    const router = useRouter();
    return(
        <li className={`nav-dropdown cursor-pointer py-4 px-2 xl:px-6 `}>
            < div className = {
                ` flex items-center py-1 hover:border-b-4 font-light ${theme === 'white' ? 'border-card-blue' : 'border-yellow'} transition ease-in-out delay-75  ${ (!link.url && link.dropdownItems.map((item) => item.url).includes(router.pathname)) || link.url === router.pathname ? theme === 'white' ? 'border-b-4 border-card-blue':'border-b-4 border-yellow': ''}`
                } >
                {link.url ? (<Link href={link.url}>
                <a><span className="mr-2 text-sm lg:text-base">{link.name}</span></a>
            </Link>):(
                <>
                    <span className={`mr-2 text-sm lg:text-base font-light `}>{link.name}</span>
                        {link.hasDropdown && 
                        (
                        <>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${theme === 'white' ? 'text-black': 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                            <NavLinkDropdown items={link.dropdownItems} />
                        </>   
                        )
                    }
                </>
            )}
            </div>
            
        </li>
    )
}

export default LinkItem;