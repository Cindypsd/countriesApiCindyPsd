import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import {  useSelector } from 'react-redux';




export const Form = () => {



 const countries =  useSelector(state=>state.countries)
  let countriesNames = countries.map(country=> {return {label: country.name , value: country.id}})
  
  // const [selected, setSelected] = useState([]);
  // const [check, setCheck] = useState(false)
  

  const [form, setForm] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid:""
  })

  console.log(form)

  const [errors, setErrors] = useState({
    name:"",
    level:"",
    season:"",
    duration:"",
    countryid:""
  })

  const changeHandler = (event) => {
    const property = event.target.name //saber cual esta cambiando
    const value = event.target.value

    validate({
      ...form, 
      [property ]: value})

    setForm({
      ...form, 
      [property ]: value})
  }

  


  const validate = (form) => { 

    form.name &&
    form.name.length < 4 ? setErrors({...errors, name: "Add a name for the activity at leat 4 characters please"}):setErrors({...errors, name: ""})
  }



  const submitHandler= (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/activities",form)
    .then(res=>alert(res))
    .catch(err=>alert(err))
  }

  return (
    <div>
      <h1>Create an Activity</h1>

        <form onSubmit={submitHandler}>
          <div>
          <label>*Name:</label>
          <input type="text" value={form.name} onChange={changeHandler} name="name"/>
          {errors.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label>Level: </label>

            <input type="radio" id='1' name='level' value='1' onChange={changeHandler} />
            <label htmlFor='1'>1</label>

            <input type="radio" id='2' name='level' value='2' onChange={changeHandler}/>
            <label htmlFor='2'>2</label>

            <input type="radio" id='3' name='level' value='3' onChange={changeHandler}/>
            <label htmlFor='3'>3</label>

            <input type="radio" id='4' name='level' value='4' onChange={changeHandler}/>
            <label htmlFor='4'>4</label>

            <input type="radio" id='5' name='level' value='5' onChange={changeHandler}/>
            <label htmlFor='5'>5</label>


          </div>


          <div>
            <label>Season: </label>

            <input type="radio" id='spring' name='season' value='spring' onChange={changeHandler} />
            <label htmlFor='spring'>Spring</label>

            <input type="radio" id='summer' name='season' value='summer' onChange={changeHandler}/>
            <label htmlFor='summer'>Summer</label>

            <input type="radio" id='fall' name='season' value='fall' onChange={changeHandler}/>
            <label htmlFor='fall'>Fall</label>

            <input type="radio" id='winter' name='season' value='winter' onChange={changeHandler}/>
            <label htmlFor='winter'>Winter</label>

          </div>


          <div>
          <label>Duration</label>
          <input type="text" value={form.duration} onChange={changeHandler} name="duration"/>
          </div>

          

          
         <div>

          <div>
            <label>Countries</label>
            <input type="text" value={form.countryid} onChange={changeHandler} name="countryid"/>
          </div>

          <select name="countryid" onChange={changeHandler}>
            <option >Select</option>
            { 
                countriesNames.map(country=>{
                return <option key={country.value} value={country.value}>{country.label}</option>
                })
              }
            </select>
              <button type='text' >Add country</button>

         </div>
          


      

{/*           
          <button type='submit' >Submit</button> */}
          
        </form>

        {/* <button onClick={checkActivity}>Add activity</button> */}
        <h3>Please cheack the information</h3>
        <p>Actividad: {form.name}</p>
        <p>Dificulty level: {form.level}</p>
        <p>Season: {form.season}</p>
        <p>Contries: {form.countryid}</p>
{/* 
        <input id="infocheck" type="checkbox" name="infocheck" onChange={handleChecked}/>
        <label htmlFor='infocheck'>Yes, is ok</label> */}

      <Link to="/home">
        <button>Return to Home</button>
      </Link>
    </div>
  )
}
