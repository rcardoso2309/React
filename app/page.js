"use client"

import { Title } from './componentes/Title'
import { useState } from 'react';

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");

  // console.log("inputText", inputText);

  const handleOnChange = (event) => {
    console.log(event)
    const { value, id } = event.target;
    id === "name" ? setInputName(value) : setInputSurname(value)
  }

const clean = () => {
  setInputName("")
  setInputSurname("")
}


  return (
    <>
      
      <h1>Form React</h1>

      <input 
        type="text" 
        id="name"
        placeholder="Name"
        value={inputName}
        onChange={(event) => handleOnChange(event)}
      />

      <input
        type= "text"
        id="surname"
        placeholder="Surname"
        value={inputSurname}
        onChange={(event) => handleOnChange(event)}
      />

        <button onClick={() => clean()} >Clean</button>
        <button>Submit</button>
      </>
  );
}

