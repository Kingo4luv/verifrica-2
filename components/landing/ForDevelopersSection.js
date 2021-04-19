import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import HomeCode from '../../markdown/home.js';
import Link from "next/link";
import Slide from 'react-reveal/Slide'


const ForDevelopersSection = () => {
    return(
        <section className="py-12 md:py-40 flex flex-col md:flex-row bg-client-grey overflow-x-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center py-12 lg:py-32 px-4 lg:px-0">
          <div className="w-full md:w-full lg:w-3/5 flex flex-col justify-center items-center">
            <div className="space-y-12 px-0 md:px-4 sm:px-0 box-border">
              <dl className="text-black space-y-8">
                <Slide bottom>
                <dt className="text-2xl md:text-4xl font-bold leading-normal">For developers, by <br/> developers</dt>
                </Slide>
                <Slide bottom>
                <dd className="font-light pr-0 md:pr-12 text-sm md:text-base text-grey">
                  Verifrica provides developers with access to tools, documentation, and resources on how to access data and financial accounts across Africa 's various banking channels, through our easy and reliable APIs. 
                </dd>
                </Slide>
              </dl>
              <div>
                <Slide bottom>
                <Link href="/" className="block">
                  <a className="px-16 py-4 rounded text-sm font-medium text-black block sm:inline tracking-wide mt-6 border border-black">Read our API documentation</a>
                </Link>
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center px-4 py-12 md:py-0">
          <div className="w-full md:w-full lg:w-4/5 rounded-lg" style={{backgroundColor: '#000'}}>
            <div className="h-16 w-full flex items-center px-5 space-x-3">
              <span className="w-3 h-3 bg-yellow rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="scrolling-wrapper overflow-auto h-96 rounded-b-lg">
              <Highlight {...defaultProps} theme={theme} code={HomeCode} language="jsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ForDevelopersSection;