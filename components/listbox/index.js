import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function ListButton({last, items, title, input, listChanged}) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    let data = {input, selected: selected.name }
    listChanged(data);
  }, [selected])

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className={`${last ? open ? 'rounded-none':'rounded-b':'rounded-none'} appearance-none text-left relative block w-full px-3 py-[14px] sm:py-4 border-b border-l border-r border-t-0 border-[#D1D1D1] placeholder-form-text-grey text-form-text-grey focus:outline-none focus:ring-blue focus:border-blue focus:z-10 text-sm`}>
                <span className={`block truncate ${selected === "" ?"":"text-black"}`}>{selected === "" ? title : selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon
                    className="w-7 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className = "absolute w-full py-1 overflow-auto border-r border-l border-b border-[#D1D1D1] text-base bg-white max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
                >
                  {items.map((item, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-black bg-[#F5F5F5]"
                            : "text-form-text-grey"
                        }
                          cursor-default select-none relative py-4 px-4`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <div className="flex justify-between items-center w-full">
                          <span
                            className={`${
                              selected ? "font-normal text-black" : "font-normal"
                            } block truncate text-sm`}
                          >
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-blue" : "text-blue"
                              }
                                `}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
