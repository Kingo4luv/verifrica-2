import DropdownItem from './item';

const NavLinkDropdown = ({items}) => {
    return (
        <div className="dropdown-content absolute left-0 top-16 w-full transition delay-500 duration-500 ease-in-out z-50 bg-white shadow-box-shadow">
            <ul className="bg-white mx-auto max-w-screen-xl py-6 px-4 xl:px-0 grid grid-cols-3 gap-x-6">
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