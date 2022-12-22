import React from 'react'
import { motion } from "framer-motion";
import me from "../../assets/founder.webp"


const Founder = () => {
    const options = {
        initial: {
            x : "-100%",
            opacity: 0
        },
        whileInView: {
            x : 0,
            opacity: 1
        }
    }
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Akash chandra</h3>
            <p>Hey, Everyone I am AKash chandra, the founder of MBA Burger wala.<br/>
            Our aim is to make you Hungry for Burger</p>
        </motion.div>

    </section>
  )
}

export default Founder