import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App'


const NewElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', key: 'anchor' },
  'visit here',
)

const divElement = React.createElement(
  'div',
  {
    className: 'container', id: 'wrapper', key: 'wrapper'
  },
  React.createElement(
    'span',
    {
      className: 'child-element', id: 'children-span', key: 'span-child'
    },
    'This is a Spant element wrapped under a div.'
  )
)

const elements = [NewElement, divElement];
// const root = createRoot(document.getElementById('root'));
// root.render(NewElement);


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);