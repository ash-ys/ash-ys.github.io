import classes from "./Home.module.css";
import code from './../../img/code.svg'
import binaryWorld from './../../img/binaryWorld.svg'
const Home = () => {
    return ( 
        <div className = {classes.Home}>
            <div className= {classes.Container} id="home">
                <h1 className={classes.Hello}>Hello, World</h1>
                <h1>Welcome</h1>
                <h1>To my website.</h1>

            </div>
            <img className={classes.Code} src={code} alt="code"></img>
            <img className={classes.BinaryWorld} src={binaryWorld} alt="binaryWorld"></img>
            </div> 
     );
}  
 
export default Home;