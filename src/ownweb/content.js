import React from "react";
import ReactPlayer from "react-player";

import {exampleCode,codes,codes1} from './codecontent'
import Codeshows from './Codeshow'
const Content = () => {
  
  
  return (
    <>
  
      <div className="content">
        <div className="headercontent">
          <h5>Amazing Content(React context)</h5>
        </div>
        <div className="code">
          
          <div><h3>Context provides a way to pass data through the component tree without having to pass props down manually at every level</h3></div>
          <div>
            <p>
            In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
            </p>
          </div>
          <div>
            <ul>
              <li><strong>When to Use Context</strong></li>
              <li>Before You Use Context</li>
              <li>API 
                <ul>
                  <li>React.createContext</li>
                  <li>Context.Provider</li>
                  <li>Class.contextType</li>
                  <li>Context.Consumer</li>
                </ul>


              </li>
              <li>
              Examples
             <li>Dynamic Context</li> 
              <li> Updating Context from a Nested Component</li>
              <li>Consuming Multiple Contexts</li>
              </li>
            </ul>
            <li>Caveats</li>
            <li>Legacy API</li>
          </div>
          <h3>When to Use Context</h3>
          <div>
            <div>
              <p>
              Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:
              </p>
            </div>
            <div >
            <Codeshows codedata={exampleCode}/>
            </div>

            <div><h3>Using context, we can avoid passing props through intermediate elements:</h3></div>
          </div>
          <div >
          <Codeshows codedata={codes}/>
            </div>
            <div>
              <h3>Before You Use Context</h3>
            </div>
            <div>
              <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
            </div>
            <div>
              <p>If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div> <strong>For example, consider a Page component that passes a user and avatarSize prop several levels down so that deeply nested Link and Avatar components can read it:</strong></div>
            <Codeshows codedata={codes1}/>


        </div>
       
      </div>
    </>
  );
};
export default Content;
