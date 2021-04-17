import classes from'./About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/me.JPG'
const About = () => {
    return (  
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello I'm Ashish</h2>
                    <p>
                        Please I need internship. help me!
                        I am a software developer based on Nepal.
                        Never gonna give you up.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"/>
                </div>
            </div>
        </div>
    );
}
 
export default About;