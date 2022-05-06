import React, { useState } from 'react'



function Books({title, author, year}) {

    const [details, setDetails] = useState(false)

  return (
    <div>
        <h2>{title}</h2>
        {details ? 
        <>
            <h3>{author}</h3>
            <h3>{year}</h3>
        </> : null
        }
        <button onClick={()=>{setDetails(!details)}}>{details ? "hide" : "show"}</button>
    </div>
  )
}

export default Books