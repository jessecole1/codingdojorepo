// Think of navigate like a list, one that will remember where our user has been. 
// navigate(-1) will send the user back one step, and navigate(1) will send the user forward one step.

import React, { useState } from "react";
// NEW: importing { useNavigate }
import { useNavigate } from "react-router-dom";
    
const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  // NEW: creating a variable equal to the useNavigate method
  const navigate = useNavigate();
  
  const sendSurvey = (e) => {
    e.preventDefault();
    // do something with the data
    // NEW: when the sendSurvey method is called, we will navigate to the "/results" path
    navigate("/results");
    // navigate(01); NEW: this will send the user to the previous page where they were on. 
  }
    
  return (
    <form onSubmit={ sendSurvey }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
  );
}

