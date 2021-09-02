import React from 'react'
import Wave from 'react-wavify'

export default function Spacer(props) {
    const {bgColor} = props

    const renderWaves = () =>{
        return(
            bgColor.map((data,index) =>{
                return(
                    <Wave 
                    className = "wavePos"
                    fill={data}
                    paused={false}
                    options={{
                    height: 50,
                    amplitude: 30,
                    speed: 0.15,
                    points: 5
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
