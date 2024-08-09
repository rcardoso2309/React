"use client"

import { Title } from './componentes/Title'
import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState("");


  const handleOnChange = (event) => {
    const { value} = event.target;
    console.log(value);
    
    setState(value)

  }

const clean = () => {
  setState("")

}


  return (
    <>
      
      <h1>Form React</h1>

      <input 
        type="text" 
        id="name"
        placeholder="Name"
        value={state}
        onChange={(event) => handleOnChange(event)}
      />

        <button onClick={() => clean()} >Clean</button>
        <button>Submit</button>
      </>
  );
}

