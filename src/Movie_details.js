import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css';
import axios from "axios";
import { useEffect, useState } from 'react';





function Movie_details(props) {


  //console.log(props)

  const [movie_details, setmovie_details] = useState([])
  const [cast_details, setcast_details] = useState([])
  const [crew_details, setcrew_details] = useState([])
  const [genres, setgenres] = useState([])
  const [movie_key, setmovie_key] = useState([])


  var k;

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/' + props.type + '/' + props.id + '?api_key=9a283f1770c903854bb7d3d32dedda29').
      then(data => { setmovie_details(data.data); setgenres(data.data.genres) })
  }, [props]);


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/' + props.type + '/' + props.id + '/credits?api_key=9a283f1770c903854bb7d3d32dedda29').
      then(data => { setcast_details(data.data.cast) })
  }, [props]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/' + props.type + '/' + props.id + '/credits?api_key=9a283f1770c903854bb7d3d32dedda29').
      then(data => { setcrew_details(data.data.crew) })
  }, [props]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/' + props.type + '/' + props.id + '/videos?api_key=9a283f1770c903854bb7d3d32dedda29').
      then(data => { setmovie_key(data.data.results.filter(e => e.official == true && e.type == "Trailer")) })
  }, [props]);




  console.log(movie_key, 909)

  function close() {


    document.getElementById('popup').classList.remove('d-flex');
    document.getElementById('popup').classList.add('d-none');

  }



  return (

    <div id='popup' className='popup flex-column d-none  align-items-center mb-2 pb-5' style={{ borderRadius: '25px' }} >
      <div className='container mb-2 ' style={{ borderRadius: '25px' }}>
        <div className='row  bg-dark  d-flex  justify-content-center' style={{ borderRadius: '25px' }}>
          <div className=' col-12  d-flex mt-1  justify-content-end ' style={{ borderRadius: '25px' }} >
            <div>
              <button type="button" onClick={close} style={{ height: '30px' }} className=" pt-0 bg-dark  p-0 btn d-flex flex-clolumn justify-content-start ">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" fill="currentColor" class="bi bi-x text-white" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </button>

            </div>


          </div>
          <div className='col-12 col-lg-6   pb-5 ' >

            <img src={'https://image.tmdb.org/t/p/original' + movie_details.backdrop_path} className='image shadow-lg' alt="Italian Trulli" />

            <h4 id="movie_name" className='text-white mt-1 orgtitle'> {movie_details.original_title || movie_details.original_name} </h4>

            <h6 className='text-white mt-3 text-secondary m-0'> IMDB - {movie_details.vote_average}/10</h6>
            <div className='d-flex m-0'>
              <h6 className='text-white mt-1 text-secondary m-0 mr-1'> Genres : </h6>
              {genres.slice(0, 4).map((e) => {
                return (
                  <h6 className='text-white mt-1 text-secondary m-0 mr-2'>  {e.name}, </h6>

                );
              })}


            </div>

            {movie_key.slice(0, 1).map((e) => {
              return (

                <div className='bg-danger text-center mt-4 p-1 ' style={{ borderRadius: '7px' }} >
                  <a tabindex="0" aria-disabled="false" target="__blank" href={`https://www.youtube.com/watch?v=${e.key}`} className=' text-center '>
                    <span className='text-white font-weight-bold'>     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg> Watch Tariler </span> </a>
                </div>

              );
            })}









          </div>
          <div className='col-12 col-lg-6 '>

            <h4 className='text-secondary' style={{ textShadow: '1px 2px black' }}> Overview </h4>
            <p className='text-white'>{movie_details.overview}</p>
            <h4 className='text-secondary' style={{ textShadow: '1px 2px black' }}> Cast</h4>

            <div className=' pop_scroll p-0 d-flex  justify-content-start ' style={{ overflowY: "hidden", overflowX: "scroll"}}>
              <div className='d-flex   rounded justify-content-start'  >


                {cast_details.slice(0, 20).map((e) => {
                  if (e.profile_path !== null) {
                    return (
                      <div className='  pop_card mr-3  d-flex flex-column justify-content-start align-items-center  ' key={e.id + e.profile_path}>
                        <button type="button" class="pop_button  shadow-lg" style={{ borderRadius: '25px' }}>
                          <img src={"https://image.tmdb.org/t/p/original" + e.profile_path} className='poster  shadow-sm' style={{ borderRadius: '20px' }} alt="not found" />
                        </button>
                        <p className='m-0 text-center text-white'>{e.name}</p>

                      </div>);
                  }
                })
                }


              </div>
            </div>

            <br></br>



            




          </div>
        </div>
      </div>
    </div>




  );



}


export default Movie_details;
