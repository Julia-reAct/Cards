import React, {useState}from "react"
import './App.css';
import FormCardH from './ ELements/FormPageHumans/FormCardH'
import FormCardCompany from './ ELements/FormPageCompany/FormCardCompany'

function App() {
    const[showForm,setShowForm]=useState([false])
    const handleClick=(show)=>{
        setShowForm([true,show])
    }
    console.log(showForm)
  return (
    <div className="App">
        {showForm[0]==false?
            <div>
                <label>Choose company or human </label>
                <button onClick={()=>handleClick('company')}>Company</button>
                <button onClick={()=>handleClick('human')}>Human</button>
            </div> :
            showForm[1]=='company'? <FormCardH/>:<FormCardCompany/>
        }
    </div>
  );
}

export default App;
