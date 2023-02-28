// import data from './metal.json'

import React from 'react'
import Like from './Like'

function Band(props) {
    const { band_name, origin, fans, formed, split, style} = props
    const fanString = (Number(fans) * 1000).toLocaleString('en')
    const styleArray = style.split(',')
    // eslint-disable-next-line array-callback-return
    const styles = styleArray.map( (styleval) => 
             <li> {styleval.trim()} </li>
    )
    return (
        <div className="band">
            <h1>{band_name}</h1>
            <p><strong>Origin: </strong> {origin}</p><br/>
            <p><strong>Fans: </strong> {fanString}</p><br/>
            <p><strong>Formed: </strong> {formed}</p><br/>
            <p><strong>Split: </strong> {split}</p><br/>
            
            <div className='styles'>
            <p className='styles-heading'><strong>Styles: </strong></p>
                <ul className='style-ul'>
                    {styles}
                </ul>
            </div>
             {!(split === '-') ? <Like/> : null}
        </div>

    )
  }
 

export default Band