import classes from "./Home.module.css";
import binaryWorld from './../../img/binaryWorld.svg'
import WaveLine from'./WaveLine'
const Home = () => {
    return ( 
        <div className = {classes.Home} id="home">
            <div className= {classes.Container}>
                <h1 className={classes.Hello}>Hello, World</h1>
                <h1>Welcome TO My Website.</h1>
                <h1>TO My Website.</h1>
            </div>
            <img className={classes.BinaryWorld} src={binaryWorld} alt="binaryWorld"></img>
            </div> 
     );
}  
 
export default Home;