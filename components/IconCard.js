const IconCard = ({item : {icon, title, description}}) => {
    return(
        <li className="space-y-4 pb-8 md:pb-20 rounded-lg">
            <img src={icon} />
            <dl className="space-y-3">
                <dt className="text-base md:text-lg text-black font-bold">{title}</dt>
                <dd className="text-sm text-grey">
                    {description}
                </dd>
            </dl>
        </li>
    )
}

export default IconCard;