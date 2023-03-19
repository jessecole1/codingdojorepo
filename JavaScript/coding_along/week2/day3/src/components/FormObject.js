import React, {useState} from 'react';

const FormObject = (props) => {

    

    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        genre:''
    })

    const changeHandler = (e) => {
        // console.log(e.target);
        console.log('NAME', e.target.name);
        console.log('VALUE', e.target.value);
        setShow({...show, [e.target.name]: e.target.value})

    }

    return (
        <div>
            <form>
                <label>Title</label>
                <input type="text" name="title" onChange={changeHandler}/>
                {
                    show.title.length < 3?
                    <p>Title must be 3 characters</p>:
                    null
                }

                <label>Release Year</label>
                <input type="number" name="releaseYear" onChange={changeHandler}/>
                {
                    show.releaseYear < 1920?
                    <p>Show must have started at least in 1920</p>:
                    null
                }

                <label>Genre</label>
                <input type="text" name="genre" onChange={changeHandler}/>
                {
                    show.genre.length < 3?
                    <p>Genre must be 3 characters</p>:
                    null
                }
            </form>
        </div>
    )
}

export default FormObject;