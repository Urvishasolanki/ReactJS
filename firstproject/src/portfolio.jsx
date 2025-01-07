import './portfolio.css'
import img from './img/img1.jpg'
function Portfolio(){
    return (
      <div>
        <h1>portfolio</h1>
        <div className="main">
            <div className="maindiv">
            <div className="imgdiv">
               <img src={img} alt="" />
            </div>
            <div className="content">
                <p>Welcome to my portfolio! i am passionate web devloper with a focus on creating interactive and user-friendly websites. feel free to explore my work and contact me for any inquiries</p>
               <h2>skills</h2>
               <span>
                HTML5<br></br>
                CSS3<br></br>
                JavaScript<br></br>
                Responsive Web Design<br></br>
                Frontend Frameworks
                
               </span>
               <h3>Contact</h3>
                Email-ID:urvisha@gmail.com<br></br>
                contact-no:7862900224

            </div>
            </div>
        </div>
      </div>
    )
}
export default Portfolio