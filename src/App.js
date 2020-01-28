import React from 'react';
import Proptypes from "prop-types";

const albumILike = [
  {
    id: 1,
    name: "Coexist",
    image: "https://direct.rhapsody.com/imageserver/images/alb.64898384/500x500.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "Loveless",
    image: "https://www.nme.com/wp-content/uploads/2016/09/18.Mybloodyvalentine_lovelss_161013-1.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Dive",
    image: "https://s.yimg.com/uu/api/res/1.2/Y7agk1oAwjYNU8KHPBLtMA--~B/aD0yMDQ4O3c9MjA0ODtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en_US/News/US-AFPRelax/dive.086a5104652.original.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Sports",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Tokyo_Sports.jpg",
    rating: 3.8
  },
]

function Album ({ name, picture, rating }) {
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Album.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
}

function App() {
  return (
    <div> 
      {albumILike.map(music => (
          <Album key={music.id} name={music.name} picture={music.image} rating={music.rating}/>
      ))}
    </div>
  )};


export default App;
