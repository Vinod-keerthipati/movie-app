import React from 'react';
import ReactDOM from 'react-dom/client';
import './Search.css';
import './Main.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Movie_details from './Movie_details';

function Search() {

  const [query, setquery] = useState('a');

  console.log(query)

  const [type, settype] = useState('');

  const [id, setid] = useState('667739');


  function popup(e, f) {


    setid(e);
    settype(f);

    console.log(f, e);
    document.getElementById('popup').classList.remove('d-none');
    document.getElementById('popup').classList.add('d-flex');

  }



  const [trending, settrending] = useState([]);
  const [movies, setmovies] = useState([]);
  const [tv, settv] = useState([]);



  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=9a283f1770c903854bb7d3d32dedda29&query=' + query + '&page=1&include_adult=false').
      then(res => res.data.results).then(data => { setmovies(data) })
  }, [query]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=9a283f1770c903854bb7d3d32dedda29&query=' + query + '&page=1&include_adult=false').
      then(res => res.data.results).then(data => { settv(data) })
  }, [query]);

  console.log(tv, movies)

  return (


    <div className='pb-5 ' style={{ backgroundColor: '#454d54' }}>
      <h1 className=''> search...</h1>
      <br></br>

      

     <div className='d-flex  justify-content-end mr-5'>

      <div className='d-flex bg-danger rounded'>

        <input type='text' id="query" placeholder='Search here ...' className='text-center rounded' ></input>
<div>

<button onClick={()=> setquery(document.getElementById('query').value)} id='serach' type="button" className=" rounded p-1 ml-0 btn btn-danger" >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search m-0 p-0 " viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>

              </button>
</div>
        

      </div>



     </div>

      <div className='mt-0  '>
        <h2 className='trending title p-1 mr-0 rounded  ml-4 font-weight-bold' style={{ textShadow: '1px 1px 1px  #c7ccd1' }}> Movies </h2>
      </div>

      <div className=' p-0 ml-3 mr-3  d-flex  justify-content-start ' style={{overflowY: "visible", overflowX: "scroll",height:'220px' }} >
        <div className='d-flex  justify-content-start' >

          {movies.slice(0, 50).map((e) => {
            if (e.poster_path !== null) {
              return (
                <div className='  card  m-2 d-flex flex-column justify-content-center align-items-center ' key={e.id}>
                  <button onClick={() => popup(e.id, 'movie')} type="button" class=" button rounded ">
                    <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} className='poster rounded' alt="Italian Trulli" />
                  </button>
                </div>);
            }
          })
          }

        </div>
      </div>


      <div className='mt-0 '>
        <h2 className='trending title p-1 mr-0 rounded mt-2 ml-4 font-weight-bold' style={{ textShadow: '1px 1px 1px  #c7ccd1' }}> Tv Shows</h2>
      </div>

      <div className='  ml-3 mr-3 mb-2  d-flex  justify-content-start ' style={{overflowY: "visible", overflowX: "scroll",height:'220px' }}>
        <div className='d-flex  justify-content-start' >

          {tv.slice(0, 50).map((e) => {
            if (e.poster_path !== null) {
              return (
                <div className='  card  m-2 d-flex flex-column justify-content-center align-items-center ' key={e.id}>
                  <button onClick={() => popup(e.id, 'tv')} type="button" class=" button rounded ">
                    <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} className='poster rounded' alt="Italian Trulli" />
                  </button>
                </div>);
            }
          })
          }

        </div>
      </div>




      <Movie_details id={id} type={type} />



    </div>



  );


}


export default Search;