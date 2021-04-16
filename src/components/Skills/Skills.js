import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'

const backendSkills =
<ul>
    <li>BACKEND</li>
    <li>Java-SQL</li>
</ul>

const frontendSkills =
<ul>
    <li>FRONTEND</li>
    <li>ReactJS-HTML-CSS</li>
</ul>

const otherSkills =
<ul>
    <li>OTHER SKILLS</li>
    <li>GIT-Figma</li>
</ul>

const Skills = () => {
    return ( 
        <div>
            <PageHeader title={'What about the skills?'}/>
            <p>
                I'm a life long learner and enjoy learning new stuff!
                Below are some programming languages ,toolkits frameworks and
                libraries that i work with an like.
                Some of them i control better than the others.
            </p>
            <div>
                className{classes.Container}
            </div>
        </div>
     );
}
 
export default Skills;