import React from 'react'
import './Style.css'
import accounts2 from './account2.jpg'
import leftico from './left-arrow-icon.svg'
import rightico from './right-arrow-icon.svg'
export default function Topbar() {
  return (
    <div className="top">
                    <div className="top-left">
                        <div className="arr-left">
                            <img src={leftico} alt="Previous"/>
                        </div>
                        <div className="arr-right">
                            <img src={rightico} alt="Next"/>
                        </div>

                    </div>
                    <div className="top-right">
                        <div className="account">
                            <img className="acc1" src={accounts2} alt="User Profile Image"/>
                        </div>
                    </div>
                </div>
  )
}
