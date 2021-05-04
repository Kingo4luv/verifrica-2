import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import HomeCode from '../../markdown/home.js';
import Link from "next/link";
import LinkButton from '../../components/button/LinkButton';
import Slide from 'react-reveal/Slide'


const ForDevelopersSection = () => {
    return(
        <section className="py-12 lg:py-28 bg-client-grey">
          <div className="flex flex-col sm:flex-row mx-auto max-w-[1100px]">
            <div className="w-full sm:w-1/2 flex justify-center items-center py-12 lg:py-32">
              <div className="w-full flex flex-col justify-center px-4">
                <div className = "space-y-12 sm:px-0 box-border md:max-w-md xl:max-w-lg" >
                    <dl className="text-black space-y-8">
                      <Slide bottom>
                      <dt className="text-2xl md:text-headline-5 lg:text-headline-4 font-bold leading-normal">For developers, by developers</dt>
                      </Slide>
                      <Slide bottom>
                      <dd className="font-light text-subtitle-3 sm:text-subtitle-2 text-grey max-w-md">
                        Verifrica provides developers with access to tools, documentation, and resources on how to access data and financial accounts across Africa 's various banking channels, through our easy and reliable APIs. 
                      </dd>
                      </Slide>
                    </dl>
                    <div className="w-full lg:w-3/5">
                      <Slide bottom>
                      <LinkButton color="secondary" url="/" text="Read our API documentation" />
                      </Slide>
                    </div>
                  </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center px-4 py-12 md:py-0">
              <div className="w-full rounded-lg" style={{backgroundColor: '#000'}}>
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
          </div>
        </section>
    )
}

export default ForDevelopersSection;