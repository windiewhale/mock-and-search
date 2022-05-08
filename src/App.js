import { useEffect, useState } from "react";
import Books from "./Books";
import LoadingMask from "./LoadingMask";
import { Button } from "@mui/material";
import { TextField } from "@mui/material"

function App() {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState("desc")
   
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

  function sortBooks() {
    setBooks([...books.sort((a,b) => sort === "desc" ? b.year-a.year : a.year-b.year)])
    setSort(sort === "desc" ? "asc" :"desc")
  }
  
  return (
    <div className="App">
      {loading ? <LoadingMask /> : 
        <>
        <Button 
          variant="contained"
          onClick={sortBooks}
        >sort</Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={({target})=>setInput(target.value)}/>
        {books.map(({title, author, year}) =>(title.toLowerCase().includes(input.toLowerCase())) && <Books key={year} 
          title={title}
          author={author}
          year={year}
          />)}
      </>
      }
    </div>
  );
}

export default App;
