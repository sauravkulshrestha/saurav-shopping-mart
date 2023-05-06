import React from 'react'

export default function Footer(props) {
  return (
    <div className='row mt-3'>

      <button className='btn btn-danger col-2' onClick={() => {props.resetBtnPressed()}}>Reset</button>
      <div className='col-8 bg-dark text-white d-flex justify-content-center'> <h3>{props.finalAmount} </h3> </div>
      <button className='btn btn-primary col-2'>Pay Now</button>

    </div>
  )
}
