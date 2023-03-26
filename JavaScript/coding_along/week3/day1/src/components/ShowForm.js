import React, {useState} from 'react';
const ShowForm = (props) => {
    console.log(props)
    const {showList, setShowList} = props
    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        genre:''
    })

    const changeHandler = (e) => {
        setShow({...show, [e.target.name]:e.target.value})
    }

    // A submit function 
    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`this is the new show ${show}`);
        setShowList([...showList, show])
        setShow({
            title:'',
            releaseYear:1920,
            genre:''
        })
    }

    return (
        <div>
            <form className='show-form' onSubmit={submitHandler}>
                <h1>Add Your Favorite TV Show!</h1>

                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler} value={show.title}/>
                    {
                        show.title.length > 0 && show.title.length < 3?
                        <p>The title must be 3 or more characters</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseYear" onChange={changeHandler} value={show.releaseYear}/>
                    {
                        show.releaseYear < 1920?
                        <p>The relase must be 1920 or newer</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={changeHandler} value={show.genre}/>
                    {
                        show.genre.length > 0 && show.genre.length < 3?
                        <p>The genre must be 3 or more characters</p>:
                        null
                    }
                </div>
                <button>Add Show</button>
            </form>
        </div>
    )
}

export default ShowForm;