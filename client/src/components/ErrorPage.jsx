import React from 'react'
import './css/SignUp.css';
function ErrorPage() {
   const style= {
        justifyContent:"center",
         alignItems:"center",
           color:"red",
        }
    return (
        <div>
            <h3 style={style} className="errorPage">Page not Found!!</h3>
        </div>
    )
}

export default ErrorPage
