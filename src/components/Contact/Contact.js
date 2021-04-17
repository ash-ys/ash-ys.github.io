import { FaYoutube, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css'
const handleURL =(url) => {
    return () => window.open(url,"_blank")
}
const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
            <FaYoutube color ='white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.youtube.com/channel/UC5I1ZV96xf-qffbCdFYZihg')} />
        
        <FaInstagram color ='white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.instagram.com/a.s.h.i.s.h.w.a.g.l.e/')} />

        <FaGithub color ='white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/ash-ys')} />

        <FaLinkedin color ='white' size= '30px' style={{padding: '1%'}}
            onClick={handleURL('https://www.linkedin.com/in/ashish-wagle-a4155313a/')} />
            </div>
        </div>
     );
}
 
export default Contact;