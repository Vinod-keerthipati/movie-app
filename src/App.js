import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import axios from "axios"
import Main from './Main';
import Search from './Search';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const movie = "movie"; const tv = "tv";
  const [type, settype] = useState(movie);





  function search() { }




  return (
    <div className='full m-0 p-0  '   >
      <div className=' bg-dark header  d-flex justify-content-center' >
        <div className='container '>
          <div className='ml-0 row d-flex justify-content-center'>
            <div className='col-6 p-0 d-flex justify-content-end'>
              <h1 className=" font-weight-bold movie  mt-2" style={{textShadow:'2px 2px #dc3545'}}>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-camera-reels pb-1 pr-1 text-danger " style={{border:'3px white'}} viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg></span>
                MOVIE </h1>
            </div>
            <div className=' col-5 p-0 d-flex justify-content-start'>
              <h1 className=" pl-1  heist text-danger font-weight-bold mt-2 " style={{textShadow:'1px 1px white'}}> HEIST </h1>
            </div>
          </div>
        </div>
      </div>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main props={type} />}/>
      <Route path="/search" element={<Search/>}/>
      
      </Routes>

        <div className=' foot bg-dark text-center d-flex flex-column justify-content-center '>
          <div>
            <Link to='/'>
              <button onClick={() => { settype(movie); console.log(type) }} style={{ marginRight: "5vw" }} type="button" className="button_hover btn btn-danger  border-0">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-film mb-1 mr-2 " viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                  </svg>
                </span>
                Movies
              </button>

            </Link>


            <Link to='/'>
              <button onClick={() => settype(tv)} id='tv' style={{ marginRight: "4vw" }} type="button" className=" button_hover btn btn-danger  border-0">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tv mb-1 mr-2 " viewBox="0 0 16 16">
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                  </svg>
                </span>
                TV Show
              </button>

            </Link>


            <Link to='/search'>
              <button onClick={search} id='serach' type="button" className=" rounded button_hover btn btn-danger  border-0">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>

              </button>

            </Link>


          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
