import React, {useState} from 'react';

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [releaseYear, setReleaseYear] = useState(1920)
    const [genre, setGenre] = useState('')

    // e is short for event
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleReleaseYear = (e) => {
        setReleaseYear(e.target.value)
    }

    const handleGenre = (e) => {
        setGenre(e.target.value)
    }

    return (
        <div>
            <form>
                <label>Title</label>
                <input type="text" name="title" onChange={handleTitle}/>

                <label>Release Year</label>
                <input type="number" name="releaseYear" onChange={handleReleaseYear}/>

                <label>Genre</label>
                <input type="text" name="genre" onChange={handleGenre}/>
            </form>
        </div>
    )
}

export default Form;