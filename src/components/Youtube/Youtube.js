import classes from './Youtube.module.css'
import PageHeader from './../PageHeader/PageHeader'

const youtubeVideo = (url, thumbnail, description) => {
    return {
        <div className = {classes.videoContainer}>
        <div className = {classes.Thumbnail}>
        <img src={thumbanil} alt="thumbnail"></img>
        </div>
        </div>
    }
}
const Youtube = () => {
    return ( 
        <div className={classes.YouTube}>
            <PageHeader title = {"I'm also on YouTube"} />
            <div> className={classes.YoutubeContent}
            <div className={classes.Paragraph}>
                <p>
                    On my channel you can find videos about shitposts.
                </p>
            </div>
            <div className={classes.videos}>

            </div>
            </div>
        </div>
     );
}
 
export default Youtube;