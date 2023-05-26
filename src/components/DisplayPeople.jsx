import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'


const DisplayPeople = () => {
    const {id} = useParams()
    const [swapi, setSwapi] = useState({})
    const [error, setError] = useState(false)

    const getData = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            console.log(response)
            setSwapi(response.data)
            setError(false)
        })
        .catch(err => {
            console.log(err)
            setError(true)
        })
    }

    useEffect(() => {
        if (id){ getData() }}, [id])

if (!error) {
    return (
        <div>
            <h2 style={{marginTop: "-20px"}}>{swapi.name}</h2>
            <div style={{
                width: "180px",
                height: "5px",
                backgroundColor: "blue",
                margin: "5px auto"}}>
            </div>
            <div style={{fontSize: "14pt"}}>
                <p>Height: {swapi.height}</p>
                <p>Mass: {swapi.mass}</p>
                <p>Hair Color: {swapi.hair_color}</p>
                <p>Skin Color: {swapi.skin_color}</p>
                <p>Eye Color: {swapi.eye_color}</p>
            </div>
        </div>
      )
    } else {
        return (
            <div style={{marginTop: "-20px"}}>
                <h2>ERROR!</h2>
                <div style={{
                width: "180px",
                height: "5px",
                backgroundColor: "blue",
                margin: "5px auto"}}> 
                </div>
                <h3>These are not the droids you're looking for!</h3>
                <p>Please enter a valid ID.</p>
                <img src={require("./imgs/droids.png")} alt="C-3PO and R2-D2" />
            </div>
        )
    }
}
export default DisplayPeople