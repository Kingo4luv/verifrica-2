import { useState } from "react";
import LinkButton from "../button/LinkButton";
import useWindowDimensions from '../../hooks/useWindowDimension';

const PricingCard = ({list}) => {
    const { width } = useWindowDimensions();
    const [openDetails, setOpenDetails] = useState(width < 768 ? false : true);

    const toggleOpenDetails = () => {
        setOpenDetails(!openDetails);
    }

    return(
        <div className="bg-white shadow-drop-down-shadow rounded-lg py-6">
            <div className="pricing-card-header space-y-8 px-6">
                <div className="space-y-4">
                    <img src={list.icon} />
                    <h4 className="font-bold">{list.type}</h4>
                    <h3 className="font-bold text-xl md:text-2xl">{list.title}</h3>
                    <p className="text-sm font-light pr-6 md:pr-24">{list.description}</p>
                </div>
                <div className="w-full">
                    <LinkButton text={list.btnText} color="primary" />
                </div>

                <button className="md:hidden text-sm font-bold flex items-center space-x-1 focus:outline-none" onClick={toggleOpenDetails}>
                    <span>
                        {openDetails ? 'Hide details' : 'See details'}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {openDetails ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />)}
                        </svg>
                    </span>
                </button>
            </div>
            {openDetails && 
            <div className="pricing-card-footer border-t border-[#D1D1D1] mt-12 px-6 py-6 space-y-5">
                <h3 className="font-bold text-lg">Products</h3>
                <ul className="space-y-4">
                    {list.products.map((product, i) => {
                        return(
                            <li className={`flex space-x-3 items-center ${product.available ? 'text-black' : 'text-form-text-grey'}`} key={i}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${product.available ? 'text-[#00ACE6]' : 'text-form-text-grey'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className={`${product.available ? '' : 'line-through'}`}>{product.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default PricingCard;