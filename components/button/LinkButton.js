import Link from "next/link";

const theme = {
    dark: "border border-hair text-white bg-hair",
    primary: "border border-blue text-white bg-blue",
    'primary-bordered': "border border-blue text-blue bg-white",
    secondary: "border border-black text-black",
    yellow: 'bg-yellow text-hair',
    white: 'bg-white text-black'
}

const LinkButton = ({text, url, color, textColor}) => {
    return(
        <Link href={url} className="">
            <a className={`py-[13px] lg:py-4 rounded text-sm font-medium w-full block text-center tracking-wide ${textColor ? 'text-hair': ''} ${theme[color]}`}>{text}</a>
        </Link>
    )
}

export default LinkButton;