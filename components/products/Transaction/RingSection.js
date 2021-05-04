import ZenithBankIcon from '../../../public/assets/svgs/zenith-bank.svg'
import AccessBankIcon from '../../../public/assets/svgs/access-bank.svg'
import WemaBankIcon from '../../../public/assets/svgs/wema-bank.svg'
import SterlingBankIcon from '../../../public/assets/svgs/sterling-bank.svg'
import UnionBankIcon from '../../../public/assets/svgs/union-bank.svg'
import KudaBankIcon from '../../../public/assets/svgs/kuda-bank.svg'
import UbaIcon from '../../../public/assets/svgs/uba.svg'
import VerificaBlueIcon from '../../../public/assets/svgs/verifica-blue.svg'
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
const RingSection = () => {
    return(
        <section className="pb-32 w-full overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto relative flex justify-center items-center mt-8 sm:mt-0">
            <div className="w-100 h-100 md:w-128 md:h-128 border-dashed border border-form-text-grey rounded-full flex justify-center items-center flex-none relative">
                <div className="absolute inset-0 w-full h-full">
                <Rotate>
                  <span className="h-16 w-16 md:w-24 md:h-24 absolute -top-8 sm:-top-10 right-52 sm:right-1/3 bg-white rounded-full shadow-box-shadow flex justify-center items-center p-3">
                    <img src={AccessBankIcon} alt="Zenith Bank" className=""/>
                  </span>
                </Rotate>
                <Rotate>
                  <span className="h-16 w-16 md:w-24 md:h-24 absolute top-1/3 -left-6 rounded-full bg-white shadow-box-shadow hidden sm:flex justify-center items-center">
                    <img src={WemaBankIcon} alt="Zenith Bank" className=""/>
                  </span>
                </Rotate>
                <Rotate>
                  <span className="h-16 w-16 md:w-24 md:h-24 absolute bottom-1/2 -right-12 rounded-full bg-white shadow-box-shadow hidden sm:flex justify-center items-center">
                    <img src={SterlingBankIcon} alt="Zenith Bank" className=""/>
                  </span>
                  </Rotate>
                </div>
                <div className="w-92 h-92 md:w-112 md:h-112 border-dashed border border-form-text-grey rounded-full flex-none relative">
                  <div className="absolute inset-0 w-full h-full justify-center flex items-center">
                    <Zoom>
                    <h3 className="text-2xl md:text-5xl font-bold text-center leading-snug">
                      Connect with financial institutions in Africa.
                    </h3>
                    </Zoom>
                    <Rotate cascade>
                    <span className="h-16 w-16 md:w-24 md:h-24 absolute top-0 left-12 sm:left-28 rounded-full bg-white shadow-box-shadow flex justify-center items-center p-3 sm:p-0">
                      <img src={UbaIcon} alt="Zenith Bank" className=""/>
                    </span>
                    </Rotate>
                    <Rotate cascade>
                    <span className="h-16 w-16 md:w-24 md:h-24 absolute bottom-3/4 sm:bottom-1/4 sm:-left-5 left-3/4 rounded-full bg-white shadow-box-shadow flex justify-center items-center p-4">
                      <img src={ZenithBankIcon} alt="Zenith Bank" className=""/>
                    </span>
                    </Rotate>
                    <Rotate cascade>
                    <span className="h-16 w-16 md:w-24 md:h-24 absolute bottom-3/4 right-8 rounded-full bg-white shadow-box-shadow sm:flex justify-center items-center hidden">
                      <img src={UnionBankIcon} alt="Zenith Bank" className=""/>
                    </span>
                    </Rotate>
                    <Rotate cascade>
                    <span className="h-16 w-16 md:w-24 md:h-24 absolute bottom-1/4 -right-6 rounded-full bg-white shadow-box-shadow sm:flex justify-center items-center hidden">
                      <img src={KudaBankIcon} alt="Zenith Bank" className=""/>
                    </span>
                    </Rotate>
                  </div>
                </div>
            </div>
            <Zoom cascade>
            <div className="absolute top-[75%] left-0 w-full flex justify-center items-center px-4 sm:px-20 lg:px-0">
              <div className="w-full max-w-xl py-16 sm:py-24 rounded bg-light-shade-blue px-4 md:px-12 relative border">
                <div className="absolute left-[34%]  sm:left-[38%] -top-16">
                   <Rotate>
                   <img src={VerificaBlueIcon} alt="Verifrica blue" className="w-28 sm:w-36 h-28 sm:h-36 object-cover"/>
                   </Rotate>
                </div>
                <p className="text-black text-sm sm:text-lg lg:text-xl text-center">
                  Directly access your customers' financial data. Your customers will never need to upload PDF transaction reports or manually enter their information again.
                </p>
              </div>
            </div>
            </Zoom>
        </div>
      </section>
    )
}

export default RingSection;