import React from 'react'
import { useState } from 'react'

function SignUpForm() {
 const  [name ,setName] = useState([''])
 const  [lname ,setLName] = useState([''])
 const  [option ,setOption] = useState();
 function handleSubmit(e) {
   alert(`the first name is ${name} and last name is ${lname} and option ${option}`)
   e.preventDefault();
   setName('')
   setLName('')
 }
  return (
    <div style={{marginTop:"100px"}}>
       <form onSubmit={handleSubmit} >
         <div><label> Name:  <input value={name} onChange={(e) =>{ console.log(e.target)
                                                              setName(e.target.value)}} /> </label> </div>
         <div><label>Last Name:  <input value={lname} onChange={(e) =>{ console.log(e.target)
                                                              setLName(e.target.value)}} /> </label></div>
                                                            <div>  <label>
                           Choose: <select  option={option} onChange={ (e) => setOption(e.target.value)}>
                             <option value='1'>1</option>
                             <option value='2' >2</option>
                             <option value='3'>3</option>
                           </select>
                           </label></div>
                                  <br />                        
         <input type='submit' />
         </form>
    </div>
  )
}
export default SignUpForm