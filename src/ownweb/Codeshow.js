import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
const Codeshows=(prop)=>{
    return(
        <>
        <Highlight {...defaultProps} code={prop.codedata} language="jsx">
   {({  tokens, getLineProps, getTokenProps }) => (
      <pre className="highlighter">
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
        </>
    )
}
export default Codeshows ;