import { useEffect, useState } from "react";
import Books from "./Books";
import LoadingMask from "./LoadingMask";

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
      {loading ? <LoadingMask /> : 
        books.map(book => <Books 
          book={book} />
        )
      }
      
    </div>
  );
}

export default App;
