import React, {useState} from 'react'

const BoxForm = (props) => {
    // props will always be an object
    // always empty if nothing is passed in

    // props = {
        // x: [],
        // y: f
    // }



    const {boxList, setBoxList} = props
    // Destructuring 'x' and 'y' are matching from the 
    // app.js <BoxForm>
    // const {x, y} = props
    // 



    const [box, setBox] = useState({
        color:''
    })



    const submitHandler = (e) => {
        e.preventDefault()
        setBoxList([...boxList, box])
        setBox({
            color:''
        })
    }



    const changeHandler = (e) => {
        setBox({...box, [e.target.name]:e.target.value})
    }



    return (
        <div className="compDiv">
            <form className="boxForm" onSubmit={submitHandler}>
                <label>Color</label>
                <input type="text" name="color" onChange={changeHandler} value={box.color}/>
                <button>Add</button>
            </form>
        </div>
    )
}



export default BoxForm;