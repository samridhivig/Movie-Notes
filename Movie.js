import React from "react";

function Movie({title, imgUrl}) {
    return(
        <div className="movie">
            <img className="movie__image" src={imgUrl} alt={title}></img>
            <h4 className="movie__title">{title}</h4>
        </div>
        
    );
}

export default Movie 