import React from 'react';
import ReactDOM from 'react-dom/client';
import './Main.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Movie_details from './Movie_details';




function Main(props) {


  const [id, setid] = useState('667739');

  const [trending, settrending] = useState([]);
  const [toprated, settoprated] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);


  function popup(e) {

    console.log('why', e);
    setid(e);


    document.getElementById('popup').classList.remove('d-none');
    document.getElementById('popup').classList.add('d-flex');

  }




  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/' + props.props + '/week?api_key=9a283f1770c903854bb7d3d32dedda29&page=1').
      then(res => res.data.results).then(data => { settrending(data) })
  }, [props.props]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/' + props.props + '/top_rated?api_key=9a283f1770c903854bb7d3d32dedda29').
      then(res => res.data.results).then(data => { settoprated(data) })
  }, [props.props]);

  useEffect(() => {
    if (props.props == 'movie') {
      axios.get('https://api.themoviedb.org/3/' + props.props + '/now_playing?api_key=9a283f1770c903854bb7d3d32dedda29').
        then(res => res.data.results).then(data => { setnowplaying(data) })
    }
    else {
      axios.get('https://api.themoviedb.org/3/' + props.props + '/on_the_air?api_key=9a283f1770c903854bb7d3d32dedda29').
        then(res => res.data.results).then(data => { setnowplaying(data) })
    }
  }
    , [props.props]);


  //console.log(trending)

  return (

    <div style={{ backgroundColor: '#454d54' }} >



      <div className='mt-5 pt-3 '>
        <h2 className='trending title p-1 mr-0 rounded mt-2 ml-4  font-weight-bold' style={{ textShadow: '1px 1px 1px  #c7ccd1' }}> Trending</h2>
      </div>

      <div className=' p-0 ml-4 mr-4  d-flex  justify-content-start ' style={{ overflow: "auto" }}>
        <div className='d-flex  justify-content-start' >

          {trending.slice(0, 50).map((e) => {
            return (
              <div className='  card  m-2 d-flex flex-column justify-content-center align-items-center ' key={e.id}>
                <button onClick={() => popup(e.id)} type="button" class=" button rounded ">
                  <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} className='poster rounded' alt="Italian Trulli" />
                </button>
              </div>);
          })
          }

        </div>
      </div>



      <div className='mt-0 pt-3 '>
        <h2 className='trending title p-1 mr-0 rounded mt-2 ml-4 font-weight-bold' style={{ textShadow: '1px 1px 1px  #c7ccd1' }}> Top Rated</h2>
      </div>

      <div className=' p-0 ml-3  mr-3   d-flex  justify-content-start ' style={{ overflow: "auto" }}>
        <div className='d-flex  justify-content-start' >

          {toprated.slice(0, 50).map((e) => {
            return (
              <div className='  card  m-2 d-flex flex-column justify-content-center align-items-center ' key={e.id}>
                <button onClick={() => popup(e.id)} type="button" class=" button rounded ">
                  <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} className='poster rounded' alt="Italian Trulli" />
                </button>
              </div>);
          })
          }

        </div>
      </div>


      <div className='mt-0 pt-3 '>
        <h2 className='trending title p-1 mr-0 rounded mt-2 ml-4 font-weight-bold' style={{ textShadow: '1px 1px 1px  #c7ccd1' }}> Now Playing</h2>
      </div>

      <div className=' p-0 ml-3 mb-5 mr-3   d-flex  justify-content-start ' style={{ overflow: "auto" }}>
        <div className='d-flex  justify-content-start' >

          {nowplaying.slice(0, 50).map((e) => {
            return (
              <div className='  card  m-2 d-flex flex-column justify-content-center align-items-center ' key={e.id}>
                <button onClick={() => popup(e.id)} type="button" class=" button rounded ">
                  <img src={"https://image.tmdb.org/t/p/original" + e.poster_path} className='poster rounded' alt="Italian Trulli" />
                </button>
              </div>);
          })
          }

        </div>
      </div>

      <br></br>


      <Movie_details id={id} type={props.props} />



    </div>


  );


}

export default Main;