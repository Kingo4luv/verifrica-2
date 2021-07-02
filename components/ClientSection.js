import flutterwave from '../public/assets/svgs/flutterwave.svg';
import quidax from '../public/assets/svgs/quidax.svg';
import Filppay from '../public/assets/svgs/flippay.svg';
import PiggyvestIcon from '../public/assets/svgs/piggyvest.svg';
import CowrywiseIcon from '../public/assets/svgs/cowrywise.svg';
import abeg from '../public/assets/svgs/abeg.svg';
const ClientSection = () => {
    return(
        <section className="clients w-full py-16 md:py-24 bg-client-grey px-4">
          <div className="flex flex-col items-center justify-center max-w-[1100px] mx-auto space-y-12 md:space-y-20">
            <h2 className="text-xl md:text-2xl font-bold text-black">Bringing solutions to 100+ banks and Fintechs</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-12 md:gap-20 filter blur-md">
              <div className="client-item">
                <img src={CowrywiseIcon}/>
              </div>
              <div className="client-item">
                <img src={PiggyvestIcon}/>
              </div>
              <div className="client-item">
                <img src={Filppay}/>
              </div>
              <div className="client-item">
                <img src={quidax}/>
              </div>
              <div className="client-item">
                <img src={abeg}/>
              </div>
              <div className="client-item">
                <img src={flutterwave}/>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ClientSection;