import React from 'react'

export default function Product(props) {
    return (
        <div className='row mt-3'>

            <div className='col-4'>

                <h3>{props.product.Name}<span className="badge bg-secondary">₹ {props.product.Price}</span></h3>

            </div>

            <div className='col-4'>

                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={() => { props.decrementQuantity(props.index) }}>
                        -
                    </button>
                    <button type="button" className="btn btn-warning">
                        {props.product.Quantity}
                    </button>
                    <button type="button" className="btn btn-success"
                        onClick={() => {
                            props.incrementQuantity(props.index)
                        }}>
                        +
                    </button>
                </div>

            </div>

            <div className='col-2'>
                {props.product.Quantity * props.product.Price}

            </div>

            <button className='col-2 btn btn-danger'
                onClick={() => {
                    props.removeItem(props.index)
                }}>

                Remove

            </button>





        </div>
    )
}
