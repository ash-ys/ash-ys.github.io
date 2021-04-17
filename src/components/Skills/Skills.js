import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import CodeThinking from'./../../img/CodeThinking.svg'

const listTitleStyle = {fontWeight :900, color:'#9b1fe8',marginBottom:'4px'}

const backendSkills =
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Java-SQL</li>
</ul>

const frontendSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>ReactJS-HTML-CSS</li>
</ul>

const otherSkills =
<ul>
    <li style={listTitleStyle}>OTHER SKILLS</li>
    <li>GIT-Figma</li>
</ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills]


const Skills = () => {
    return ( 
        <div className={classes.Skills}>
            <PageHeader title={'What about the skills?'}/>
            <p>
                I'm a life long learner and enjoy learning new stuff!
                Below are some programming languages ,toolkits frameworks and
                libraries that i work with an like.
                Some of them i control better than the others.
            </p>
            <div className={classes.Container}>
                <img src={CodeThinking} alt="CodeThinking"/>
                {totalSkills.map(skills=>{
                    return(
                        <div className={classes.List}>
                            {skills}
                            </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;