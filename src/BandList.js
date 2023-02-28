import data from './metal.json'
import React from 'react'
import Band from './Band'
import { useState } from 'react'


function BandList(props) {
    const [ query, setQuery ] = useState('');
    const bands = data.filter((obj) => {
        // true if query is in band name
        const inBandName = obj.band_name.toLowerCase().includes(query.toLowerCase())
        // true if query is in style
        const inStyle = obj.style.toLowerCase().includes(query.toLowerCase())
        // true if query is in origin
        const inOrigin = obj.origin.toLowerCase().includes(query.toLowerCase())
        // return true if either is true
        return inBandName || inStyle || inOrigin
      })
      .map((obj) => {
        const { ID, band_name, fans, formed, origin, split, style} = obj

        return (
          <Band
            id={ID}
            key={`${band_name}-${ID}`}
            band_name={band_name}
            fans={fans}
            formed={formed}
            origin={origin}
            split = {split}
            style = {style}
          />
        )
      })

  return (
    <div>
      <div className="BandListForm">
        <div>
          <form>
            <input
              value={query}
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
       
      </div>
      <div className="BandList">
			{bands}
      </div>
      <div className="Footer">
          <hr className="Line"/>
        <small>Vithusha Ravirajan copyright 2023</small>
      </div>
    </div>
  )
}

export default BandList