import React from 'react'
import { Link } from "react-router-dom"

const PaymentSuccess = () => {
  return (
    <section className='paymentSucess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, you can check Order Status</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess