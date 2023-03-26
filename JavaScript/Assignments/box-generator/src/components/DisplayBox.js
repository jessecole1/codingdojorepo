import React from 'react'

const DisplayBox = (props) => {



    const {boxList} = props


    return (
        <div className="displayBox">
            {
                boxList.map((x,idx) => (
                    <div key={idx} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: x.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayBox;