import { Transition } from "@headlessui/react";

export default function ModalLayout(props){
    return(
        <Transition
        className="w-full h-screen max-h-screen min-h-screen fixed bg-hair bg-opacity-50 flex justify-center items-center px-4"
        show={props.isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
          <div className="max-w-6xl py-10 bg-white rounded shadow-lg relative space-y-6 lg:space-y-12 px-4 lg:px-12">
              {props.type !== "confirm" && <div className="modal-head flex justify-center">
                  <button className="absolute top-4 right-4 focus:outline-none" onClick={props.toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex flex-col justify-center items-center">
                      <span>
                        <svg width="103" height="24" viewBox="0 0 103 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6074 22.0494L28.3282 0.018477V0C27.6584 0.99114 26.5241 1.64333 25.2388 1.64333H3.72611C1.66969 1.64333 4.00543e-05 3.31298 4.00543e-05 5.36952C4.00543e-05 6.05371 0.184793 6.69502 0.507202 7.24638L9.05505 22.0494C9.68635 23.2108 10.9173 24 12.3312 24C13.745 24 14.9761 23.2108 15.6074 22.0494Z" fill="#007499"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.78545 14.6566C4.47804 14.1149 4.3025 13.4887 4.3025 12.8218C4.3025 10.7653 5.9721 9.09574 8.0286 9.09574H10.1799L7.00216 3.59417C6.3709 2.43266 5.13995 1.64355 3.7261 1.64355C1.66961 1.64355 5.72205e-06 3.31316 5.72205e-06 5.36965C5.72205e-06 6.0538 0.184857 6.6952 0.507165 7.24656L4.78545 14.6566Z" fill="#007499"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.3587 14.6009L10.1798 9.09497H8.02325C5.96675 9.09497 4.30243 10.7646 4.30243 12.8211C4.30243 13.5079 4.48863 14.1515 4.81332 14.7043L9.05496 22.0487C8.76805 21.5208 8.60503 20.9159 8.60503 20.2733C8.60503 18.2168 10.2746 16.5472 12.3311 16.5472H16.6337C15.2199 16.5472 13.9889 15.7581 13.3576 14.5966L13.3587 14.6009Z" fill="#00ACE6"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6072 22.0491L19.8201 14.7529C19.1662 15.8285 17.9833 16.5476 16.6337 16.5476H12.3311C10.2746 16.5476 8.60505 18.2172 8.60505 20.2736C8.60505 22.3301 10.2746 23.9997 12.3311 23.9997C13.745 23.9997 14.9759 23.2106 15.6072 22.0491Z" fill="#66D9FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.8768 14.6573C19.2362 15.7863 18.0232 16.5486 16.6336 16.5486C15.2198 16.5486 13.9888 15.7595 13.3574 14.598L10.1797 9.09639H20.936C22.2856 9.09639 23.4686 8.37736 24.1223 7.30176L19.8768 14.6573Z" fill="#00BFFF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.91238 3.43819C6.25855 2.36259 5.07562 1.64355 3.72605 1.64355H12.3312C13.6807 1.64355 14.8637 2.36259 15.5175 3.43819L17.6851 7.19047C18.3236 8.32714 19.5408 9.09575 20.9362 9.09575H10.1799L6.91238 3.43819Z" fill="#0086B3"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3312 1.64333C13.6807 1.64333 14.8636 2.36241 15.5175 3.43796L17.6853 7.19035C18.3237 8.32688 19.5409 9.09559 20.9362 9.09559C22.2858 9.09559 23.4687 8.37651 24.1226 7.30097L28.3282 0.018477V0C27.6582 0.99114 26.5241 1.64333 25.2388 1.64333H12.3312Z" fill="#0099CC"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M87.4412 20.3452C89.8065 20.3452 91.791 18.9818 92.4322 17.1607C92.4322 17.1607 91.9728 16.9272 91.4731 16.6719C90.8596 16.3607 90.1122 16.5038 89.6592 17.0206C89.1313 17.6339 88.3614 18.0012 87.4412 18.0012C85.617 18.0012 84.3342 16.5568 84.3342 14.6143C84.3342 12.6095 85.6572 11.2243 87.421 11.2243C88.3269 11.2243 89.126 11.5916 89.6704 12.2142C90.1187 12.7185 90.8481 12.8617 91.4535 12.5659C91.9613 12.3169 92.4322 12.0866 92.4322 12.0866C91.7508 10.1845 89.7865 8.86149 87.4412 8.86149C84.1337 8.86149 81.6704 11.3239 81.6704 14.5925C81.6704 17.8611 84.1539 20.3452 87.4412 20.3452ZM100.311 12.7527C100.311 11.8655 99.5034 11.1402 98.322 11.1464C97.1397 11.1495 96.8019 11.5916 96.2575 12.2142C95.8092 12.7185 95.0798 12.8617 94.4743 12.5659C93.9663 12.3169 93.4953 12.0866 93.4953 12.0866C94.1771 10.1845 96.1413 8.86149 98.4867 8.86149C100.578 8.86149 102.412 10.0818 102.808 12.0367L102.812 12.0523C102.899 12.3729 102.874 12.7496 102.874 13.1076C102.874 13.1076 102.874 16.454 102.874 18.602C102.874 19.43 102.201 20.1056 101.371 20.1056H100.451V18.9039C99.6291 19.8658 98.486 20.3452 97.1422 20.3452C94.6767 20.3452 93.0748 18.9444 93.0748 17.0984C93.0748 15.4766 94.3763 14.1318 96.9417 13.7115L100.311 13.1294V12.7527ZM50.4772 14.2314C50.4772 11.2865 48.2141 8.86149 45.0865 8.86149C41.9583 8.86149 39.5551 11.3052 39.5551 14.5925C39.5551 17.8019 41.878 20.3452 45.2667 20.3452C47.5532 20.3452 49.3556 19.2246 50.0367 17.6401C50.0367 17.6401 49.529 17.391 49.0151 17.1389C48.4675 16.8712 47.8119 16.9583 47.3552 17.363C46.8425 17.8237 46.1487 18.1039 45.287 18.1039C43.6225 18.1039 42.3792 17.0175 42.2185 15.3334H49.3768C49.6688 15.3334 49.9487 15.2182 50.155 15.0127C50.3617 14.8041 50.4775 14.524 50.4775 14.2345C50.4772 14.2314 50.4772 14.2314 50.4772 14.2314ZM77.9822 20.1056H79.0421C79.8724 20.1056 80.5454 19.43 80.5454 18.602C80.5454 15.5886 80.5454 9.10119 80.5454 9.10119H77.9822V20.1056ZM59.3999 20.1056H60.4599C61.2901 20.1056 61.9631 19.43 61.9631 18.602C61.9631 15.5886 61.9631 9.10119 61.9631 9.10119H59.3999V20.1056ZM57.1925 8.9829C55.7693 8.9829 54.6467 9.44362 54.0453 10.7044V9.10119H53.146C52.3154 9.10119 51.6424 9.77673 51.6424 10.6048C51.6424 13.6181 51.6424 20.1056 51.6424 20.1056H52.7024C53.5326 20.1056 54.2056 19.43 54.2056 18.602C54.2056 16.7809 54.2056 13.9512 54.2056 13.9512C54.2056 12.2484 55.2883 11.2647 56.8918 11.2647H58.2749V8.9829H57.1925ZM36.6868 9.10119L33.8608 16.6782C33.8608 16.6782 32.1636 12.127 31.4 10.0787C31.1806 9.49032 30.619 9.10119 29.9914 9.10119C29.2297 9.10119 28.3297 9.10119 28.3297 9.10119C28.3297 9.10119 31.2768 16.4914 32.3411 19.1592C32.569 19.7289 33.1221 20.1056 33.7376 20.1056C33.8129 20.1056 33.8889 20.1056 33.9642 20.1056C34.5796 20.1056 35.1328 19.7289 35.3607 19.1592C36.425 16.4914 39.372 9.10119 39.372 9.10119H36.6868ZM70.4251 11.4048H67.4759C67.4759 11.4048 67.4759 16.1116 67.4759 18.602C67.4759 19.43 66.8026 20.1056 65.9723 20.1056H64.9124V11.4048H62.888V9.10119H64.9124V8.62182C64.9124 6.11277 66.5747 4.71191 69.0595 4.71191C69.3801 4.71191 69.8813 4.7524 70.1618 4.81155C70.1618 4.81155 70.1618 5.55243 70.1618 6.17192C70.1618 6.60462 69.8119 6.95635 69.3801 6.95635C68.1975 6.95635 67.4759 7.51672 67.4759 8.62182V9.10119H72.828V10.7044C73.4295 9.44362 74.552 8.9829 75.9752 8.9829H77.0576V11.2647H75.6745C74.0707 11.2647 72.9883 12.2484 72.9883 13.9512C72.9883 13.9512 72.9883 16.7809 72.9883 18.602C72.9883 19.43 72.3153 20.1056 71.4851 20.1056H70.4251V11.4048ZM97.4631 18.3623C96.4402 18.3623 95.7382 17.9015 95.7382 16.9988C95.7382 16.4167 96.1395 15.7972 97.3025 15.5762L100.311 15.0345V15.7162C100.311 17.2011 99.0878 18.3623 97.4631 18.3623ZM42.2786 13.3909C42.5796 11.8468 43.6826 10.9627 45.0865 10.9627C46.4702 10.9627 47.6332 11.9682 47.7335 13.3909H42.2786ZM59.3999 7.65677H60.4599C60.8587 7.65677 61.2409 7.49803 61.523 7.21475C61.805 6.93458 61.9631 6.55168 61.9631 6.15322C61.9631 5.5493 61.9631 4.99209 61.9631 4.99209H59.3999V7.65677ZM77.9822 7.65677H79.0421C79.4409 7.65677 79.8232 7.49803 80.1052 7.21475C80.3869 6.93458 80.5454 6.55168 80.5454 6.15322C80.5454 5.5493 80.5454 4.99209 80.5454 4.99209H77.9822V7.65677Z" fill="#101010"/>
                            </svg>
                        </span>
                  </div>
              </div>}
              {props.children}
          </div>
      </Transition>
    )
}