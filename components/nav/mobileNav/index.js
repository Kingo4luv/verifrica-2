import Link from "next/link"
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
            `w-full min-h-screen max-h-sceeen h-screen fixed inset-0 z-50 block md:hidden ${theme === 'white' ? 'bg-white' :'bg-card-blue'}`
        } >
            <div className={`flex justify-between px-4 lg:px-12 items-center h-16 ${theme === 'white' ? 'bg-white' :'bg-card-blue'}`}>
                <Link href="/">
                <a><div className="logo">
                {theme == 'white' ? (<svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.4371 25.6852L33.2324 0.0615293V0.0400391C32.4534 1.19282 31.1342 1.95136 29.6393 1.95136H4.6182C2.22642 1.95136 0.284477 3.89331 0.284477 6.28523C0.284477 7.081 0.499363 7.8269 0.874352 8.46817L10.8162 25.6852C11.5504 27.036 12.9821 27.954 14.6266 27.954C16.271 27.954 17.7028 27.036 18.4371 25.6852Z" fill="#007499"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.85081 17.0869C5.49328 16.4568 5.28911 15.7285 5.28911 14.9529C5.28911 12.561 7.23099 10.6192 9.62286 10.6192H12.125L8.42903 4.22038C7.69482 2.86945 6.26312 1.95166 4.6187 1.95166C2.22683 1.95166 0.284951 3.89354 0.284951 6.28541C0.284951 7.08114 0.499949 7.82714 0.874818 8.46841L5.85081 17.0869Z" fill="#007499"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.8217 17.022L12.1244 10.6182H9.61617C7.2243 10.6182 5.28855 12.56 5.28855 14.9519C5.28855 15.7508 5.50512 16.4993 5.88276 17.1423L10.8161 25.6845C10.4824 25.0704 10.2928 24.3669 10.2928 23.6194C10.2928 21.2276 12.2347 19.2857 14.6266 19.2857H19.6309C17.9864 19.2857 16.5547 18.3679 15.8204 17.0169L15.8217 17.022Z" fill="#00ACE6"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.436 25.685L23.3359 17.199C22.5755 18.45 21.1996 19.2863 19.63 19.2863H14.6257C12.2338 19.2863 10.292 21.2282 10.292 23.62C10.292 26.0119 12.2338 27.9538 14.6257 27.9538C16.2701 27.9538 17.7018 27.036 18.436 25.685Z" fill="#66D9FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.4019 17.0875C22.6568 18.4007 21.2461 19.2873 19.6298 19.2873C17.9854 19.2873 16.5537 18.3695 15.8194 17.0186L12.1234 10.6198H24.6339C26.2035 10.6198 27.5795 9.78348 28.3398 8.53247L23.4019 17.0875Z" fill="#00BFFF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.32397 4.03896C7.56352 2.78795 6.18768 1.95166 4.61802 1.95166H14.6265C16.1961 1.95166 17.572 2.78795 18.3324 4.03896L20.8536 8.40318C21.5962 9.72521 23.0119 10.6192 24.6348 10.6192H12.1243L8.32397 4.03896Z" fill="#0086B3"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.6266 1.95136C16.1963 1.95136 17.5721 2.78772 18.3326 4.03866L20.8538 8.40301C21.5964 9.72488 23.0121 10.619 24.6349 10.619C26.2047 10.619 27.5805 9.78261 28.341 8.53166L33.2324 0.0615293V0.0400391C32.4532 1.19282 31.1342 1.95136 29.6393 1.95136H14.6266Z" fill="#0099CC"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M101.986 23.7033C104.737 23.7033 107.045 22.1175 107.791 19.9994C107.791 19.9994 107.256 19.7279 106.675 19.431C105.962 19.0689 105.092 19.2355 104.566 19.8365C103.952 20.5498 103.056 20.977 101.986 20.977C99.8642 20.977 98.3721 19.297 98.3721 17.0378C98.3721 14.7061 99.9109 13.0949 101.962 13.0949C103.016 13.0949 103.945 13.5221 104.579 14.2462C105.1 14.8328 105.948 14.9993 106.653 14.6554C107.243 14.3657 107.791 14.0978 107.791 14.0978C106.998 11.8856 104.714 10.3468 101.986 10.3468C98.139 10.3468 95.274 13.2107 95.274 17.0124C95.274 20.8141 98.1625 23.7033 101.986 23.7033ZM116.955 14.8726C116.955 13.8407 116.015 12.9971 114.641 13.0044C113.266 13.008 112.873 13.5221 112.24 14.2462C111.719 14.8328 110.87 14.9993 110.166 14.6554C109.575 14.3657 109.027 14.0978 109.027 14.0978C109.82 11.8856 112.105 10.3468 114.833 10.3468C117.265 10.3468 119.398 11.7661 119.858 14.0399L119.863 14.0579C119.965 14.4309 119.936 14.869 119.936 15.2853C119.936 15.2853 119.936 19.1775 119.936 21.6758C119.936 22.6389 119.153 23.4246 118.187 23.4246H117.118V22.027C116.161 23.1457 114.832 23.7033 113.269 23.7033C110.401 23.7033 108.538 22.0741 108.538 19.927C108.538 18.0407 110.052 16.4766 113.036 15.9878L116.955 15.3107V14.8726ZM58.9938 16.5924C58.9938 13.1673 56.3615 10.3468 52.7239 10.3468C49.0855 10.3468 46.2904 13.189 46.2904 17.0124C46.2904 20.7453 48.9921 23.7033 52.9335 23.7033C55.5929 23.7033 57.6892 22.3999 58.4814 20.557C58.4814 20.557 57.8909 20.2674 57.2931 19.9741C56.6563 19.6627 55.8938 19.7641 55.3626 20.2348C54.7663 20.7706 53.9593 21.0965 52.9571 21.0965C51.0211 21.0965 49.575 19.8329 49.3882 17.8741H57.7139C58.0535 17.8741 58.379 17.7401 58.619 17.5012C58.8594 17.2586 58.9941 16.9327 58.9941 16.596C58.9937 16.5924 58.9938 16.5924 58.9938 16.5924ZM90.9842 23.4246H92.2171C93.1827 23.4246 93.9655 22.6389 93.9655 21.6758C93.9655 18.171 93.9655 10.6256 93.9655 10.6256H90.9842V23.4246ZM69.3716 23.4246H70.6044C71.57 23.4246 72.3528 22.6389 72.3528 21.6758C72.3528 18.171 72.3528 10.6256 72.3528 10.6256H69.3716V23.4246ZM66.8042 10.488C65.1488 10.488 63.8432 11.0239 63.1437 12.4902V10.6256H62.0977C61.1317 10.6256 60.349 11.4113 60.349 12.3744C60.349 15.8792 60.349 23.4246 60.349 23.4246H61.5818C62.5474 23.4246 63.3302 22.6389 63.3302 21.6758C63.3302 19.5577 63.3302 16.2666 63.3302 16.2666C63.3302 14.2861 64.5894 13.142 66.4544 13.142H68.0631V10.488H66.8042ZM42.9543 10.6256L39.6675 19.4382C39.6675 19.4382 37.6936 14.1449 36.8054 11.7625C36.5502 11.0782 35.897 10.6256 35.1671 10.6256C34.2811 10.6256 33.2344 10.6256 33.2344 10.6256C33.2344 10.6256 36.662 19.221 37.8999 22.3239C38.165 22.9865 38.8083 23.4246 39.5241 23.4246C39.6118 23.4246 39.7001 23.4246 39.7877 23.4246C40.5035 23.4246 41.1469 22.9865 41.4119 22.3239C42.6498 19.221 46.0775 10.6256 46.0775 10.6256H42.9543ZM82.1948 13.3049H78.7646C78.7646 13.3049 78.7646 18.7793 78.7646 21.6758C78.7646 22.6389 77.9815 23.4246 77.0158 23.4246H75.783V13.3049H73.4285V10.6256H75.783V10.068C75.783 7.14981 77.7164 5.52051 80.6064 5.52051C80.9793 5.52051 81.5623 5.5676 81.8885 5.63639C81.8885 5.63639 81.8885 6.4981 81.8885 7.21861C81.8885 7.72188 81.4815 8.13097 80.9793 8.13097C79.6039 8.13097 78.7646 8.78272 78.7646 10.068V10.6256H84.9896V12.4902C85.6891 11.0239 86.9947 10.488 88.65 10.488H89.9089V13.142H88.3003C86.4349 13.142 85.176 14.2861 85.176 16.2666C85.176 16.2666 85.176 19.5577 85.176 21.6758C85.176 22.6389 84.3932 23.4246 83.4276 23.4246H82.1948V13.3049ZM113.642 21.397C112.452 21.397 111.636 20.8611 111.636 19.8111C111.636 19.1341 112.103 18.4136 113.455 18.1565L116.955 17.5265V18.3194C116.955 20.0465 115.532 21.397 113.642 21.397ZM49.4581 15.6148C49.8082 13.819 51.091 12.7907 52.7239 12.7907C54.3333 12.7907 55.6859 13.9602 55.8025 15.6148H49.4581ZM69.3716 8.94561H70.6044C71.0682 8.94561 71.5128 8.76099 71.8408 8.43151C72.1689 8.10565 72.3528 7.6603 72.3528 7.19686C72.3528 6.49446 72.3528 5.84637 72.3528 5.84637H69.3716V8.94561ZM90.9842 8.94561H92.2171C92.6809 8.94561 93.1255 8.76099 93.4535 8.43151C93.7812 8.10565 93.9655 7.6603 93.9655 7.19686C93.9655 6.49446 93.9655 5.84637 93.9655 5.84637H90.9842V8.94561Z" fill="white"/>
                    </svg>
                  )}
              </div></a>
              </Link>
                <div className="block md:hidden" onClick={toggleMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === 'white' ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            < ul className = {
                `${theme === 'white' ? 'text-black' : 'text-white'} mt-4 font-light`
            } >
                {links.map((link, index) => {
                    return(
                        <MobileNavList  theme={theme} link={link} key={index} />
                    )
                })}
                </ul>
                <ul className="flex flex-col items-center w-full space-y-3 px-4 mt-16">
                <li className="w-full">
                    < button className = {
                        `w-full bg-transparent  px-4 py-3 leading-loose tracking-wider rounded font-medium text-sm focus:outline-none ${theme === 'white' ? 'border border-black text-black' : 'border border-white text-white'}`
                    } >
                    Login
                    </button>
                </li>
                <li className="w-full">
                    <button className={`w-full px-4 py-3 leading-loose tracking-wider rounded font-medium text-sm focus:outline-none ${theme === 'white' ? 'bg-blue text-white' : 'bg-yellow text-hair'}`}>
                    Try demo
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;