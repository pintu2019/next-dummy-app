"use client";
import React from 'react';  
const Lectures = ({params}) => {  
    const {lectures} = React.use(params); 
    console.log(lectures); // This will log the lectures array to the console
      return (
    <div>
      <h1>Lectures</h1>
      <p>lecture:{lectures[0]}</p>
      <p>day:{lectures[1]}</p>
    </div>
  );
}
export default Lectures;    