import React from 'react'



function Books({book}) {
  return (
    <div>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <h3>{book.year}</h3>
        <button>Show more</button>
    </div>
  )
}

export default Books