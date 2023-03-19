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

                <label>Release Year</label>
                <input type="number" name="releaseYear" onChange={changeHandler}/>

                <label>Genre</label>
                <input type="text" name="genre" onChange={changeHandler}/>
            </form>
        </div>
    )
}

export default FormObject;