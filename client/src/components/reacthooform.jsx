import React from 'react'
import  {useForm}  from 'react-hook-form';
function reacthooform() {
 const { register, handleSubmit, errors} = useForm();

    return (
                <div style={{marginTop:"100px"}}>
       <form onSubmit={handleSubmit} >
         <div><label> Name:  <input name="fname" ref={register}  /> </label> </div>
         <div><label>Last Name:  <input name="lname" ref={register} /> </label></div>
                                                            <div>  <label>
                           Choose: <select name="selectOpt" ref={register} >
                             <option value='1'>1</option>
                             <option value='2' selected>2</option>
                             <option value='3'>3</option>
                           </select>
                           </label></div>
                                  <br />                        
         <input type='submit' />
         </form>
        </div>
    )
}

export default reacthooform
