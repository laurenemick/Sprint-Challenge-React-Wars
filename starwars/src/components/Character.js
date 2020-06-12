// Write your Character component here
import React from 'react'

export default function Character(props) {
    const { characters } = props

    const Character = ({ info }) => (
        <div className='character'>
          <div className='name'>{info.name}</div>
          <div className='birthyear'> {info.birth_year}</div>
        </div>
      )

    return (
        <div className='characterContainer'>
        {
        characters.map(char => {
          return <Character key={char.name} info={char} />
        })
      }
      </div>
    )
}