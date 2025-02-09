import React from 'react'
import './Jeans.css'

export const Jeans = () => {
    return (
        <div>
            <header>
                <h1> jeans</h1>
            </header>
            <div class="canvas">
                <div class="jeans">
                    <div class="ceinture">
                        <div class="anneau"></div>
                        <div class="bouton">
                            <div class="bouton-trou"></div>
                        </div>
                        <div class="anneau"></div>
                    </div>
                    <div class="poche-container">
                        <div class="poche left"></div>
                        <div></div>
                        <div class="poche right"></div>
                    </div>
                    <div class="couture-middle"></div>
                    <div class="couture-leg"></div>
                </div>
                <div class="triangle"></div>
            </div>
        </div>
    )
}
