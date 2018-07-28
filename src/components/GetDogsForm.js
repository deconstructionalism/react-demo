import React from 'react'

import '../styles/GetDogsForm.css'

import ErrorPanel from './ErrorPanel'

const GetDogsForm = props => {

  const numDogsChange = e => {
    const { target } = e
    const numDogs = parseInt(target.value, 10)
    props.setNumDogs(numDogs)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.getDogs()
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend> Number of Dogs to Display </legend>
      <input value={props.numDogs}
              onChange={numDogsChange}
              name="num-dogs"
              type="number"
              min="0"
              pattern="\d*"/>
      <button type="submit">Submit</button>
      { props.getDogsError 
        ? <ErrorPanel errorMsg="Unable able to get dogs from server! Try again later!"/>
        : null
      }
    </form>
  )
}

export default GetDogsForm