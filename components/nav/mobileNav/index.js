import Link from "next/link"
import LinkButton from "../../button/LinkButton"
import MobileNavList from "./ListItem"

const links = [
    {
        name: 'Products',
        hasDropdown: true,
        dropdownItems: [{
                name: 'Transactions',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/transactions"
            },
            {
                name: 'Identity',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/identity"
            },
            {
                name: 'Authentication',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/authentication"
            },
            {
                name: 'Balance',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/balance"
            },
            {
                name: 'Assets',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/assets"
            },
            {
                name: 'Payment Initiations',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/payment-initiation"
            },
        ]
    }, {
        name: 'Use Cases',
        hasDropdown: true,
        dropdownItems: [{
                name: 'Personal Finances',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-cases/personal-finances"
            },
            {
                name: 'Consumer Payments',
                url: "/use-cases/consumers-payments"
            },
            {
                name: 'Lending',
                url: "/use-cases/lending"
            },
            {
                name: 'Banking',
                url: "/use-cases/banking"
            },
            {
                name: 'Wealth',
                url: "/use-cases/wealth"
            },
            {
                name: 'Business Finances',
                url: "/use-cases/business-finances"
            },
        ]
    }, {
        name: 'For Developers',
        hasDropdown: false,
        url: "/developers"
    },
    {
        name: 'Pricing',
        hasDropdown: false,
        url: "/pricing"
    }, {
        name: 'Company',
        hasDropdown: false,
        url: "/company"
    },
]
const MobileNav = ({toggleMobileNav, theme}) => {
    return(
        < div className = {
            `w-full min-h-screen max-h-sceeen h-screen fixed inset-0 z-50 block lg:hidden ${theme === 'white' || theme === "dark" || theme === 'black' ? 'bg-white' :'bg-card-blue'}`
        } >
            <div className={`flex justify-between px-4 lg:px-12 items-center h-16 ${theme === 'white' || theme === "dark" || theme === 'black' ? 'bg-white' :'bg-card-blue'}`}>
                <Link href="/">
                <a><div className="logo">
                {theme == 'white' || theme === "dark" || theme === 'black' ? (<svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.4377 25.6843L33.2331 0.0605528V0.0390625C32.454 1.19184 31.1348 1.95039 29.6399 1.95039H4.61888C2.22709 1.95039 0.285149 3.89233 0.285149 6.28426C0.285149 7.08002 0.500034 7.82592 0.875023 8.46719L10.8169 25.6843C11.5511 27.0351 12.9828 27.953 14.6273 27.953C16.2716 27.953 17.7035 27.0351 18.4377 25.6843Z" fill="#007499"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.85093 17.0864C5.4934 16.4564 5.28923 15.728 5.28923 14.9524C5.28923 12.5606 7.23111 10.6187 9.62298 10.6187H12.1251L8.42915 4.21989C7.69494 2.86896 6.26324 1.95117 4.61882 1.95117C2.22695 1.95117 0.285073 3.89305 0.285073 6.28492C0.285073 7.08065 0.500071 7.82665 0.87494 8.46793L5.85093 17.0864Z" fill="#007499"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.8224 17.021L12.1251 10.6172H9.61684C7.22497 10.6172 5.28922 12.5591 5.28922 14.9509C5.28922 15.7498 5.50579 16.4983 5.88343 17.1413L10.8168 25.6835C10.4831 25.0694 10.2935 24.3659 10.2935 23.6184C10.2935 21.2266 12.2354 19.2847 14.6273 19.2847H19.6315C17.9871 19.2847 16.5554 18.3669 15.8211 17.016L15.8224 17.021Z" fill="#00ACE6"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.4375 25.6833L23.3374 17.1973C22.5769 18.4483 21.2011 19.2846 19.6314 19.2846H14.6272C12.2353 19.2846 10.2934 21.2264 10.2934 23.6183C10.2934 26.0102 12.2353 27.952 14.6272 27.952C16.2716 27.952 17.7033 27.0343 18.4375 25.6833Z" fill="#66D9FF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.4035 17.0863C22.6584 18.3994 21.2477 19.286 19.6314 19.286C17.987 19.286 16.5553 18.3683 15.821 17.0173L12.125 10.6186H24.6355C26.2051 10.6186 27.5811 9.78226 28.3414 8.53125L23.4035 17.0863Z" fill="#00BFFF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.32477 4.03848C7.56431 2.78747 6.18847 1.95117 4.61881 1.95117H14.6272C16.1969 1.95117 17.5727 2.78747 18.3332 4.03848L20.8544 8.40269C21.597 9.72472 23.0127 10.6187 24.6356 10.6187H12.1251L8.32477 4.03848Z" fill="#0086B3"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.6273 1.95039C16.1969 1.95039 17.5727 2.78674 18.3332 4.03769L20.8545 8.40203C21.5971 9.7239 23.0127 10.618 24.6356 10.618C26.2053 10.618 27.5812 9.78163 28.3417 8.53068L33.2331 0.0605528V0.0390625C32.4539 1.19184 31.1348 1.95039 29.6399 1.95039H14.6273Z" fill="#0099CC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M101.987 23.7023C104.737 23.7023 107.046 22.1165 107.791 19.9984C107.791 19.9984 107.257 19.7269 106.676 19.43C105.962 19.068 105.093 19.2345 104.566 19.8355C103.952 20.5488 103.057 20.976 101.987 20.976C99.8648 20.976 98.3727 19.2961 98.3727 17.0368C98.3727 14.7051 99.9115 13.0939 101.963 13.0939C103.017 13.0939 103.946 13.5211 104.579 14.2453C105.101 14.8318 105.949 14.9983 106.653 14.6544C107.244 14.3647 107.791 14.0968 107.791 14.0968C106.999 11.8846 104.714 10.3458 101.987 10.3458C98.1396 10.3458 95.2746 13.2098 95.2746 17.0114C95.2746 20.8131 98.1631 23.7023 101.987 23.7023ZM116.955 14.8716C116.955 13.8397 116.016 12.9962 114.642 13.0034C113.267 13.007 112.874 13.5211 112.241 14.2453C111.719 14.8318 110.871 14.9983 110.167 14.6544C109.576 14.3647 109.028 14.0968 109.028 14.0968C109.821 11.8846 112.105 10.3458 114.833 10.3458C117.266 10.3458 119.399 11.7651 119.859 14.0389L119.864 14.057C119.965 14.4299 119.937 14.868 119.937 15.2844C119.937 15.2844 119.937 19.1766 119.937 21.6748C119.937 22.6379 119.154 23.4236 118.188 23.4236H117.118V22.026C116.162 23.1448 114.833 23.7023 113.269 23.7023C110.402 23.7023 108.539 22.0731 108.539 19.926C108.539 18.0397 110.053 16.4756 113.036 15.9868L116.955 15.3097V14.8716ZM58.9944 16.5914C58.9944 13.1663 56.3622 10.3458 52.7245 10.3458C49.0861 10.3458 46.291 13.188 46.291 17.0114C46.291 20.7443 48.9927 23.7023 52.9341 23.7023C55.5935 23.7023 57.6898 22.3989 58.482 20.556C58.482 20.556 57.8915 20.2664 57.2937 19.9731C56.6569 19.6617 55.8944 19.7631 55.3632 20.2338C54.7669 20.7696 53.9599 21.0955 52.9577 21.0955C51.0217 21.0955 49.5756 19.8319 49.3888 17.8731H57.7145C58.0541 17.8731 58.3796 17.7392 58.6196 17.5002C58.86 17.2576 58.9947 16.9318 58.9947 16.595C58.9944 16.5914 58.9944 16.5914 58.9944 16.5914ZM90.9848 23.4236H92.2177C93.1833 23.4236 93.9661 22.6379 93.9661 21.6748C93.9661 18.17 93.9661 10.6246 93.9661 10.6246H90.9848V23.4236ZM69.3722 23.4236H70.605C71.5706 23.4236 72.3534 22.6379 72.3534 21.6748C72.3534 18.17 72.3534 10.6246 72.3534 10.6246H69.3722V23.4236ZM66.8048 10.487C65.1494 10.487 63.8438 11.0229 63.1443 12.4893V10.6246H62.0983C61.1324 10.6246 60.3496 11.4103 60.3496 12.3734C60.3496 15.8782 60.3496 23.4236 60.3496 23.4236H61.5824C62.548 23.4236 63.3308 22.6379 63.3308 21.6748C63.3308 19.5567 63.3308 16.2656 63.3308 16.2656C63.3308 14.2851 64.5901 13.141 66.455 13.141H68.0637V10.487H66.8048ZM42.9549 10.6246L39.6681 19.4373C39.6681 19.4373 37.6942 14.1439 36.806 11.7615C36.5508 11.0772 35.8976 10.6246 35.1677 10.6246C34.2817 10.6246 33.235 10.6246 33.235 10.6246C33.235 10.6246 36.6626 19.22 37.9005 22.3229C38.1656 22.9855 38.809 23.4236 39.5248 23.4236C39.6124 23.4236 39.7007 23.4236 39.7883 23.4236C40.5041 23.4236 41.1475 22.9855 41.4126 22.3229C42.6504 19.22 46.0781 10.6246 46.0781 10.6246H42.9549ZM82.1954 13.3039H78.7652C78.7652 13.3039 78.7652 18.7783 78.7652 21.6748C78.7652 22.6379 77.9821 23.4236 77.0164 23.4236H75.7836V13.3039H73.4291V10.6246H75.7836V10.0671C75.7836 7.14884 77.717 5.51953 80.607 5.51953C80.9799 5.51953 81.5629 5.56662 81.8891 5.63542C81.8891 5.63542 81.8891 6.49713 81.8891 7.21763C81.8891 7.7209 81.4821 8.12999 80.9799 8.12999C79.6045 8.12999 78.7652 8.78174 78.7652 10.0671V10.6246H84.9902V12.4893C85.6897 11.0229 86.9953 10.487 88.6506 10.487H89.9095V13.141H88.3009C86.4355 13.141 85.1766 14.2851 85.1766 16.2656C85.1766 16.2656 85.1766 19.5567 85.1766 21.6748C85.1766 22.6379 84.3938 23.4236 83.4282 23.4236H82.1954V13.3039ZM113.643 21.396C112.453 21.396 111.637 20.8601 111.637 19.8102C111.637 19.1331 112.103 18.4126 113.456 18.1556L116.955 17.5256V18.3185C116.955 20.0455 115.532 21.396 113.643 21.396ZM49.4587 15.6139C49.8088 13.818 51.0916 12.7897 52.7245 12.7897C54.3339 12.7897 55.6865 13.9592 55.8031 15.6139H49.4587ZM69.3722 8.94464H70.605C71.0688 8.94464 71.5134 8.76001 71.8415 8.43054C72.1695 8.10468 72.3534 7.65933 72.3534 7.19589C72.3534 6.49348 72.3534 5.8454 72.3534 5.8454H69.3722V8.94464ZM90.9848 8.94464H92.2177C92.6815 8.94464 93.1261 8.76001 93.4541 8.43054C93.7818 8.10468 93.9661 7.65933 93.9661 7.19589C93.9661 6.49348 93.9661 5.8454 93.9661 5.8454H90.9848V8.94464Z" fill="#101010"/>
                  </svg>
                  ):(
                    <svg width="95" height="22" viewBox="0 0 95 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.307 20.2119L25.9678 0.0169373V0C25.3538 0.908545 24.3141 1.50638 23.1359 1.50638H3.41587C1.53081 1.50638 0.000301361 3.0369 0.000301361 4.92206C0.000301361 5.54923 0.169659 6.1371 0.465202 6.64252L8.30073 20.2119C8.87942 21.2765 10.0078 22 11.3039 22C12.5998 22 13.7283 21.2765 14.307 20.2119Z" fill="#007499"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.38687 13.4352C4.10508 12.9387 3.94417 12.3646 3.94417 11.7534C3.94417 9.86823 5.47464 8.33776 7.35976 8.33776H9.33179L6.41886 3.29465C5.8402 2.22994 4.71183 1.50659 3.4158 1.50659C1.53068 1.50659 0.00021553 3.03706 0.00021553 4.92218C0.00021553 5.54932 0.169663 6.13727 0.465112 6.64268L4.38687 13.4352Z" fill="#007499"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2457 13.384L9.33172 8.33691H7.35486C5.46974 8.33691 3.94411 9.86738 3.94411 11.7525C3.94411 12.3821 4.1148 12.9721 4.41243 13.4788L8.30059 20.2112C8.03759 19.7272 7.88816 19.1728 7.88816 18.5837C7.88816 16.6986 9.41863 15.1681 11.3037 15.1681H15.2478C13.9518 15.1681 12.8234 14.4447 12.2446 13.38L12.2457 13.384Z" fill="#00ACE6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3069 20.2116L18.1687 13.5234C17.5694 14.5094 16.485 15.1685 15.2479 15.1685H11.3039C9.41873 15.1685 7.88827 16.699 7.88827 18.5841C7.88827 20.4692 9.41873 21.9997 11.3039 21.9997C12.5999 21.9997 13.7282 21.2763 14.3069 20.2116Z" fill="#66D9FF"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2208 13.4357C17.6336 14.4706 16.5217 15.1694 15.2479 15.1694C13.9519 15.1694 12.8235 14.446 12.2447 13.3813L9.3318 8.33819H19.1917C20.4289 8.33819 21.5133 7.67908 22.1125 6.69312L18.2208 13.4357Z" fill="#00BFFF"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.33677 3.15167C5.73743 2.1657 4.65308 1.50659 3.41597 1.50659H11.304C12.5411 1.50659 13.6254 2.1657 14.2248 3.15167L16.2118 6.59126C16.7971 7.63321 17.9129 8.33777 19.1919 8.33777H9.33195L6.33677 3.15167Z" fill="#0086B3"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3039 1.50638C12.541 1.50638 13.6253 2.16554 14.2247 3.15146L16.2118 6.59116C16.797 7.63297 17.9127 8.33763 19.1918 8.33763C20.429 8.33763 21.5133 7.67847 22.1127 6.69255L25.9678 0.0169373V0C25.3537 0.908545 24.3141 1.50638 23.1359 1.50638H11.3039Z" fill="#0099CC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M80.1548 18.6499C82.3229 18.6499 84.1421 17.4 84.7299 15.7307C84.7299 15.7307 84.3087 15.5167 83.8507 15.2827C83.2883 14.9973 82.6032 15.1286 82.188 15.6023C81.704 16.1644 80.9983 16.5012 80.1548 16.5012C78.4826 16.5012 77.3067 15.1771 77.3067 13.3965C77.3067 11.5588 78.5194 10.289 80.1363 10.289C80.9666 10.289 81.6992 10.6257 82.1982 11.1964C82.6092 11.6587 83.2777 11.7899 83.8327 11.5188C84.2982 11.2906 84.7299 11.0794 84.7299 11.0794C84.1053 9.3359 82.3047 8.12311 80.1548 8.12311C77.1229 8.12311 74.8649 10.3803 74.8649 13.3765C74.8649 16.3727 77.1415 18.6499 80.1548 18.6499ZM91.9522 11.6901C91.9522 10.8768 91.2118 10.2119 90.1288 10.2176C89.0451 10.2205 88.7354 10.6257 88.2364 11.1964C87.8254 11.6587 87.1568 11.7899 86.6018 11.5188C86.1361 11.2906 85.7044 11.0794 85.7044 11.0794C86.3293 9.3359 88.1299 8.12311 90.2798 8.12311C92.1968 8.12311 93.8781 9.24172 94.2408 11.0338L94.2445 11.048C94.3247 11.3419 94.3019 11.6872 94.3019 12.0154C94.3019 12.0154 94.3019 15.0829 94.3019 17.0519C94.3019 17.8109 93.6849 18.4302 92.9236 18.4302H92.0807V17.3287C91.327 18.2104 90.2792 18.6499 89.0473 18.6499C86.7873 18.6499 85.3189 17.3658 85.3189 15.6736C85.3189 14.1869 86.512 12.9542 88.8636 12.569L91.9522 12.0354V11.6901ZM46.2711 13.0455C46.2711 10.346 44.1966 8.12311 41.3296 8.12311C38.4621 8.12311 36.2592 10.3632 36.2592 13.3765C36.2592 16.3185 38.3885 18.6499 41.4949 18.6499C43.5908 18.6499 45.243 17.6226 45.8674 16.1701C45.8674 16.1701 45.4019 15.9419 44.9308 15.7107C44.4289 15.4653 43.8279 15.5452 43.4093 15.9162C42.9393 16.3385 42.3033 16.5953 41.5134 16.5953C39.9876 16.5953 38.8479 15.5994 38.7007 14.0557H45.2624C45.5301 14.0557 45.7866 13.9501 45.9758 13.7617C46.1653 13.5705 46.2714 13.3137 46.2714 13.0483C46.2711 13.0455 46.2711 13.0455 46.2711 13.0455ZM71.484 18.4302H72.4556C73.2167 18.4302 73.8336 17.8109 73.8336 17.0519C73.8336 14.2896 73.8336 8.34284 73.8336 8.34284H71.484V18.4302ZM54.4503 18.4302H55.4219C56.183 18.4302 56.7999 17.8109 56.7999 17.0519C56.7999 14.2896 56.7999 8.34284 56.7999 8.34284H54.4503V18.4302ZM52.4268 8.2344C51.1222 8.2344 50.0932 8.65674 49.5419 9.81243V8.34284H48.7175C47.9562 8.34284 47.3392 8.96208 47.3392 9.72113C47.3392 12.4834 47.3392 18.4302 47.3392 18.4302H48.3109C49.0719 18.4302 49.6888 17.8109 49.6888 17.0519C49.6888 15.3826 49.6888 12.7887 49.6888 12.7887C49.6888 11.2278 50.6813 10.3261 52.1512 10.3261H53.419V8.2344H52.4268ZM33.6299 8.34284L31.0394 15.2884C31.0394 15.2884 29.4837 11.1165 28.7837 9.23886C28.5825 8.69954 28.0677 8.34284 27.4925 8.34284C26.7942 8.34284 25.9692 8.34284 25.9692 8.34284C25.9692 8.34284 28.6707 15.1172 29.6463 17.5627C29.8552 18.0849 30.3623 18.4302 30.9264 18.4302C30.9955 18.4302 31.0651 18.4302 31.1342 18.4302C31.6983 18.4302 32.2054 18.0849 32.4143 17.5627C33.3899 15.1172 36.0914 8.34284 36.0914 8.34284H33.6299ZM64.5567 10.4545H61.8533C61.8533 10.4545 61.8533 14.769 61.8533 17.0519C61.8533 17.8109 61.236 18.4302 60.475 18.4302H59.5033V10.4545H57.6477V8.34284H59.5033V7.90342C59.5033 5.60345 61.0271 4.31934 63.3049 4.31934C63.5988 4.31934 64.0582 4.35645 64.3153 4.41067C64.3153 4.41067 64.3153 5.08981 64.3153 5.65767C64.3153 6.05431 63.9946 6.37674 63.5988 6.37674C62.5147 6.37674 61.8533 6.8904 61.8533 7.90342V8.34284H66.7594V9.81243C67.3107 8.65674 68.3397 8.2344 69.6443 8.2344H70.6365V10.3261H69.3687C67.8985 10.3261 66.9063 11.2278 66.9063 12.7887C66.9063 12.7887 66.9063 15.3826 66.9063 17.0519C66.9063 17.8109 66.2894 18.4302 65.5283 18.4302H64.5567V10.4545ZM89.3415 16.8322C88.4039 16.8322 87.7604 16.4098 87.7604 15.5823C87.7604 15.0487 88.1282 14.4808 89.1943 14.2782L91.9522 13.7817V14.4066C91.9522 15.7678 90.8308 16.8322 89.3415 16.8322ZM38.7557 12.275C39.0317 10.8597 40.0427 10.0493 41.3296 10.0493C42.598 10.0493 43.6641 10.971 43.756 12.275H38.7557ZM54.4503 7.01879H55.4219C55.7875 7.01879 56.1379 6.87328 56.3964 6.6136C56.6549 6.35678 56.7999 6.00579 56.7999 5.64053C56.7999 5.08694 56.7999 4.57616 56.7999 4.57616H54.4503V7.01879ZM71.484 7.01879H72.4556C72.8212 7.01879 73.1716 6.87328 73.4301 6.6136C73.6884 6.35678 73.8336 6.00579 73.8336 5.64053C73.8336 5.08694 73.8336 4.57616 73.8336 4.57616H71.484V7.01879Z" fill="white"/>
                    </svg>

                  )}
              </div></a>
              </Link>
                <div className="block lg:hidden" onClick={toggleMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === 'white' || theme === "dark" || theme === 'black' ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            < ul className = {
                `${theme === 'white' || theme === "dark" || theme === 'black' ? 'text-black' : 'text-white'} mt-4 font-light`
            } >
                {links.map((link, index) => {
                    return(
                        <MobileNavList  theme={theme} link={link} key={index} />
                    )
                })}
                </ul>
                <ul className="flex flex-col items-center w-full space-y-3 px-4 mt-16">
                <LinkButton text="Request access" url="/" color={ theme === 'white' || theme === "dark" || theme === 'black' ? 'primary' : 'yellow' } />
                <li className="w-full">
                    <LinkButton text="Contact sales" url="/contact-us" color={theme === 'white' || theme === "dark" || theme === 'black' ? 'secondary' : 'white'} />
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;