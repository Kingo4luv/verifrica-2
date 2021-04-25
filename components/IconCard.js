import Link from "next/link";

const IconCard = ({item : {icon, title, description}}) => {
    return(
        <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 sm:pb-20 rounded-lg" >
              <img src={icon} />
              <dl className="space-y-3 pr-0 md:pr-12">
                <dt className="text-base md:text-lg text-black font-bold">{title}</dt>
                <dd className="text-xs sm:text-sm text-grey"> {description}</dd>
              </dl>
              {/* <Link href="/">
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span>
                    Learn more
                  </span>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link> */}
            </li>
    )
}



export default IconCard;