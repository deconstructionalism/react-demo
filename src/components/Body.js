import React from 'react'

import DogRow from './DogRow'
import GetDogsForm from './GetDogsForm'

import '../styles/Body.css'

const Body = props => {
  const DogRows = props.dogInfo.map((dog, i) => {
    return (<DogRow key={i}
            breed={dog.breed}
            url={dog.url}
      />)
    })

  return (
    <div className="contents">
      <p className="intro">
        {props.bodyText}
      </p>
      <GetDogsForm numDogs={props.numDogs}
                   setNumDogs={props.setNumDogs}
                   getDogs={props.getDogs}
                   getDogsError={props.getDogsError}/>
      {DogRows}
    </div>
  )
  
}

export default Body