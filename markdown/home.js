
const HomeCode = `<section className="py-16 flex flex-col lg:flex-row bg-client-grey">
    <div className="w-full lg:w-1/2 flex justify-center items-center py-12 lg:py-32 px-4 lg:px-0">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
                <dl className="text-black space-y-8">
                <dt className="text-2xl md:text-4xl font-bold leading-tight">For developers, by <br/> developers</dt>
                <dd className="font-light pr-12  text-xs md:text-base text-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam morbi etiam dolor ac bibendum cras congue sed vitae. Malesuada mollis.
                </dd>
                </dl>
                <div>
                <Link href="/" className="block">
                    <a className="px-16 py-4 rounded text-sm font-medium text-black tracking-wide mt-6 border border-black">Read our API documentation</a>
                </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="border w-1/2">
        <div className="w-3/4 h-4/5 border">
        <HomeMarkdown />
        </div>
    </div>
</section>`

export default HomeCode;