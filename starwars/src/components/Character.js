// Write your Character component here
import React from 'react'

export default function Character(props) {
    const { characters } = props

    return (
        <div className='character'>{characters.name}</div>
    )
}