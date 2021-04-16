import DropdownItem from './item';

const NavLinkDropdown = ({items}) => {
    return (
        <div className="dropdown-content absolute left-0 top-16 w-full transition delay-500 duration-500 ease-in-out z-50">
            <ul className="bg-white  w-full py-12 px-6 lg:px-32 xl:px-60 grid grid-cols-3 gap-12 shadow-box-shadow">
                {items.map((item, index) => {
                    return(
                        <DropdownItem item={item} totalItems={items.length} key={index} />
                    )
                })}
            </ul>
        </div>
    )
}

export default NavLinkDropdown;