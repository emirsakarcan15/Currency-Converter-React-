import React, { useState } from 'react'
import '../css/conversion.css'
import { FaArrowsAltH } from "react-icons/fa";
import axios from 'axios';

let base_url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fk1xmrKXe5v5IoFQn8399rXKZI7ODHlmzadtMRhR"



function conversion() {

    const [ amount , setAmount ] = useState(0);
    const [ input_currency , setInput_Currency ] = useState(" ");
    const [ output_currency , setOutput_Currency ] = useState(" ");
    const [ result , setResult ] = useState(0);

    const convert = async ()=> {
        let response = await axios.get(`${base_url}&base_currency=${input_currency}`)
        let data = await response.data.data

        setResult((amount * data[output_currency]).toFixed(3))
    }
    

    return (
    <div id="wrapper">
        <div id="title">
            CONVERTISSEUR DE DEVISES
        </div> 
        <div id="conversion">
            <input value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Entrez le montant " id="input" class="form-control" type="number" aria-label="Text input with dropdown button"/>
            <select value={input_currency} onChange={(e)=> setInput_Currency(e.target.value)} id="input-currency">
                <option selected class="dropdown-item">SELECT</option>
                <option class="dropdown-item">TRY</option>
                <option class="dropdown-item">EUR</option>
                <option class="dropdown-item">USD</option>
            </select>
            <FaArrowsAltH id="arrow" />
            <select value={output_currency} onChange={(e)=> setOutput_Currency(e.target.value)} id="output-currency">
                <option selected class="dropdown-item">SELECT</option>
                <option class="dropdown-item">TRY</option>
                <option class="dropdown-item">EUR</option>
                <option class="dropdown-item">USD</option>
            </select>
            <input value={result} readOnly id="output" class="form-control" aria-label="Text input with dropdown button"/>
        </div>
        <div id="button-div">
            <button onClick={convert} id="button" type="submit">CONVERTIS</button>
        </div>
    </div>
  )
}

export default conversion