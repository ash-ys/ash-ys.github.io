import {motion} from 'framer-motion'
const WaveLine = () => {
    return (  
        <svg  viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
 initial={{strokeOpacity: 0, pathLength:0}}
 animate={{strokeOpacity: 1, pathLength:1}}
 transform={{duration: 2}}
 
stroke="#D96ED4" strokeOpacity="0.1" strokeWidth="10"/>
</svg>
    );
}
 
export default WaveLine;