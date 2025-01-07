import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import P1 from './port.jsx'

// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'click me to visit google'
// }
// const anotharElement = ( 
//   <a href="https://google.com" target="_blank">visit google</a>
// )

const ReactElement = React.createElement =
(
 'a',
  {href:'https://google.com',target:'_blank'},
  "click me to visit google"
);
createRoot(document.getElementById('root')).render(
  
    //  <P1/>
    //  anotharElement
    ReactElement
 
)
