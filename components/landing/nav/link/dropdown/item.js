import Link from 'next/link';
const DropdownItem = ({item, totalItems}) => {
    return(
        <li className={`py-6 flex ${totalItems > 3 ? 'flex-row space-x-5' : 'flex-col space-y-5'}`}>
            <div className="flex-none">
                <img src={item.icon} className="w-8 h-8 " />
            </div>
            <div className="space-y-3 arrow-link ">
                <Link className="" href="/">
                    <a className="flex text-hair items-center space-x-2">
                    <span className="font-medium text-sm text-black">
                        {item.name}
                    </span>
                    {totalItems > 3 && 
                     <div className="flex -space-x-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span className="second-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                     </div>
                    
                    }
                    </a>
                </Link>
                <p className="text-grey text-xs">
                    {item.text}
                </p>
            </div>
        </li>
    )
}

export default DropdownItem;