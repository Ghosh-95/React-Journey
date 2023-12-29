import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx';
import Content from './Items.jsx';
import Footer from './Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
)
