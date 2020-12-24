import React, {useState} from "react";
import "./style.css";


export default function App() {

const [oneSty, setoneSty] = useState({})
const [twoSty, setTwosty] = useState({})
const [threeSty, setThreesty] = useState({})
const [fourSty, setFoursty] = useState({})



const one = () => {
  setoneSty({width: '80em'})

  setTwosty({width: '7em'})
  setThreesty({width: '7em'})
  setFoursty({width: '7em'})
}
const two = () => {
  setoneSty({width: '7em'})
  setTwosty({width: '80em'})
  setThreesty({width: '7em'})
  setFoursty({width: '7em'})
}
const three = () => {
  setoneSty({width: '7em'})
  setTwosty({width: '7em'})
  setThreesty({width: '80em'})
  setFoursty({width: '7em'})
}
const four = () => {
  setoneSty({width: '7em'})
  setTwosty({width: '7em'})
  setThreesty({width: '7em'})
  setFoursty({width: '80em'})
}

  return (
    <React.Fragment>
    <div id='container'>
    <div onClick={one} style={oneSty} id='one'>The first</div>
    <div onClick={two} style={twoSty}  id='two' >The second</div>
    <div onClick={three} style={threeSty} id='three' >The third</div>
    <div onClick={four} style={fourSty} id='four' >The fourth</div>
        <a id='link' href='#'/>

    </div>
    </React.Fragment>
  );
}
