import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  
  async function fetchBooks () {
    const response = await fetch("https://www.bullshit.com/v1/api/books")
    const resJSON = await response.json()
    console.log(resJSON); 

    setBooks(resJSON)
    setLoading(false)
  }

  useEffect(() => { 
    setLoading(true)
    fetchBooks()
  }, [])
  
  return (
    <div className="App">
      {loading ? "under construction" : 
        books.map(book => <div><h2>{book.title}</h2>{book.author}{book.year}
          </div>)
      }
      
    </div>
  );
}

export default App;
