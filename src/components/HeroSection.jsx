import React from "react"

export default function HeroSection({title, description, image}){
    return (
        <div className="hero">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="imgDiv">
                  <img src={image} />
                </div>
              </div>
    )
}