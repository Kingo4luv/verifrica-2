import LinkButton from "../button/LinkButton";

const BlueSection = ({video, description}) => {
    return (
        <section className={`${video ? 'pt-44 md:pt-72 lg:pt-96 pb-20 bg-yellow' : 'py-16 mb-0 md:mb-20'}`}>
          < div className = "flex flex-col-reverse md:flex-row box-border mx-auto max-w-[1100px]" >
            <div className="w-full lg:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
                <img src="/assets/img/mobile-new.png" className="w-4/5 h-auto"/>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                  <div className="space-y-12 w-full px-4 lg:px-0 box-border md:max-w-xl lg:max-w-lg">
                    <dl className="space-y-5">
                      <dt className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold text-hair leading-normal">Connect to financial bank accounts in seconds</dt>
                      <dd className="font-light text-subtitle-3 lg:text-subtitle-2 text-hair max-w-md">
                        {description ? 
                         description
                        :
                        ` Verifrica prioritizes the interest of our users, with flexibility that enables you to link and exchange financial data from various financial institutions with the apps of your choice in a safe and secure manner.With Verifrica you can also retrieve transactions, profits, balances, and more from your customers ' financial accounts.`
                      }
                      </dd>
                    </dl>
                    <div className="w-full lg:w-3/5 xl:w-2/5">
                      <LinkButton color="primary" url="/" text="Get started" />
                    </div>
                  </div>
              </div>
          </div>
        </section>
    )
}

export default BlueSection;