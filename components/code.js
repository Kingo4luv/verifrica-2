import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import HomeCode from '../markdown/home.js';
const CodeComponent = () => {
    return(
        <div className="w-full rounded-lg" style={{backgroundColor: '#000'}}>
            <div className="h-16 w-full flex items-center px-5 space-x-3">
                <span className="w-3 h-3 bg-yellow rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="scrolling-wrapper overflow-auto h-96 lg:h-100 rounded-b-lg">
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
    )
}

export default CodeComponent;