// Write your Character component here
import React from 'react'
import DivStyling from './divStyling'

export default function Character(props) {
    const { characters } = props

    const EachCharacter = ({ info }) => (
        <DivStyling className='character'>
          <div className='name'>{info.name}</div>
          <div className='birthyear'> {info.birth_year}</div>
        </DivStyling>
      )

    return (
        <div className='characterContainer'>
        {
        characters.map(char => {
          return <EachCharacter key={char.name} info={char} />
        })
      }
      </div>
    )
}