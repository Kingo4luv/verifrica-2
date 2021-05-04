import Link from 'next/link';
const DropdownItem = ({item, totalItems}) => {
    return(
        <li className={`py-6 flex`}>
            <Link className="" href={item.url}>
                <a className="flex text-hair space-x-4 py-4 px-2 hover:bg-gray-50 rounded">
                    <div className="flex-none">
                        <img src={item.icon} className="w-8 h-8 " />
                    </div>
                    <div className="space-y-2">
                        <span className="font-medium text-black ">
                            {item.name}
                        </span>
                        <p className="text-grey text-sm">
                            {item.text}
                        </p>
                    </div>
                </a>
             </Link>
        </li>
    )
}

export default DropdownItem;