import Link from "next/link";

const IconCard = ({item : {icon, title, description, url}}) => {
    return(
        <li className="service-box space-y-4 sm:hover:card-shadow px-4 py-4 sm:pt-12 lg:pb-20 rounded-lg" >
              <img src={icon} />
              <dl className="space-y-3">
                <dt className="text-base text-black font-bold">{title}</dt>
                <dd className="text-subtitle-3 sm:text-subtitle-2 text-grey font-light"> {description}</dd>
              </dl>
              {url && <Link href={url}>
                <a className="flex text-sm text-black md:text-grey font-medium space-x-2 items-center">
                  <span className="no-underline lg:underline">
                    Learn more
                  </span>
                  <span className="block md:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-hair" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                  </span>
                </a>
              </Link>}
            </li>
    )
}



export default IconCard;