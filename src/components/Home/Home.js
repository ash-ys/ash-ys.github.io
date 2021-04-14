import classes from "./Home.module.css";
import code from './../../img/code.svg'
const Home = () => {
    return ( 
        <div className = {classes.Home}>
            <div className= {classes.Container}>
                <h1 className={classes.Hello}>Hello, world</h1>
                <h1>Welcome on my website</h1>
            </div>
            <img className={classes.Code} src="" alt=""/>
        </div>
     );
}  
 
export default Home;