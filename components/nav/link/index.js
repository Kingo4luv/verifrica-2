import LinkItem from './item';
import TransactionIcon from '../../../public/assets/svgs/transaction-blue.svg';
import IdentityIcon from '../../../public/assets/svgs/identity-blue.svg';
import AuthenticationIcon from '../../../public/assets/svgs/authentication-blue.svg';
import BalanceIcon from '../../../public/assets/svgs/balance.svg';
import AssetsIcon from '../../../public/assets/svgs/assets.svg';
import PaymentInitiationsIcon from '../../../public/assets/svgs/payment-blue.svg';
import PersonalFinancesIcon from '../../../public/assets/svgs/personal-finances.svg';
import ConsumerPaymentsIcon from '../../../public/assets/svgs/consumer-payments.svg';
import LendingIcon from '../../../public/assets/svgs/lending.svg';
import BankingIcon from '../../../public/assets/svgs/banking.svg';
import WealthIcon from '../../../public/assets/svgs/wealth.svg';
import BusinessFinancesIcon from '../../../public/assets/svgs/business-finances.svg';


const links = [
    {
        name: 'Products',
        hasDropdown: true,
        dropdownItems: [
            {
                name: 'Transactions',
                icon: TransactionIcon,
                text: 'Typically 24 months of categorised financial data of your customers',
                url: "/products/transactions"
            },
            {
                name: 'Identity',
                icon: IdentityIcon,
                text: 'Complete a direct and manual KYC checks on customers',
                url: "/products/identity"
            },
            {
                name: 'Authentication',
                icon: AuthenticationIcon,
                text: 'Know and verify account holder(s) by verifying bank access credentials.',
                url: "/products/authentication"
            },
            {
                name: 'Balance',
                icon: BalanceIcon,
                text: 'Get your customers real-time and historical account balance.',
                url: "/products/balance"
            },
            {
                name: 'Assets',
                icon: AssetsIcon,
                text: 'Get insights into type, value and liquidity level of your customers',
                url: "/products/assets"
            },
            {
                name: 'Payment Initiations',
                icon: PaymentInitiationsIcon,
                text: 'Create payment links and receive one-off and recurring payments',
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
                text: 'Fostering saving, budgeting and managing your finances.',
                url: "/use-case/personal-finances"
            },
            {
                name: 'Consumer Payments',
                icon: ConsumerPaymentsIcon,
                text: 'A simple and seamless means to pay bills and send money with ease.',
                url: "/use-case/consumers-payments"
            },
            {
                name: 'Lending',
                icon: LendingIcon,
                text: 'Aiding individuals and businesses access capital through an efficient process.',
                url: "/use-case/lending"
            },
            {
                name: 'Banking',
                icon: BankingIcon,
                text: 'Providing individuals with good plans on expanding finances through investment.',
                url: "/use-case/banking"
            },
            {
                name: 'Wealth',
                icon: WealthIcon,
                text: 'Providing users with a banking experience, fund your account and manage savings.  ',
                url: "/use-case/wealth"
            },
            {
                name: 'Business Finances',
                icon: BusinessFinancesIcon,
                text: 'Aiding businesses manage funds, make payment, analyze financial reports and send payroll.',
                url: "/use-case/business-finances"
            },
        ]
    },
    {
        name: 'For Developers',
        hasDropdown: false,
        url: "/developers"
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
        <ul className={`lg:flex ${theme === 'white' ? 'text-black' : 'text-white'} hidden`}>
            {links.map((link, index) => {
                return(
                    <LinkItem link={link} key={index} theme={theme} />
                )
            })}
        </ul>
    )
}

export default NavLink;