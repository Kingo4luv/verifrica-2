import Link from 'next/link';
import LinkItem from './item';
import TransactionIcon from '../../../public/assets/svgs/transactions.svg';
import IdentityIcon from '../../../public/assets/svgs/identity.svg';
import AuthenticationIcon from '../../../public/assets/svgs/authentication.svg';
import BalanceIcon from '../../../public/assets/svgs/balance.svg';
import AssetsIcon from '../../../public/assets/svgs/assets.svg';
import PaymentInitiationsIcon from '../../../public/assets/svgs/payment-initiations.svg';
import PersonalFinancesIcon from '../../../public/assets/svgs/personal-finances.svg';
import ConsumerPaymentsIcon from '../../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../../public/assets/svgs/lending.svg';
import BankingIcon from '../../../public/assets/svgs/banking.svg';
import WealthIcon from '../../../public/assets/svgs/wealth.svg';
import BusinessFinancesIcon from '../../../public/assets/svgs/business-finances.svg';
import QuickStartIcon from '../../../public/assets/svgs/quick-start.svg';
import ApiDocumentationIcon from '../../../public/assets/svgs/api-documentation.svg';
import GithubIcon from '../../../public/assets/svgs/github.svg';

const links = [
    {
        name: 'Products',
        hasDropdown: true,
        dropdownItems: [
            {
                name: 'Transactions',
                icon: TransactionIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/transactions"
            },
            {
                name: 'Identity',
                icon: IdentityIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/identity"
            },
            {
                name: 'Authentication',
                icon: AuthenticationIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/authentication"
            },
            {
                name: 'Balance',
                icon: BalanceIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/balance"
            },
            {
                name: 'Assets',
                icon: AssetsIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/assets"
            },
            {
                name: 'Payment Initiations',
                icon: PaymentInitiationsIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/products/payment-initiation"
            },
        ]
    },
    {
        name: 'Use Cases',
        hasDropdown: true,
        dropdownItems: [
            {
                name: 'Personal Finances',
                icon: PersonalFinancesIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/personal-finances"
            },
            {
                name: 'Consumer Payments',
                icon: ConsumerPaymentsIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/consumers-payments"
            },
            {
                name: 'Lending',
                icon: LendingIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/lending"
            },
            {
                name: 'Banking',
                icon: BankingIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/banking"
            },
            {
                name: 'Wealth',
                icon: WealthIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/wealth"
            },
            {
                name: 'Business Finances',
                icon: BusinessFinancesIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac vitae habitasse rutrum.',
                url: "/use-case/business-finances"
            },
        ]
    },
    {
        name: 'For Developers',
        hasDropdown: true,
        dropdownItems: [
            {
                name: 'Quick start',
                icon: QuickStartIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                url: "/developers/quick-start"
            },
            {
                name: 'API documentation',
                icon: ApiDocumentationIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                url: "/developers/documentation"
            },
            {
                name: 'Github',
                icon: GithubIcon,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                url: "/developers/github"
            },
        ]
    },
    {
        name: 'Pricing',
        hasDropdown: false,
        url: "/pricing"
    },
    {
        name: 'Company',
        hasDropdown: false,
        url: "/company"
    },
]

const NavLink = ({theme}) => {
    return(
        <ul className={`lg:flex space-x-4 xl:space-x-12 ${theme === 'white' ? 'text-black' : 'text-white'} hidden`}>
            {links.map((link, index) => {
                return(
                    <LinkItem link={link} key={index} theme={theme} />
                )
            })}
        </ul>
    )
}

export default NavLink;