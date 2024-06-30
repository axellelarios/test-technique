import { useState } from 'react'
import './App.css'
import Data from './assets/data.json'

function App() {
  const [movie, setMovie] = useState("")

  const getMovie = (movieId) => {
    const currentMovie = Data.find(movie => movie.id === movieId);
    setMovie(currentMovie);
  }

  return (
    <>
      <header></header>
      <main>
        <section style={{backgroundImage: "url(" + movie.background + ")"}} className='movie-card'>

          <div className='buttons_wrapper'>
          {Data.map((moviePicked, index) => {
            const movieId = moviePicked.id
            return <button key={index} style={{background : movieId === movie.id ? "#a70062" : "black"}} onClick={() => {getMovie(movieId);}}>{moviePicked.name}</button>
          })}
          </div> 

          <div className='movie-content'>
              <h2>{movie.name}</h2>
              <div className='movie-actors_wrapper'>

              { 
                movie.actors? 
                  movie.actors.map((actor, index) => { 
                    return (
                    <div key={index} style={{backgroundImage: "url(" + actor.picture + ")"}}>
                      <h3>{actor.name}</h3>
                    </div> 
                  )}) 
                : <div className='no-result'> Choississez sur un film </div>
              }
           
              </div>
          </div>

        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
