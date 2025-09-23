import './App.css'
import { useState,useEffect } from 'react'

function App() {
const [books,setBooks] = useState([]);
  
useEffect(() => {
  fetchBooks();
},[])

//取的所有書籍
function fetchBooks(){
  fetch("http://localhost:8080/api/books")
      .then((response)=>{
          if(!response.ok){
            throw new Error("網路回應錯誤");
          }
          return response.json();
              }) //網路回應
      .then((jsonData)=>{
        setBooks(jsonData.data);
      }) //資料處理
      .catch((error)=>{
        console.log(error);
        alert(error);
      })  //錯誤處理
}

return(
     <>
   <h1>My Book書籍列表</h1>
    <h2>
      {books.length}筆
      <ul>
        {
          books.map((book)=>{
            return(<li key={book.id}>{book.name} ${book.price} {book.amount}本 {book.pub === true ? "出版中":"已絕版"}</li>)
          })
        }
      </ul>
    </h2>
  </>
  )
}

export default App
