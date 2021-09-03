import React from 'react'
import Wave from 'react-wavify'
import getRandomInteger from "./../helpers/helpers"
export default function Spacer(props) {
    const {bgColor} = props

    const renderWaves = () =>{
        return(
            bgColor.map((data,index) =>{
                const waveCount =  getRandomInteger(index);
                return(
                    <Wave 
                    className = "wavePos"
                    fill={data}
                    paused={false}
                    options={{
                    height: 50,
                    amplitude: 30,
                    speed: 0.15,
                    points: waveCount
                    }}
                />
                )
            })
        )
    }
    
    return (
        <div className = "spacerDiv svg1">
            {renderWaves()}
        </div>
    )
}
