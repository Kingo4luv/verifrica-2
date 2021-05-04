const PricingDetails = () => {
    return(
        <section className="pricing details w-full">
        <div className="max-w-[1100px] mx-auto py-12 space-y-12 px-4">
            <h2 className="font-bold text-xl md:text-3xl text-black text-center">Pricing Details</h2>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Authentication</dt>
                        <dd className="font-bold text-base md:text-xl">Free</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Accounts</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 10/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Identity</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Transactions</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Income</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Balance</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Statement</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Expenses</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 100/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Estimator</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 100/call</dd>
                    </dl>
                </div>
                <div className="flex flex-col justify-center items-center w-full bg-blue h-32 md:h-40 rounded">
                    <dl className="text-white text-center space-y-2">
                        <dt className="font-light text-sm md:text-base">Direct Debit</dt>
                        <dd className="font-bold text-base md:text-xl">NGN 50/call</dd>
                    </dl>
                </div>
            </div>
        </div>
      </section>
    )
}

export default PricingDetails;