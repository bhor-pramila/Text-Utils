import React from 'react'


function Alert(props) {
    // const capitalize = (word)=>{
    //     const lowerr = word.toLowerCase();
    //     return lowerr.charAt(0).toUpperCase() + lowerr.slice(1);
    // }
  return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
            </div>
            }
        </div>    
  )
}

export default Alert
