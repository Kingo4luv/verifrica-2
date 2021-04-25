import Link from 'next/link';
import Pulse from 'react-reveal/Pulse';
const DropdownItem = ({item, totalItems}) => {
    return(
        <Pulse>
        <li className={`py-6 flex`}>
            <Link className="" href={item.url}>
                <a className="flex text-hair space-x-4 p-4 hover:bg-gray-50 rounded">
                    <div className="flex-none">
                        <img src={item.icon} className="w-8 h-8 " />
                    </div>
                    <div className="space-y-2">
                        <span className="font-medium text-black text-sm ">
                            {item.name}
                        </span>
                        <p className="text-grey text-xs">
                            {item.text}
                        </p>
                    </div>
                </a>
             </Link>
        </li>
        </Pulse>
    )
}

export default DropdownItem;