import Link from "next/link";

const theme = {
    dark: "border border-hair text-white bg-hair",
    primary: "border border-blue text-white bg-blue",
    secondary: "border border-black text-black",
}

const LinkButton = ({text, url, color}) => {
    return(
        <Link href={url} className="block">
            <a className={`px-0 sm:px-8 lg:px-16 py-3 md:py-4 rounded text-sm font-medium w-full block text-center tracking-wide ${theme[color]}`}>{text}</a>
        </Link>
    )
}

export default LinkButton;