import dominosIcon from '../../public/assets/svgs/dominos.svg';
import AbnAmbroIcon from '../../public/assets/svgs/abn-ambro.svg';
import PaypalIcon from '../../public/assets/svgs/paypal.svg';
import PiggyvestIcon from '../../public/assets/svgs/piggyvest.svg';
import CowrywiseIcon from '../../public/assets/svgs/cowrywise.svg';
const ClientSection = () => {
    return(
        <section className="clients w-full py-16 md:py-24 bg-client-grey space-y-12 md:space-y-20 flex flex-col items-center justify-center px-4">
          <h2 className="text-xl md:text-4xl font-bold text-black">Bringing solutions to 100+ banks and Fintechs</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-12 md:gap-24">
            <div className="client-item">
              <img src={CowrywiseIcon}/>
            </div>
            <div className="client-item">
              <img src={PiggyvestIcon}/>
            </div>
            <div className="client-item">
              <img src={PaypalIcon} className="-mt-3 sm:-mt-6"/>
            </div>
            <div className="client-item">
              <img src={AbnAmbroIcon} className="-mt-3 sm:-mt-6"/>
            </div>
            <div className="client-item">
              <img src={dominosIcon}/>
            </div>
          </div>
        </section>
    )
}

export default ClientSection;