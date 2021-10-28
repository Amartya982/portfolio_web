import React from 'react'
import "./contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from 'framer-motion';

const Contact = () => {
    return (
 
 <div className="section">
          <motion.h1 className="tex"
            initial='hidden'
            animate={{}}
            transition={{ duration: 2 }}
          >
              CONTACT
          </motion.h1>

         
            <motion.p className="para"
            initial={{y:120}}
            animate={{scale:2,x:50,y:9}}
            transition={{ type:"spring",bounce:0.3 ,duration: 1 }}
          >
        I am available for freelance work.<br />Drop me a line if 
            you fancy a chat
          </motion.p>
          <div className="left">
          <p>Phone No.</p>
          <p>Email</p>
          </div>
          <div className="right">
          <a className="link" href="">amarkumargta@gmail.com</a>
          <p className="no">+918827969403</p>
          </div>

        </div>
        </div>
       
      

       
    )
}

export default Contact
