import React, {useState} from 'react';

const DisplayShows = (props) => {
    const {showList, setShowList} = props
    return (
        <div>
            {
                showList.map((x,idx) => (
                    <div>
                        <h2>Title: {x.title}</h2>
                        <h2>Release Year: {x.releaseYear}</h2>
                        <h2>Genre: {x.genre}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayShows;