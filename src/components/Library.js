import React from 'react'
import './Style.css'
import llogo from './llogo.svg';
import Songs from './Songs';
export default function Library() {
  return (
    <>
    <div className="library">
      <div className="lib-top">
          <div className="lib-top-left">
              <img src={llogo} alt=""/>
              <h4>Your Library</h4>
          </div>
      </div>
          <Songs/>    
  </div>
    </>
  )
}
