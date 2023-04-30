import './App.css'

import React,{useState}from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {BrowserRouter as Router,Switch,Routes,Link,Route} from "react-router-dom"

const App=()=>{
  const pageSize=5;
  const apiKey="fd654505f80f4e58af7119675aa69b06";
  const [progress,setProgress]=useState(0);

  return (
    <div> 
      <Router>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News key="general" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="general"/>}/>
        <Route exact path="/business" element ={<News key="business" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News key="health" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="sports"/>}/>
        <Route exact path="/technology"element={<News key="technology" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="technology"/>}/>
        <Route exact path="/health"element={<News key="health" setProgress={setProgress} apiKey={apiKey}  pageSize={5} country="in" category="health"/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;

