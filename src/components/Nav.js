import React from 'react'
import './Style.css'
import logo from './logo.svg';
import home from './home.svg';
import search from './search.svg';
export default function Nav() {
  return (
    
    <div className="home">
    <div className="logo">
        <img src={logo} alt=""/>
    </div>
    <div className="h-and-l">
        <ul>
            <li><img src={home} alt="Home"/>Home</li>
            <li><img src={search}alt="Search"/>Search</li>
        </ul>
    </div>
   </div>
  )
}
