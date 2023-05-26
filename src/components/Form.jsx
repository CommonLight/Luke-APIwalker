import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)

    }

  return (    
    <form onSubmit={handleSubmit} style={{margin: "50px auto"}}>
        
        <img style={{height: "50px"}}
        src={require("./imgs/swLogo.png")} alt="starwars logo" />

        <h1 style={{
            marginBottom: "30px"
            }}>Luke-API-Walker
        </h1>

        <label style={{
            marginRight: "10px",
            fontSize: "14pt"
            }} htmlFor="people">Search for:
        </label>
        
        <select style={{
            padding: "10px",
            marginRight: "30px",
            width: "150px",
            border: "none",
            backgroundColor: "lavender",
            borderRadius: "5px",
            fontSize: "14pt",
            cursor: "pointer"
            }} onChange = {(e) => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        
        <label style={{
            marginRight: "10px",
            fontSize: "14pt"
            }} htmlFor="id">ID:
        </label>

        <input style={{
            padding: "10px",
            marginRight: "30px",
            width: "30px",
            border: "none",
            backgroundColor: "lavender",
            borderRadius: "5px",
            fontSize: "14pt"
            }} type="text" id="enterID"
            onChange={(e) => setId(e.target.value)}>
        </input>

        <button style={{
            padding: "10px 30px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "14pt",
            cursor: "pointer"
            }} type="submit">Search
        </button>
    </form>
  )
}

export default Form