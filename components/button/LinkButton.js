import Link from "next/link";

const theme = {
    dark: "border border-hair text-white bg-hair",
    primary: "border border-blue text-white bg-blue",
    secondary: "border border-black text-black",
}

const LinkButton = ({text, url, color, textColor}) => {
    return(
        <Link href={url} className="">
            <a className={`py-3 md:py-4 rounded text-sm font-medium w-full block text-center tracking-wide ${textColor ? 'text-hair': ''} ${theme[color]}`}>{text}</a>
        </Link>
    )
}

export default LinkButton;