import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayPlanets = () => {
    const {id} = useParams()
    const [swapi, setSwapi] = useState({})
    const [error, setError] = useState(false)

    const getData = () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
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
                <p>Diameter: {swapi.diameter}</p>
                <p>Rotation Period: {swapi.rotation_period}</p>
                <p>Orbital Period: {swapi.orbital_period}</p>
                <p>Climate: {swapi.climate}</p>
                <p>Terrain: {swapi.terrain}</p>
                <p>Population: {swapi.population}</p>
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
export default DisplayPlanets