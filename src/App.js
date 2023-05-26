import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import Form from './components/Form';
import DisplayPeople from './components/DisplayPeople';
import DisplayPlanets from './components/DisplayPlanets';


function App() {
  const [category, setCategory] = useState("")
  const [id, setId] = useState("")

  const handleSubmit = (category, id) => {
    setCategory(category)
    setId(id)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Form category={category} id={id} onSubmit={handleSubmit}/>
        {/* <DisplayPeople/>
        <DisplayPlanets/> */}

          <Routes>
            <Route path="/" element={<Form category={category} id={id}/>}/>
            <Route path="/people/:id" element={<DisplayPeople/>}/>
            <Route path="/planets/:id" element={<DisplayPlanets/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
