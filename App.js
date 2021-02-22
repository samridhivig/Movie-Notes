import './App.css';
import { Button, Modal, Input } from '@material-ui/core';
import Movie from './Movie'
import React, { useEffect, useState } from 'react';
import fire from "./firebase"


function App() {
  const [imgUrl, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [modal, setModal] = useState(false)
  const [movies, setMovies] = useState([])


  useEffect(() => {
    //retrieving from the database 
    fire.database().ref("movies").on("value", snapshot => {
      let movies = [];
      snapshot.forEach(snap => {
        console.log(snap.val)
        movies.push(snap.val());
      })
      setMovies(movies);
    });
  }, [])

  //adding to the database
  const addMovie = (title, imgUrl) => {
    console.log(title, imgUrl)
    let messageRef = fire.database().ref("movies").orderByKey();
    fire.database().ref("movies").push({name:title, url:imgUrl});
    setTitle("")
    setUrl("")
  }

  return (
    <div className="app">
      <div className="app__header">
        <h2 className="app__logo"> Movie Notes </h2>
        <Button variant="contained" color="primary" onClick={() => setModal(true)}>Add Movie</Button>
      </div>
      <div className="app__body">
      <Modal
        open={modal}
        onClose={() => setModal(false)}>
        <div className= "form" >
          <Input 
            placeholder="Poster URL"
            type="text"
            onChange={(event) => {setUrl(event.target.value)}}
            />
          <Input 
            placeholder="Movie Name"
            type="text"
            onChange={(event) => {setTitle(event.target.value)}}
            />  
          <Button variant="contained" color="primary" type="submit" onClick={() => {addMovie(title, imgUrl)}}>Submit</Button>
        </div>
      </Modal>
      {
        movies.map(movie => (
          <Movie title={movie.name} imgUrl={movie.url} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
