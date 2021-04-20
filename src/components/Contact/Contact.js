import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css'
import {motion} from 'framer-motion'
const handleURL =(url) => {
    return () => window.open(url,"_blank")
}
const Contact = () => {
    return ( 
        
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <motion.div>
                    <FaYoutube color ='white' size= '30px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.youtube.com/channel/UC5I1ZV96xf-qffbCdFYZihg')} />
                </motion.div>
                <motion.div>
                    <FaInstagram color ='white' size= '30px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.instagram.com/a.s.h.i.s.h.w.a.g.l.e/')} />
                </motion.div>
                <motion.div>
                    <FaGithub color ='white' size= '30px' style={{padding: '1%'}}
                     onClick={handleURL('https://github.com/ash-ys')} />
                </motion.div>
                <motion.div>
                    <FaLinkedin color ='white' size= '30px' style={{padding: '1%'}}
                     onClick={handleURL('https://www.linkedin.com/in/ashish-wagle-a4155313a/')} />
                 </motion.div>
                 </div>
        </div>
     );
}
 
export default Contact;