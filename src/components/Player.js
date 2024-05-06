import React from 'react'
import './Style.css'
import liked from './liked.jpg'
import previous from './previous.svg'
import play from './play.svg'
import pause from './pause.svg'
import forward from './forward.svg'
import volume from './volume.svg'
export default function Player() {
  return (<>

    <div class="bottom-section-left">
            <div class="img-corner">
                <img class="bottom-section-img" src={liked} alt=""/>
            </div>
            <div class="text-section">
                <div class="song-name">
                    <h4 id="song-title-bar">Suzume</h4>
                </div>
            </div>
        </div>
        <div class="bottom-section-middle">
            <button class="func-button"><img src={previous} alt=""/></button>
            <button class="func-button" id="playing-song"><img src={play} alt=""/></button>
            <button class="func-button"><img src={forward} alt=""/></button>
        </div>
        <div class="bottom-section-right">
            <button class="func-button"><img src={volume} alt=""/></button>
        </div>
        </>
  )
}
