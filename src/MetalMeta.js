import data from './metal.json'

import React from 'react'



function MetalMeta() {
    const bandCount= data.length;

  return (
    <div className="meta">
        <h2>Metal Bands 🤘</h2>
        <p>Total Bands: {bandCount}</p>
    </div>
  )
}

export default MetalMeta