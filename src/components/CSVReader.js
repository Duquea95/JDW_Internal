"use client"
import { csvUpload } from "../../services/csvServices";
import { readCSV } from "../../lib/csvFeatures";
import { useState } from "react";

export default function CSVReader(){
    const [componentState, setComponentState] = useState({
        csvData: null
    })

    const handleFile = async(event) => {
        // console.log(event.target.files[0])
        setComponentState({
            csvData: await readCSV(event)
        })
    }

    const handleSubmit = async() => {
        await csvUpload(componentState.csvData)
    }

    console.log(componentState.csvData)

    return(<>
        <input type="file" style={{border: '1px solid #f8f8f8'}} name='uploadFile' onChange={event => handleFile(event)}/>
        <button onClick={handleSubmit}>Submit</button>
    </>)
}