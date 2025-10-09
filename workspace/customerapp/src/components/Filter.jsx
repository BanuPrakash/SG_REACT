import React from 'react'

export default function Filter(props) {
  return (
    <input type="text" placeholder="search by name" onChange={(evt) => props.filterData(evt.target.value)}/>
  )
}
