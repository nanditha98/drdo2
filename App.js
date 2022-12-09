// search app
// import './App.css';
// import Search from './component/Search/Search';

// function App() {
//   return (
//     <div className="App">
//      <Search/>
//     </div>
//   );
// }

// export default App;


// import { getPosts } from './component/api/axios'
// import React ,{ useState, useEffect } from 'react'
// import SearchBar from './component/TypeSearch/SearchBar'
// import ListPage from './component/TypeSearch/ListPage'

// function App() {
//   const [posts, setPosts] = useState([])
//   const [searchResults, setSearchResults] = useState([])

//   useEffect(() => {
//     getPosts().then(json => {
//       setPosts(json)
//       setSearchResults(json)
//     })
//   }, [])



//   return (
//     <>
//       <SearchBar posts={posts} setSearchResults={setSearchResults} />
//       <ListPage searchResults={searchResults} />
//     </>
//   )
// }

// export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProducts from "./component/Login/AddProducts";
import Header from "./component/Login/Header";
import Login from "./component/Login/Login";

function App(){
  return(
<div className="App">
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/login" element={<Login/>} />
    Login
    <Route path="/add" element={<AddProducts/>}/>
    </Routes>
  </BrowserRouter>
</div>
  )
}
export default App;